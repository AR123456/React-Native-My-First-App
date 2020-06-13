
// https://www.udemy.com/course/the-complete-react-native-and-redux-course/learn/lecture/15706710#overview
// a hook adds functionality to a functional compoent 
import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 35;
// define the reducer function  
//technically could define this function inside of square screen but by convention 
// it is done outside to aleiviate confusion about state 
// state -The first argument is state which in this case is  {red:0,green:0,blue:0}
// action -the second argument is an object that  describes how we want to change the state object 
// by conention called action 
const reducer =(state,action   )=>{
// inspect thte action object and make some change to state object 
// usually done with switch  statement 
//state === {red:number,green:number,blue:number}
// action === {colorToChange: "red"||"green"||"blue",amount:15||-15}
switch (action.colorToChange) {

  case "red":
      // inspect action object and decide how much to change the color by
      // never change state object directly ( likein useState)
      // rebuild into a new object with state updated how we want it to be 
      // take  a copy of all of state object and overwrite the existing red property
      // not changing state object, just the copy of it - not changing state directly 
      return{...state, red:state.red + action.amount}
  case "green":
    return{...state, green:state.green + action.amount}
  case "blue":    
  return{...state, blue:state.blue+ action.amount}
  default:
    // for default , ie no case true just return the state object 
  // the reducer must always return something 
    return state;
  // reducer is a lot like setter is useState 
}



}

const SquareScreen = () => {



  // syntax for useReducer
// pass in reducer function and the initial state object as arguments to useReducer
// initially state variable will be the state defined in the second argument object
  const [state, dispatch]=useReducer(reducer,{red:0,green:0,blue:0})
  return (
    <View>
      <Text>Square screen </Text>

      <ColorCounter
        onIncrease={() => }
        onDecrease={() => }
        color="Red"
      />
      <ColorCounter
        onIncrease={() => }
        onDecrease={() => }
        color="Blue"
      />
      <ColorCounter
        onIncrease={() => }
        onDecrease={() => }
        color="Green"
      />

      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({});
export default SquareScreen;

// this component will display one view box, that will show the user adjusted color
