import React , { Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

function VerticalSeparator(props)  {
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
    borderTopWidth: 1,
  },
  text : {
    fontSize: 16,
  },
})

export default VerticalSeparator