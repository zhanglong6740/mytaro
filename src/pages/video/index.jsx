import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text , Swiper , SwiperItem ,Image} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './index.less'




@inject('counterStore')
@observer
class Index extends Component {
  constructor (props){
    super(props)
    this.state = {
      list:[{
        id:1,
        title:'第1话 铁与血',
      },{
        id:2,
        title:'第2话 巴巴托斯',
      },{
        id:3,
        title:'第3话 光荣之死',
      },{
        id:4,
        title:'第4话 生命的价值',
      },{
        id:5,
        title:'第5话 红色天空的彼方',
      },{
        id:6,
        title:'第6话 关于他们',
      },{
        id:7,
        title:'第7话 捕鲸',
      },{
        id:8,
        title:'第8话 结拜',
      },{
        id:9,
        title:'第9话 互相偎依',
      },{
        id:10,
        title:'第10话 来自明天的信',
      }]
    }
  }
  config = {
    navigationBarTitleText: '剧集'
  }
  
  componentWillMount () { }

  componentWillReact () {
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  clickLi (id){
    Taro.navigateTo({
      url: `/pages/video/detail?id=${id}`
    })
  }

  render () {
    const { counterStore: { counter } } = this.props
    return (
      <View className='index'>
      {
        this.state.list.map(item =>(
          <View className="li" onClick={()=>{this.clickLi(item.id)}}>
           {item.title}
          </View>
        ))
      }
       
      </View>
    ) 
  }
}

export default Index 
