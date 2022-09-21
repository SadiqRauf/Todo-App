import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { DrawerItem } from "@react-navigation/drawer";
import { Switch, TouchableRipple } from "react-native-paper";
import { useTheme } from "@react-navigation/native";

const CustomDrawer = (props) => {
  const { colors } = useTheme();
  const onToggleSwitch = () => props.setIsDarkTheme(!props.isDarkTheme);
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DrawerItem
        label="Home"
        onPress={() => {
          props.navigation.navigate("Home");
        }}
      />
      <DrawerItem
        label="Task"
        onPress={() => {
          props.navigation.navigate("YourTask");
        }}
      />
      <DrawerItem
        label="Habits"
        onPress={() => {
          props.navigation.navigate("Habits");
        }}
      />
      <DrawerItem
        label="Events"
        onPress={() => {
          props.navigation.navigate("Events");
        }}
      />
      <DrawerItem
        label="Timer"
        onPress={() => {
          props.navigation.navigate("Timer");
        }}
      />
      <TouchableRipple
        onPress={() => {
          props.setIsDarkTheme(!props.isDarkTheme);
        }}
      >
        <View style={{ padding: 10, marginLeft: 5 }}>
          <Text style={{ fontSize: 15, fontWeight: "500", color: colors.text }}>
            {!props.isDarkTheme ? "Dark Theme" : "Light Theme"}
          </Text>
          <View style={{ paddingVertical: 10 }}>
            <Switch
              color={"#53A4F5"}
              value={props.isDarkTheme}
              onValueChange={onToggleSwitch}
            />
          </View>
        </View>
      </TouchableRipple>
    </SafeAreaView>
  );
};

export default CustomDrawer;
