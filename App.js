import { useState } from "react";
import { Button, FlatList, Modal, StyleSheet, Text, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const addGoalHandler = (newGoal) => {
    if (newGoal === "") return;
    setCourseGoals((prev) => [
      ...prev,
      {
        text: newGoal,
        id: `${Date.now()}`,
      },
    ]);
    setModalVisible(false);
  };

  const deleteGoalHandler = (id) => {
    if (!id) return;
    setCourseGoals((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.appName}>GOALS APP</Text>
        <Button
          title="ADD NEW GOAL"
          onPress={() => {
            setModalVisible(true);
          }}
        />
      </View>
      <Modal visible={modalVisible} animationType="slide">
        <GoalInput
          onAddGoalHandler={addGoalHandler}
          onClose={() => {
            setModalVisible(false);
          }}
        />
      </Modal>

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
    backgroundColor: "ghostwhite",
  },
  appName: {
    fontSize: 20,
    color: "dimgray",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 6,
  },
  goalsContainer: {
    flex: 5,
  },
});
