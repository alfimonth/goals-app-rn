import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const App = () => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (e) => {
    setEnteredGoalText(e);
  };

  const addGoalHandler = () => {
    console.log("Added Text: ", enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          value={enteredGoalText}
          onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder="Your Course Goal"
          placeholderTextColor="#ccc"
        />
        <Button onPress={addGoalHandler} title="Add Goal" />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of Yoar Goals...</Text>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 3,
  },
});
