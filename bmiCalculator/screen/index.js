import { View, Text, StyleSheet, TextInput , TouchableOpacity} from 'react-native'
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
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Body Mass Index calculator Calculator</Text>
      </View>

      <View>
        <TextInput
          style={styles.input}
          placeholder="Enter your weight"
          onChangeText={text => setWeight(text)}
          value={weight}

        />

        <TextInput

          style={styles.input}

          placeholder="Enter your height"

          onChangeText={text => setHeight(text)}
          value={height}

        />

<TouchableOpacity  
style={styles.button}
onPress={calculateBmi}
>

<Text style={styles.buttonText}> Calculate</Text>
</TouchableOpacity>
<View style={styles.resultsView}>
<Text style={styles.result}>{bmi}</Text>
<Text style={styles.message}>{message}</Text>
</View>
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100vw",
    height:"100vh",
    paddingTop: Constants.statusBarHeight
  },

  title: {
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  },

  titleText: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
    textAlign:"center"
  },
  input:{
    height: 40,
    margin: 15,
    borderWidth:1/2,
    padding:10,
    borderRadius:5,
    backgroundColor:"gray",
    fontSize:18,
    outline:"none",
    border:"none",
    shadowColor: "#000",
  },
  button:{
backgroundColor:"#222",
padding:5,
marginHorizontal:8,
borderRadius:5,
 marginTop:10,
 height:40,

  },
  buttonText:{
color:"#fff",
textAlign:"center",
marginTop:5,

  },
  resultsView:{
backgroundColor:"#555",
height:100,
marginTop:50,
marginHorizontal:10,
borderRadius:5,


  },
  result:{
    textAlign:"center",
    color:"#fff",
    marginTop:8,
    fontSize:20,
  },
  message:{
    textAlign:"center",
    color:"#fff",
    marginTop:8,
    fontSize:20,
  }
});



export default index