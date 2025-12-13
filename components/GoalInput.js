import { useState } from "react";
import { Button, Image, StyleSheet, TextInput, View } from "react-native";

const GoalInput = ({ onAddGoalHandler, onClose }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (e) => {
    setEnteredGoalText(e);
  };

  const addGoalHandler = () => {
    onAddGoalHandler(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <View style={styles.inputContainer}>
      <Image style={styles.image} source={require("../assets/goal.png")} />
      <TextInput
        value={enteredGoalText}
        onChangeText={goalInputHandler}
        style={styles.textInput}
        placeholder="Your Course Goal"
        placeholderTextColor="#706f6fff"
      />
      <View style={styles.buttonContainer}>
        <Button onPress={addGoalHandler} title="Add Goal" />
        <Button onPress={onClose} title="Cancel" />
      </View>
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "lightskyblue",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    width: "100%",
    borderWidth: 1,
    marginRight: 8,
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
  },
});
