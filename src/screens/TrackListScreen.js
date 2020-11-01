import React,{useContext} from "react";
import { StyleSheet, Text,FlatList, TouchableOpacity} from "react-native";
import {NavigationEvents} from "react-navigation";
import {ListItem} from "react-native-elements";
import {Context as TrackContext} from "../context/TrackContext"
// pass in the navigaiton prop
const TrackListScreen = ({ navigation }) => {
  const {state, fetchTracks} = useContext(TrackContext)
console.log(state);
  return (
    <>
    <NavigationEvents onWillFocus={fetchTracks}/>
      <Text style={{ fontSize: 48 }}>Track List Screen</Text>
      <FlatList
      data={state}
      keyExtractor={item=>item._id}
      renderItem={({item})=>{
        return<TouchableOpacity>
          <ListItem
          chevron
          title={item.name}
          ></ListItem>
        </TouchableOpacity>
      }}
      ></FlatList>
    </>
  );
};

export default TrackListScreen;

const styles = StyleSheet.create({});
