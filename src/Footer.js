import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AppPicker from "./AppPicker";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function Footer({
  pageOptions,
  itemsPerPage,
  setPage,
  setItemsPerPage,
  footerColor,
  data,
  page,
}) {
  return (
    <View style={styles.bottomControls}>
      <Text style={{ color: footerColor }}>Rows: </Text>
      <AppPicker
        items={pageOptions?.map((p) => {
          return { label: String(p), value: p };
        })}
        onValueChange={(pageSize) => {
          setPage(0);
          setItemsPerPage(pageSize);
        }}
        value={itemsPerPage}
        style={{
          width: 120,
          height: 80,
          backgroundColor: "transparent",
          borderBottomWidth: 0,
        }}
        defaultColor={footerColor}
        prompt={"Rows"}
      />

      <Text style={{ paddingHorizontal: 5, color: footerColor }}>{`${
        data.length < 1 ? 0 : itemsPerPage ? page * itemsPerPage + 1 : 0
      } to ${
        (page + 1) * itemsPerPage === 0
          ? data.length
          : data.length > (page + 1) * itemsPerPage
          ? (page + 1) * itemsPerPage
          : data.length
      } of ${data?.length}`}</Text>

      <TouchableOpacity
        onPress={() => {
          page >= 1 ? setPage(--page) : null;
        }}
      >
        <FontAwesome
          name="chevron-left"
          size={20}
          color={footerColor}
          style={{ paddingHorizontal: 16 }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          Math.floor(data.length / itemsPerPage) - 1 >= page
            ? setPage(++page)
            : null;
        }}
      >
        <FontAwesome
          name="chevron-right"
          size={20}
          color={footerColor}
          style={{ paddingHorizontal: 16 }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomControls: {
    paddingTop: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
