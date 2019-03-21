import React, { Component } from 'react'
import Video from 'react-native-video'
import { 
  StyleSheet,
  Text,
  ActivityIndicator,
 } from 'react-native'
import Layout from '../components/layout'
import ControlLayout from '../components/control-layout'
import PlayPause from '../components/play-pause'
import FullScreen from '../components/full-screen'


class Player extends Component {

  state = {
    loading: true,
    paused: false,
    fullScreen: false,
  }

  onBuffer = ({ isBuffering }) => {

    this.setState({
      loading: isBuffering 
    })
  }

  onLoad = () => {

    //no funcionaba en versiones anteriores el on buffer en android
    //por eso se utilizo onLoad
    this.setState({
      loading: false 
    })
  }

  playPause = () => {
    this.setState({
      paused: !this.state.paused
    })

  }

  handleFullScreen = () => {

    //this.player.presentFullScreenPlayer()

    this.setState({
      fullScreen: !this.state.fullScreen
    })

  }

  render() {

    return(
      <Layout   //paso el video como una props
        loading = {this.state.loading}
        video={
          <Video
            ref={ref => {this.player = ref}}     
            source={{uri: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}}
            style={styles.video}
            resizeMode='contain'
            onBuffer={this.onBuffer}
            onLoad={this.onLoad}
            paused={this.state.paused}
            fullscreen={this.state.fullScreen}
          />
        }
        loader={
          <ActivityIndicator  color='red'/>
        }
        controls={
          <ControlLayout>
            <PlayPause
              onPress={this.playPause}
              paused={this.state.paused}
            />
            <Text>Progress Bar</Text>
            <Text>Time Left</Text>
            <FullScreen
              onPress={this.handleFullScreen}
              fullScreen={this.state.fullScreen}
            />

          </ControlLayout>
        }
      />
    )
  }
}









const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  }
})

export default Player



