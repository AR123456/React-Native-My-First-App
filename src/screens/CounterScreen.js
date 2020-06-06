//https://www.udemy.com/course/the-complete-react-native-and-redux-course/learn/lecture/15706650#overview

//a hook is a function that adds some new functionality to a function component
// useState creates a kind of variable tha React will watch and update

import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CounterScreen = () => {
  //by default, inside of a component react doesnt watch for a variable to change and
  // update it.
  // need to make use of the useState hook to make a special kind of variable that React
  // will watch and update
  //   let counter = 0; - this will not work in react
  //////////////////// the react useState kind of variable/////////////////
  //useState(0) - using useState to initialize a new piece of data we are going to track so initally set to 0
  // this gives counter an initial value of 0
  // inside the [ ] is array destructuring, this is a way of pulling a reference to elements
  //out of an array.
  // counter is the piece of state that is going to be changed over time but not
  // modified directly
  // setCounter - this function comes back to us when we call useState, when we want to
  // update a piece of state we call setCounter with the new value we want counter to be.
  // when setCounter is run, react will automaticaly re run the entier function component
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          // dont do this, dont modify a state variable directly, use the setter
          //   counter++;
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          // dont do this, dont modify a state variable directly, use the setter
          //   counter--;
          setCounter(counter - 1);
        }}
      />
      <Text>Current Count:{counter} </Text>
    </View>
  );
};

const styles = StyleSheet.create({});
export default CounterScreen;
