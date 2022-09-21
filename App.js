import React from "react";
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native";
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from "react-native-paper";
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import Home from "./Screens/home/HomeScreen";
import YourTask from "./Screens/task/YourTask";
import TimerScreen from "./Screens/timer/Timer";
import Setting from "./Screens/setting/Setting";
import AddEvents from "./Screens/events/AddEvents";
import CustomDrawer from "./Components/CustomDrawer";
import HabitsScreen from "./Screens/habits/HabitsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const CustomDefaultTheme = {
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    background: "#E8EAED",
    text: "#333333",
    card: "#ffff",
    subtext: "#c1c1c1",
  },
};

const CustomDarkTheme = {
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    ...PaperDarkTheme.colors,
    background: "#212121",
    card: "#333333",
    text: "#ffffff",
    subtext: "#c1c1c1",
  },
};
const Drawer = createDrawerNavigator();

const DrawerComponent = ({ isDarkTheme, setIsDarkTheme }) => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => (
        <CustomDrawer
          isDarkTheme={isDarkTheme}
          setIsDarkTheme={setIsDarkTheme}
          {...props}
        />
      )}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="YourTask"
        component={YourTask}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Habits"
        component={HabitsScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Events"
        component={AddEvents}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Timer"
        component={TimerScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Setting"
        component={Setting}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};
const Stack = createNativeStackNavigator();
export default function App() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);
  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <StatusBar style="auto" />
        <DrawerComponent
          isDarkTheme={isDarkTheme}
          setIsDarkTheme={setIsDarkTheme}
        />
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
});
