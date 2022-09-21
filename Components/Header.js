import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styled from 'styled-components';

let todayMonth = new Date().toDateString().slice(4,7);
let todayYear = new Date().toDateString().slice(11,15);
let todayDate = new Date().toDateString().slice(8,10);
let todayDay = new Date().toDateString().slice(0,3);

const Header = () => {
  return (
    <View>
        <Text style={styles.monthYear}>{todayMonth}.{todayYear}</Text>
        <Text style={styles.dateDay}>{todayDate}.{todayDay}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  // component: {
  //   // flex: 1,
  //   backgroundColor: 'midnightblue',
  // },
  monthYear: {
    fontFamily: "playfairdisplay-medium",
    fontSize: 20,
    fontWeight: "bold",
  },
  dateDay: {
    fontFamily: "playfairdisplay-bold",
    fontSize: 42,
    fontWeight: "bold",
  },
});

export default Header;
