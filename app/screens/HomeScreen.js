import {
  Image,
  StyleSheet,
  Text,
  Pressable,
  View,
  StatusBar,
  Platform,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import colors from "../config/colors";
import Notes from "./scrollView";

function HomeScreen() {
  const [text, setText] = React.useState("");
  const [data, setData] = React.useState();

  const save = () => {
    console.log(text);
    setText("");
  };
  const onPressFunction = () => {
    console.log("pressed");
  };
  return (
    <View style={globalStyle.container}>
      <View style={navabrStyles.navbar}>
        {/* <Image
          style={navabrStyles.logo}
          source={require("../assets/logo.png")}
        /> */}
        <Text style={navabrStyles.header}>Logo </Text>
        <Text style={navabrStyles.header}>Get It Done </Text>
      </View>
      <View style={bodyStyles.body}>
        <View style={bodyStyles.input}>
          <TextInput
            style={bodyStyles.typin}
            placeholder="Type in task "
            onChange={(e) => setText(e.nativeEvent.text)}
            value={text}
          />
          <Button title="+Add" onPress={save} color={colors.primary} />
        </View>
        <View style={bodyStyles.table}>
          <Text style={bodyStyles.mytasks}>My Tasks </Text>
          <View style={bodyStyles.table}>
            <Notes />
          </View>
        </View>
      </View>
      <View style={footerStyles.footer}>
        <Pressable onPress={onPressFunction}>
          <Text>New-Tasks </Text>
        </Pressable>
        <Pressable onPress={onPressFunction}>
          <Text>Done-Tasks</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default HomeScreen;

const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: colors.primary,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

const navabrStyles = StyleSheet.create({
  navbar: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    color: colors.secondary,
    backgroundColor: colors.primary,
  },
  // logo: {
  //   height: 50,
  //   width: "100%",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   backgroundColor: colors.primary,
  // },
  header: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
  },
});

const bodyStyles = StyleSheet.create({
  body: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.secondary,
  },
  input: {
    height: 100,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    borderBottomColor: colors.primary,
    borderBottomWidth: 3,
    // backgroundColor: colors.fadedcolor,
  },
  typin: {
    height: 50,
    width: "70%",
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    padding: 10,
    borderColor: colors.primary,
  },
  table: {
    flex: 1,
    width: "100%",
    // alignItems: "center",
    // justifyContent: "center",
  },
  mytasks: {
    color: colors.primary,
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});
const footerStyles = StyleSheet.create({
  footer: {
    height: 50,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: colors.primary,
  },
});
