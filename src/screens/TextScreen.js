//https://www.udemy.com/course/the-complete-react-native-and-redux-course/learn/lecture/15706776#questions
import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  return (
    <View>
      <Text>Enter Name:</Text>
      {/* in react don't want the parent reaching into child element, 
      instead if we ever want to communicate data from child up to parent 
      need to use callback system where we pass down a prop that is a callback function 
      and then when something happens inside the child it will call that callback and 
      tell the parent that something just occured. 
      That is how we communicate from child up to parent here. 
        TextScreen element holds a piece of state that represents what is currently inside
        the input box.  Then evertime we render text screen, will show that input element 
        and pass in 2 props value and the onChangeText callback function
      */}
      <TextInput
        //  This is the TextInput pattern in react-naive
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      <Text>My name is {name}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
  },
});
export default TextScreen;
