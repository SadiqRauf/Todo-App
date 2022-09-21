import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Check = () => {
    const[check, setCheck] = useState(false)
  return (
    <TouchableOpacity onPress={()=>setCheck(!check)} style={[styles.check, {backgroundColor:check ? '#7D9BCA' : null}]}>
      {check && <Text>+</Text>}
    </TouchableOpacity>
  )
}

export default Check

const styles = StyleSheet.create({
    check:{
        borderColor:'#7D9BCA',
        borderWidth:2,
        height:30,
        width:30,
        borderRadius:7,
        justifyContent:'center',
        alignItems:'center'
    }
})