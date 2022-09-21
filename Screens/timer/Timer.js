import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Stopwatch, Timer } from "react-native-stopwatch-timer";
const TimerScreen = () => {
  const [isTimerStart, setIsTimerStart] = useState(false);
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [timerDuration, setTimerDuration] = useState(90000);
  const [resetTimer, setResetTimer] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);

  return (
    <SafeAreaView>
      <View style={{ width: "100%", alignItems: "center", marginTop: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: "600", color: "#7D9BCA" }}>
          Timer
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.sectionStyle}>
          <Stopwatch
            laps
            msecs
            start={isStopwatchStart}
            reset={resetStopwatch}
            getTime={(time) => {
              console.log(time);
            }}
          />
          <View style={styles.btnBox}>
            <TouchableOpacity
              style={[
                styles.startBtn,
                {
                  backgroundColor: !isStopwatchStart ? "#7D9BCA" : "green",
                },
              ]}
              onPress={() => {
                setIsStopwatchStart(!isStopwatchStart);
                setResetStopwatch(false);
              }}
            >
              <Text style={styles.buttonText}>
                {!isStopwatchStart ? "START" : "STOP"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.resetBtn}
              onPress={() => {
                setIsStopwatchStart(false);
                setResetStopwatch(true);
              }}
            >
              <Text style={styles.buttonText}>RESET</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.sectionStyle}></View>
      </View>
    </SafeAreaView>
  );
};

export default TimerScreen;

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
  sectionStyle: {
    // flex: 1,
    marginTop: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  btnBox: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: "100%",
    paddingHorizontal: 20,
  },
  resetBtn: {
    height: 40,
    width: 120,
    borderRadius: 7,
    backgroundColor: "#7D9BCA",
    justifyContent: "center",
    alignItems: "center",
  },
  startBtn: {
    height: 40,
    width: 120,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },
});
//