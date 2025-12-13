import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

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
      <TextInput
        value={enteredGoalText}
        onChangeText={goalInputHandler}
        style={styles.textInput}
        placeholder="Your Course Goal"
        placeholderTextColor="#ccc"
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  textInput: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 8,
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
  },
});
