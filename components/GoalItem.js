import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = ({ item, onClick }) => {
  const deleteHandler = () => {
    onClick(item.id);
  };

  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={styles.androidRipple}
        onPress={deleteHandler}
        style={({ pressed }) => pressed && styles.itemPressed}
      >
        <Text style={styles.goalText}>{item.text}</Text>
      </Pressable>
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
  androidRipple: {
    color: "red",
  },
  itemPressed: {
    opacity: 0.5,
  },
});
