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
import { Row, Table, TableWrapper, Cell } from "react-native-table-component";
import React from "react";
import colors from "../config/colors";

function HomeScreen() {
  const [text, setText] = React.useState("");
  const [data, setData] = React.useState();
  const [state, setState] = React.useState({
    tbHead: [
      "DateTime------------",
      "Task----------------------------------------------",
      "Action",
    ],
    // widths: [700, 220, 100],
    tableData: [
      ["1", "2", "3", "4"],
      ["a", "b", "c", "d"],
      ["1", "2", "3", "4"],
      ["a", "b", "c", "d"],
    ],
  });

  const element = (data, index) => (
    <TouchableOpacity onPress={() => _alertIndex(index)}>
      <View style={styles.btn}>
        <Text style={styles.btnText}>button</Text>
      </View>
    </TouchableOpacity>
  );

  const save = () => {
    dataValue.push(text);
    setData(dataValue);
    console.log(text);
    setText("");
  };
  const onPressFunction = () => {
    console.log("pressed");
  };
  const _alertIndex = (index) => {
    Alert.alert(`This is row ${index + 1}`);
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
            <ScrollView horizontal={true}>
              <View style={styles.container}>
                <Table>
                  <Row
                    data={state.tbHead}
                    // widths={state.widths}
                    style={styles.head}
                    textStyle={styles.text}
                  />
                </Table>
                <ScrollView style={styles.dataWrapper}>
                  <Table>
                    {state.tableData.map((rowData, index) => (
                      <TableWrapper key={index} style={styles.row}>
                        {rowData.map((cellData, cellIndex) => (
                          <Cell
                            key={cellIndex}
                            data={
                              cellIndex === 3
                                ? element(cellData, index)
                                : cellData
                            }
                            textStyle={styles.text}
                          />
                        ))}
                      </TableWrapper>
                    ))}
                  </Table>
                </ScrollView>
              </View>
            </ScrollView>
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
    alignItems: "center",
    justifyContent: "center",
  },
  mytasks: {
    color: colors.primary,
    fontSize: 20,
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 0,
  },
  head: { height: 40, backgroundColor: colors.green },
  text: { margin: 6 },
  row: { flexDirection: "row", backgroundColor: "#FFF1C1" },
  btn: { width: 58, height: 18, backgroundColor: "#78B7BB", borderRadius: 2 },
  btnText: { textAlign: "center", color: "#fff" },
});
