import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Alert,
  Text,
  TouchableOpacity,
  Dia,
  Modal,
  FlatList,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PickerItem from "./PickerItem";

function AppPicker({
  icon,
  value,
  onValueChange,
  items,
  prompt,
  style,
  defaultColor,
}) {
  const [show, setShow] = useState(false);

  return (
    <>
      <View style={[styles.container, style]}>
        {(icon || icon !== "none") && (
          <MaterialCommunityIcons
            name={icon}
            style={styles.icon}
            size={20}
            color={defaultColor}
          />
        )}
        <TouchableOpacity onPress={() => setShow(true)}>
          <View style={{ flexDirection: "row" }}>
            <Text style={[styles.text, { color: defaultColor }]}>
              {value || prompt}
            </Text>
            <MaterialCommunityIcons
              name={"chevron-down"}
              style={styles.icon}
              size={20}
              color={defaultColor}
            />
          </View>
        </TouchableOpacity>
      </View>
      <Modal
        visible={show}
        animationType={"slide"}
        collapsable={true}
        onRequestClose={() => setShow(false)}
      >
        <ScrollView
          contentContainerStyle={styles.itemsContainer}
          centerContent={true}
        >
          {items.map((item, index) => {
            return (
              <PickerItem
                key={item.value}
                label={item.label}
                onPress={() => {
                  onValueChange(item.value);
                  setShow(false);
                }}
                backColor={index % 2 === 1 ? "#eee" : "white"}
              />
            );
          })}
        </ScrollView>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 0,
    marginTop: 0,
    flexDirection: "row",
    borderBottomWidth: 1,
    alignItems: "center",
  },

  icon: {
    paddingRight: 10,
  },
  text: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  itemsContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    padding: 20,
  },
});
export default AppPicker;
