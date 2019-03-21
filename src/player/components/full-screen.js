import React from 'react'
import {  
  View,
  Text,
  StyleSheet, 
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';


function FullScreen (props) {

  return(
    <TouchableHighlight 
      //style={styles.container}
      onPress={props.onPress}
      underlayColor='gray'
      hitSlop={{  //aura del boton , 5px afuera igual lo toma
        left: 5,
        top: 5,
        bottom: 5,
        right: 5,
      }}
    >
      {
        props.fullScreen ? 
          <Icon name="md-contract" size={30} color="black" />
        :
          <Icon name="md-expand" size={30} color="black" />
      }
    </TouchableHighlight>
    
  )

}

const styles = StyleSheet.create({
  button:  {
      color: 'white',
      fontSize: 10,
      fontWeight: 'bold'
  },
  container:  {
      justifyContent: 'center',
      paddingHorizontal: 10,
      height: 25,
      marginRight: 10,
      marginVertical: 5,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: 'black',
      backgroundColor: 'white'
  }
})

export default FullScreen