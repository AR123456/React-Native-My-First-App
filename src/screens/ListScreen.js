import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 10 },
    { name: "Friend #2", age: 12 },
    { name: "Friend #3", age: 14 },
    { name: "Friend #4", age: 16 },
    { name: "Friend #5", age: 18 },
    { name: "Friend #6", age: 20 },
    { name: "Friend #7", age: 22 },
    { name: "Friend #8", age: 24 },
    { name: "Friend #9", age: 26 },
  ];

  return (
    <FlatList
      // // to determine if scoll is horizontal or veritcal
      // horizontal={true}
      // // will hide the horizontal scroll bar if desired
      // showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age:{item.age}
          </Text>
        );
      }}
    />
  );
};
const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});
export default ListScreen;
