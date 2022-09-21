import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Task = (props) => {
  const {colors} = useTheme()
  return (
    <View style={[styles.item, {backgroundColor:colors.card}]}>
      <View style={styles.alignLeft}>
        <View style={styles.checkbox}>
          <Image source={require('../assets/check.png')} style={{height:25, width:25}}/>
        </View>
        <Text style={[styles.itemText, {color:colors.text}]}>{props.text}</Text>
      </View>
      <TouchableOpacity onPress={props.onPress} style={styles.circular}>
        <Text style={styles.textDelete}>Delete</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  item:{
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  alignLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 5,
    marginRight: 15
  },
  itemText: {
    maxWidth: '80%',
    fontWeight:'500'
  },
  circular: {
    height: 25,
    width: 60,
    backgroundColor: "#53A4F5",
    borderColor: '#53A4F5',
    borderWidth: 2,
    borderRadius: 5,
    justifyContent:'center',
    alignItems:'center'
  },
  textDelete:{color:'#fff', fontWeight:'500'}
});

export default Task;
