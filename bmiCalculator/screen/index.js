import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import Constants from 'expo-constants';

const index = () => {
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")
  const [bmi, setBmi] = useState("")
  const [message, setMessage] = useState("")

  const calculateBmi = () => {

    const bmi = weight / ((height / 100) * (height / 100))

    setBmi(bmi.toFixed(1))

    if (bmi < 18.5) {

      setMessage("Underweight,eat more!!!")

    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setMessage("Normal Keep it up!!")
    } else if (bmi >= 25 && bmi <= 29.9) {
      setMessage("OverWeight , start working out !!")
    } else if (bmi >= 30) {
      setMessage("Obese, Hit the gym")
    }
  }
  return (
    <View styles={styles.container}>
      <View styles={styles.title}>
        <Text styles={styles.titleText}>index</Text>
      </View>

      <View>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200, marginBottom: 10 }}
          placeholder="Enter your weight"
          onChangeText={text => setWeight(text)}
          value={weight}

        />

        <TextInput

          style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200, marginBottom: 10 }}

          placeholder="Enter your height"

          onChangeText={text => setHeight(text)}
          value={height}

        />

      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight
  },

  title: {
    backgroundColor: "#444",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },

  titleText: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold"
  }
});



export default index