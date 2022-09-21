import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect } from "react";
import CurrentDayButton from "../../Components/CurrentDayButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTheme } from "@react-navigation/native";

export default function Home({ navigation }) {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [habitItems, setHabitItems] = useState([]);
  const [event, setEvent] = useState([]);
 const {colors} = useTheme()
  const getEventData = async () => {
    try {
      const value = await AsyncStorage.getItem("event");
      if (value !== null) {
        let arr = JSON.parse(value);
        setEvent(arr);
      }
    } catch (e) {}
  };

  const getHabitData = async () => {
    try {
      const value = await AsyncStorage.getItem("Habit");
      if (value !== null) {
        let arr = JSON.parse(value);
        setHabitItems(arr);
      }
    } catch (e) {}
  };

  const getTaskData = async () => {
    try {
      const value = await AsyncStorage.getItem("Task");
      if(value !== null) {
      let arr = JSON.parse(value);
      setTaskItems(arr);
      }
    } catch (e) {
    }
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getHabitData();
      getTaskData()
      getEventData()
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView style={[styles.container,{backgroundColor: colors.backgroundColor}]}>
    <View style={[styles.container,{backgroundColor: colors.backgroundColor}]}>
      <View style={{flex:0.15}}>
        <CurrentDayButton />
        </View>
        <View style={{flex:0.35,}}>
        <View style={styles.tasksWrapper}>
          <View style={{ flex: 0.47 }}>
            <Text style={[styles.sectionTitle,{color:colors.text}]}>Today's Task</Text>
            <ScrollView style={styles.items}>
              {taskItems.map((item, index) => {
                return (
                  <View style={[styles.item, {backgroundColor:colors.card}]}>
                    <View style={[styles.alignLeft,{backgroundColor:colors.card}]}>
                      <View style={styles.checkbox}>
                        <Image
                          source={require("../../assets/check.png")}
                          style={{ height: 25, width: 25 }}
                        />
                      </View>
                      <Text style={[styles.itemText,{color:colors.text}]}>{item}</Text>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          </View>
          
          <View style={{ flex: 0.47 }}>
            <Text style={[styles.sectionTitle,{color:colors.text}]}>Your Habits</Text>
            <ScrollView style={styles.items}>
              {habitItems.map((item, index) => {
                return (
                  <View style={[styles.item, {backgroundColor:colors.card}]}>
                    <View style={[styles.alignLeft,{backgroundColor:colors.card}]}>
                      <View style={styles.checkbox}>
                        <Image
                          source={require("../../assets/check.png")}
                          style={{ height: 25, width: 25 }}
                        />
                      </View>
                      <Text style={[styles.itemText,{color:colors.text}]}>{item}</Text>
                    </View>
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </View>
        </View>
        <View style={{flex:0.5}}>
        <Text style={[styles.sectionTitle,{color:colors.text}]}>Events</Text>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.items}>
          {event.map((item, index) => {
            return (
              <View style={[styles.eventItem,{backgroundColor:colors.card}]} key={index}>
                <View style={[styles.alignLeft,{backgroundColor:colors.card}]}>
                  <View style={styles.eventCheckbox}>
                    <Image
                      source={require("../../assets/event.png")}
                      style={{ height: 40, width: 40 }}
                    />
                  </View>
                  <View
                    style={{
                      flex: 0.8,
                      paddingRight:15,
                      paddingVertical: 15,
                      justifyContent: "center",
                    }}
                  >
                    <Text style={[styles.itemText,{color:colors.text}]}>{item.tittle}</Text>
                    <Text style={[styles.checked,{color:colors.subtext}]}>{item.checked}</Text>

                    <Text style={[styles.description,{color:colors.text}]}>{item.description}</Text>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:15,
  },
  tasksWrapper: {
    
    flexDirection: "row",
    justifyContent: "space-around",
  },

  items: {
    marginTop: 0,
    // height: 590,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    width: 250,
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#7D9BCA",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {
    fontSize: 35,
    color: "white",
    fontWeight: "200",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
  },
  item: {
    // backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  alignLeft: {
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 5,
    marginRight: 15,
  },
  eventCheckbox: {
    flex: 0.2,
    minHeight: 70,
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "center",
  },
  itemText: {
    maxWidth: "80%",
  },
  circular: {
    // height: 12,
    // width: 12,
    borderColor: "#7D9BCA",
    borderWidth: 2,
    borderRadius: 5,
  },
  eventCircular:{ height: 25,
    width: 60,
    backgroundColor: "#53A4F5",
    borderColor: "#53A4F5",
    borderWidth: 2,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 10,
    right: 10,},
  eventItem:{
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    minHeight: 90,
  },
  itemText: {
    fontSize: 16,
    fontWeight: "500",
  },
  description: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "400",
    color: "#696969",
    textAlign: "left",
  },
  checked: {
    fontSize: 12,
    fontWeight: "400",
    color: "#c1c1c1",
    textAlign: "left",
    marginBottom: 5,
  },
  textDelete: { color: "#fff", fontWeight: "500" },
});
