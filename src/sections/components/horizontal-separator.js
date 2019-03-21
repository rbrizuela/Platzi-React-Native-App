import React , { Component} from 'react'
import {View, StyleSheet} from 'react-native'

function HorizontalSeparator(props)  {
  return (
    <View style={[
      styles.separator,
      {
        borderTopColor: (props.color) ? props.color : '#eaeaea'
      }
      ]}>

    </View>
  )
}

const styles = StyleSheet.create({
  separator : {
    flex: 1, 
    marginHorizontal: 5,
  },
})

export default HorizontalSeparator