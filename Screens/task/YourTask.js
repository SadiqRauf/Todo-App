import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Task from "../../Components/Task";
import React, { useEffect, useState } from "react";
import { useTheme } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";


const YourTask = () => {
 const {colors} = useTheme()
    const [task, setTask] = useState();
    const [taskItems, setTaskItems] = useState([]);
   
    const getData = async () => {
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
      getData();
    }, []);
  
    const handleAddTask = async () => {
      setTaskItems([...taskItems, task]);
    };
  
    const deleteTask = (index) => {
      const filteredArr = taskItems.filter((val, i) => {
        return i != index;
      });
      setTaskItems(filteredArr);
    };
  
    useEffect(async () => {
      await AsyncStorage.setItem("Task", JSON.stringify(taskItems));
    }, [taskItems]);
   return(
     <SafeAreaView style={styles.container}>
    <StatusBar style="auto" />

    <View style={styles.writeTaskWrapper}>
      <TextInput
        style={[styles.input, {backgroundColor:colors.card, color:colors.text}]}
        placeholder={"Add a Task"}
        placeholderTextColor={colors.subtext}
        value={task}
        onChangeText={(text) => setTask(text)}
      />
      <TouchableOpacity onPress={() => handleAddTask()}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>Add</Text>
        </View>
      </TouchableOpacity>
    </View>
    <View style={styles.tasksWrapper}>
      {/* <FlatList ListHeaderComponent={() => <CurrentDayButton />} /> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {taskItems.map((item, index) => {
          console.log("+++++++++", item);
          return (
            <TouchableOpacity key={index}>
              <Task text={item} onPress={() => deleteTask(index)} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>

    {/* </KeyboardAvoidingView> */}
  </SafeAreaView>
);
}
export default YourTask

const styles = StyleSheet.create({
container: {
  flex: 1,
  // backgroundColor: "#E8EAED",
},
tasksWrapper: {
  flex: 0.9,
  paddingTop: 20,
  paddingHorizontal: 20,
},
items: {},
writeTaskWrapper: {
  flex: 0.1,
  width: "100%",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
},
input: {
  width: "100%",
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
  backgroundColor: "#53A4F5",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 60,
  borderColor: "#C0C0C0",
  borderWidth: 1,
},
addText: {
  fontSize: 16,
  color: "white",
  fontWeight: "500",
},
});