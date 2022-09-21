import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { useTheme } from '@react-navigation/native';

 
let todayMonth = new Date().toDateString().slice(4,7);
let todayYear = new Date().toDateString().slice(11,15);
let todayDate = new Date().toDateString().slice(8,10);
let todayDay = new Date().toDateString().slice(0,3);

const CurrentDayButton = () => {
  const {colors} = useTheme()
  const [fontsLoaded] = useFonts({
    "playfairdisplay-medium": require("../assets/fonts/PlayfairDisplay-Medium.ttf"),
    "playfairdisplay-bold": require("../assets/fonts/PlayfairDisplay-Bold.ttf"),
  });
  return (
    <TouchableOpacity style={styles.monthYearContainer}>
      <View style={styles.dateDayContainer}>
        <Text style={[styles.monthYear,{color:colors.text}]}>{todayMonth}.{todayYear}</Text>
        <Text style={[styles.dateDay,{color:colors.text}]}>{todayDate}.{todayDay}</Text>
      </View>
      {/*{buttonPressed ? <ChevronDown /> : <ChevronRight />}*/}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  monthYearContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    // paddingTop: 80,
    // paddingHorizontal: 20,
  },
  dateDayContainer: {
    display: "flex",
    flexDirection: "column",
    marginRight: 12,
  },
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

export default CurrentDayButton;
