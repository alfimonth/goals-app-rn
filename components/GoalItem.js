import { StyleSheet, View, Text } from "react-native";

const GoalItem = ({ item }) => {
  return (
    <View style={styles.goalItem}>
      <Text style={styles.goalText}>{item.text}</Text>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
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
