import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text , Swiper , SwiperItem ,Image ,CoverView ,Video,Input} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import io from 'weapp.socket.io'
import './index.less'

let socket={};


@inject('counterStore')
@observer
class Index extends Component {
  
  config = {
    navigationBarTitleText: '剧集'
  }
  constructor (props){
    super(props)
     socket = io('http://10.10.2.148:7001',{
      query: {
          room: `${this.$router.params.id}`,
          userId: `client_${Math.random()}`,
          type:1,//0 删除房间，1创建房间，2加入房间
        },

        transports: ['websocket']
    })
     let animation = Taro.createAnimation({
      duration: 4000,
      timingFunction: 'ease',
      delay: 1000
    });
    animation.translate(1000,1000).step()
    this.state = {
      ani: animation.export(),
      list:[],
      onLineNum:0,
      videoContext:{},
      dmStr:'',
    }
  }
  componentWillMount () {
    const {counterStore} = this.props
    counterStore.increment(this.$router.params.id)
    socket.on('connect', (data) => {
        const id = socket.id;
        console.log(socket.connected)
        // 监听自身 id 以实现 p2p 通讯
        socket.on(id, msg => {
          console.log(msg) 
        });
      });
      socket.on('online', msg => {
        console.log('#online,', msg);
        this.setState({
          onLineNum:msg.clients.length-1
        })
      });
      socket.on('chat', (res) => {
        console.log(res.data.payload);
        this.state.videoContext.sendDanmu({
        text:res.data.payload.content,
        color:'#fff'
      })
        this.setState({
          list:item
        })
    });
      this.state.videoContext = Taro.createVideoContext('videoEl')
  } 

  componentWillReact () {
  }

  componentDidMount () { }

  componentWillUnmount () {
    socket.close()
  }

  componentDidShow () { }

  componentDidHide () { }
  handleChange (e){
    this.setState({
      dmStr:e.detail.value
    })

  }
  sendDm(){
    if( this.state.dmStr!=""){
      socket.emit('chat',{
        target: 'chat',
        payload: {
          content : this.state.dmStr,
        },
      });
      this.state.videoContext.sendDanmu({
        text:this.state.dmStr,
        color:'#0ff'
      })
      this.setState({
        dmStr:''
      })
    }

  }
  render () {
    return (
      <View style="background:rgb(249, 249, 250);">
        <View>
          第{this.$router.params.id}话
        </View>
        <View className="video">
          <Video id="videoEl" src="http://10.10.2.148:7001/public/1.mp4" object-fit="fill" title={`第${this.$router.params.id}话`} enableDanmu={true} enablePlayGesture={true} style='width:100%;height:100%'>
          </Video>
        </View>
        <View className="inputBox">
          <Input maxLength="15" onInput={this.handleChange} value={this.state.dmStr}/>
          <Button onClick={this.sendDm}>
            发送
          </Button>
          <Text>同时观看人数:{this.state.onLineNum}</Text>
        </View>

        
      </View>
      
    )
  }
}

export default Index 
