import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = ({ item, onClick }) => {
  const deleteHandler = () => {
    onClick(item.id);
  };

  return (
    <Pressable onPress={deleteHandler}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{item.text}</Text>
      </View>
    </Pressable>
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
