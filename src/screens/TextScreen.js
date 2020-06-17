import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [password, setPassword] = useState("");
  return (
    <View>
      <Text>Enter Password:</Text>

      <TextInput
        //  This is the TextInput pattern in react-naive
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
      />
      {/* <Text>You entered:{password}</Text> */}
      {/* whole  the string password is not 6 show this text  */}
      {password.length < 6 ? (
        <Text>Password must be longer than 5 characters </Text>
      ) : (
        <Text>Password is valid </Text>
      )}
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
