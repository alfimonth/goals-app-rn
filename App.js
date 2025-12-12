import { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const App = () => {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (e) => {
    setEnteredGoalText(e);
  };

  const addGoalHandler = () => {
    if (enteredGoalText === "") return;
    setCourseGoals((prev) => [
      ...prev,
      {
        text: enteredGoalText,
        id: `${Date.now()}`,
      },
    ]);
    setEnteredGoalText("");
  };

  useEffect(() => {
    console.log("goals", courseGoals);
  }, [courseGoals]);

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
        <FlatList
          alwaysBounceVertical={false}
          data={courseGoals}
          renderItem={({ item }) => (
            <View style={styles.goalItem}>
              <Text style={styles.goalText}>{item.text}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
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
    marginBottom: 24,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    padding: 8,
    margin: 8,
    backgroundColor: "blue",
    borderRadius: 6,
  },
  goalText: {
    color: "white",
  },
});
