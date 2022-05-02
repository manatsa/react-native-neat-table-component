import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function PickerItem({ label, onPress, backColor }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.item, { backgroundColor: backColor }]}
    >
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    width: "100%",
    alignItems: "center",
  },
  text: {
    alignItems: "center",
  },
});
