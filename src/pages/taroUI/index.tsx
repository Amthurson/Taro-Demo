import { Component } from 'react'
import { View, OpenData, Map } from '@tarojs/components'
import { AtAvatar } from 'taro-ui'
import "taro-ui/dist/style/components/avatar.scss";
import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.less'

export default class Index extends Component {
  state = {
    longitude: 113.332882,
    latitude: 23.100679,
    mapSettingsProps: {
      skew: 60,
      enable3D: true,
      enableZoom: true,
      enableScroll: true,
      enablePoi: true,
      onClick: this.onTap
    }
  }

  componentDidMount () { }

  onTap(e: any) {
     console.log("click Map",e)
  }

  render () {
    const props: { longitude, latitude } = this.state
    const { mapSettingsProps } = this.state
    return (
      <View className='index'>
        <View className='top-wrap'>
          <AtAvatar size='normal' openData={{type:'userAvatarUrl'}} circle image='https://jdc.jd.com/img/200'></AtAvatar>
          <OpenData className='nickname' type='userNickName' />
        </View>
        <Map className='map' 
          {...props} 
          {...mapSettingsProps}
        />
      </View>
    )
  }
}
