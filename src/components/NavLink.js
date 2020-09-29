import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Spacer from "./Spacer";
import { withNavigation } from "react-navigation";

const NavLink = ({ navigation, text, routeName }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
        <Spacer>
          <Text style={styles.link}>
            Already have an account? Sign in instead{" "}
          </Text>
        </Spacer>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  link: {
    color: "blue",
  },
});
export default withNavigation(NavLink);
