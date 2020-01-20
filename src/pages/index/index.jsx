import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text , Swiper , SwiperItem ,Image} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'

import './index.less'
import timg from '../../images/timg.jpg'
import timg2 from '../../images/timg2.jpg'
import timg3 from '../../images/timg3.jpg'
import GUNDAM1 from '../../images/GUNDAM1.jpg'
import GUNDAM2 from '../../images/GUNDAM2.png'
import GUNDAM3 from '../../images/GUNDAM3.png'
import GUNDAM4 from '../../images/GUNDAM4.png'


@inject('counterStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
 
  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  increment = () => {
    const { counterStore } = this.props
    counterStore.increment()
  }
 
  decrement = () => {
    const { counterStore } = this.props
    counterStore.decrement()
  }

  incrementAsync = () => {
    const { counterStore } = this.props
    counterStore.incrementAsync()
  }

  render () {
    const { counterStore: { counter } } = this.props
    return (
      <View>
        <Swiper className="banner" indicatorActiveColor={'rgba(255,255,255,0.7)'} indicatorColor={'rgba(255, 255, 255, .3)'} indicatorDots={true} autoplay={true} interval={3000}>
          <SwiperItem>
            <View>
              <Image
                style='background: #fff;width: 100%;'
                src={timg}
              />
            </View>
          </SwiperItem>
          <SwiperItem>
            <View>
              <Image
                style='background: #fff;width: 100%;'
                src={timg2}
              />
            </View>
          </SwiperItem>
          <SwiperItem>
            <View>
              <Image
                style='background: #fff;width: 100%;'
                src={timg3}
              />
            </View>
          </SwiperItem>
        </Swiper>
        <View className="organism">
          <Text className="title">登场机体</Text>
          <View className="organismItem">
            <Image
                style='background: #fff;width: 90px;height:150px;'
                src={GUNDAM1}
            />
            <View className="organismText">
              <Text>
                巴耶力
              </Text>
               <Text className="introduce">
                这台象征着“锦之御旗”的王座曾由加拉尔霍恩创办人——阿古尼卡·卡耶鲁驾驶，带领着人类迎向胜利的存在，拥有本机的人即为“能登上加拉尔霍恩之顶点的人”。
随着时代变迁，阿古尼卡和主魔之名已被神格化。
              </Text>
              <View className="ButtonBox">
              <Button style="">了解详情</Button>
              </View>
            </View>
          </View>
          <View className="organismItem">
            <Image
                style='background: #fff;width: 90px;height:150px;'
                src={GUNDAM2}
            />
            <View className="organismText">
              <Text>
                巴巴托斯
              </Text>
              <Text className="introduce">
              于300年前的“厄祭战”中所使用的其中一架敢达骨架，这台MS长期被当作CGS动力炉运用。CGS的少年们因为遭遇加拉尔霍恩的袭击，紧急将它启动，由三日月进入驾驶。
              </Text>
              <View className="ButtonBox">
              <Button style="">了解详情</Button>
              </View>
            </View>
          </View>
          <View className="organismItem">
            <Image
                style='background: #fff;width: 90px;height:150px;'
                src={GUNDAM3}
            />
            <View className="organismText">
              <Text>
                古辛
              </Text>
               <Text className="introduce">
               从布鲁瓦斯掳获古辛后，塔宾斯把它改造为昭弘用的机体。沿用巴巴托斯的备用装甲，外型有了大幅的转变。移植了同时掳获的曼‧罗迪的才系统。头部安装了高感度感应器，可以变成瞄准模式来进行远距离支援。
              </Text>
              <View className="ButtonBox">
              <Button style="">了解详情</Button>
              </View>
            </View>
          </View>
          <View className="organismItem">
            <Image
                style='background: #fff;width: 90px;height:150px;'
                src={GUNDAM4}
            />
            <View className="organismText">
              <Text>
                维尔达
              </Text>
               <Text className="introduce">
               在阿瑞安赫德舰队进行长期间整修、调整的机体。 其机体的存在，特别是在相关系统中被视为最重要机密，在舰队里也只有莱斯达尔等少数人知道详情
              </Text>
              <View className="ButtonBox">
              <Button style="">了解详情</Button>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default Index 
