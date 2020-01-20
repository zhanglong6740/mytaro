import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text , Swiper , SwiperItem ,Image} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './index.less'


@inject('counterStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '历史'
  }

  componentWillMount () {
  const { counterStore: { historyId } } = this.props 
    console.log(historyId)
  }

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
  clearHis (){
    this.props.counterStore.decrement()
  }

  render () {
    const { counterStore: { historyId } } = this.props
    return (
      <View className='index'>
        
        {
          historyId==0?<View >暂无记录</View>:<View >您刚才看到了<Text style='color:red' onClick={()=>{clickLi(historyId)}}>第{historyId}话</Text></View>
          
        }
          
        <Button onClick={this.clearHis}>清空记录</Button>
      </View>
    )
  }
}

export default Index 
