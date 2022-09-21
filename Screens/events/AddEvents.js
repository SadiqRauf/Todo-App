import {
  Text,
  View,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useTheme } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AddEvents = () => {
 const {colors} = useTheme()
  const [checked, setChecked] = useState("Daily");
  const [tittle, setTittle] = useState("");
  const [description, setDescription] = useState("");
  const [event, setEvent] = useState([]);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("event");
      if (value !== null) {
        let arr = JSON.parse(value);
        setEvent(arr);
      }
    } catch (e) {}
  };

  useEffect(() => {
    getData();
  }, []);

  const handleAddTask = () => {
    setEvent([...event, { tittle, description, checked }]);
    // event.push(obj)
  };

  const deleteTask = (index) => {
    const filteredArr = event.filter((val, i) => {
      return i != index;
    });
    setEvent(filteredArr);
  };

  useEffect(async () => {
    await AsyncStorage.setItem("event", JSON.stringify(event));
  }, [event]);
  console.log("========", event);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Box}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={[styles.title,{color:colors.text}]}>Daily</Text>
          <TouchableOpacity
            onPress={() => setChecked("Daily")}
            style={styles.monthly}
          >
            {checked === "Daily" && (
              <Image
                source={require("../../assets/check.png")}
                style={{ height: 20, width: 20 }}
              />
            )}
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={[styles.title,{color:colors.text}]}>Monthly</Text>
          <TouchableOpacity
            onPress={() => setChecked("Monthly")}
            style={styles.monthly}
          >
            {checked === "Monthly" && (
              <Image
                source={require("../../assets/check.png")}
                style={{ height: 20, width: 20 }}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ alignItems: "center", padding: 15, width: "100%" }}>
        <TextInput
          style={[styles.input,{backgroundColor:colors.card}]}
          placeholderTextColor={colors.subtext}
          placeholder={"Add Event"}
          value={tittle}
          onChangeText={(text) => setTittle(text)}
        />
        <View style={[styles.desBox,{backgroundColor:colors.card}]}>
          <TextInput
            style={[styles.des,{backgroundColor:colors.card}]}
            placeholderTextColor={colors.subtext}
            multiline
            placeholder={"Description "}
            value={description}
            onChangeText={(text) => setDescription(text)}
          />
        </View>
        <TouchableOpacity onPress={handleAddTask} style={styles.btn}>
          <Text style={{fontSize:16, fontWeight:'600', color:'#fff'}}>Add</Text>
        </TouchableOpacity>
        <ScrollView style={styles.items}>
          {/* where tasks will go */}
          {event.map((item, index) => {
            return (
              <View style={[styles.item,{backgroundColor:colors.card}]} key={index}>
                <View style={styles.alignLeft}>
                  <View style={styles.checkbox}>
                    <Image
                      source={require("../../assets/event.png")}
                      style={{ height: 40, width: 40 }}
                    />
                  </View>
                  <View
                    style={{
                      flex: 0.6,
                      paddingVertical: 10,
                      justifyContent: "center",
                    }}
                  >
                    <Text style={[styles.itemText,{color:colors.text}]}>{item.tittle}</Text>
                    <Text style={[styles.checked, {color:colors.subtext}]}>{item.checked}</Text>

                    <Text style={[styles.description,{color:colors.text}]}>{item.description}</Text>
                  </View>
                  <View style={{ flex: 0.2, padding: 15, borderRadius: 10 }}>
                    <TouchableOpacity
                      onPress={() => deleteTask(index)}
                      style={styles.circular}
                    >
                      <Text style={styles.textDelete}>Delete</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AddEvents;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  Box: {
    paddingTop: 15,
    flexDirection: "row",
    paddingHorizontal: 30,
    justifyContent: "space-around",
  },
  monthly: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    borderColor: "#53A4F5",
    borderWidth: 1,
    height: 20,
    width: 20,
  },
  input: {
    height: 50,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: "#FFF",
    borderRadius: 10,
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginRight: 5,
  },
  btn: {
    height: 50,
    width: 250,
    backgroundColor: "#53A4F5",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  desBox: {
    height: 120,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: "#FFF",
    borderRadius: 10,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    marginTop: 10,
  },
  checkbox: {
    flex: 0.2,
    minHeight: 70,
    // padding: 15,
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "center",
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
  circular: {
    height: 25,
    width: 60,
    backgroundColor: "#53A4F5",
    borderColor: "#53A4F5",
    borderWidth: 2,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  textDelete: { color: "#fff", fontWeight: "500" },
  item: {
    backgroundColor: "white",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    minHeight: 90,
  },
  alignLeft: {
    flexDirection: "row",
    // alignItems: "center",
    // flexWrap: "wrap",
  },
  items: {
    marginTop: 10,
  },
});
