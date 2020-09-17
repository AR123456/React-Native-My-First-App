// component to apply styling to the react native elments
import React from "react";
import { StyleSheet, View } from "react-native";
// need to wrap an existing element and apply some style to it
// so assume that some other component will be passed as a prop
// or children to
// pass in the childern prop object
const Spacer = ({ children }) => {
  // inside the view element show the children elements that have been
  // passed in as props
  // then apply styles.spacer
  return <View style={styles.spacer}>{children}</View>;
};

const styles = StyleSheet.create({
  spacer: {
    margin: 15,
  },
});
export default Spacer;
