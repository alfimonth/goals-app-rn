import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (newGoal) => {
    if (newGoal === "") return;
    setCourseGoals((prev) => [
      ...prev,
      {
        text: newGoal,
        id: `${Date.now()}`,
      },
    ]);
  };

  const deleteGoalHandler = (id) => {
    if (!id) return;
    setCourseGoals((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoalHandler={addGoalHandler} />

      <View style={styles.goalsContainer}>
        <FlatList
          alwaysBounceVertical={false}
          data={courseGoals}
          renderItem={(data) => (
            <GoalItem item={data.item} onClick={deleteGoalHandler} />
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
  goalsContainer: {
    flex: 5,
  },
});
