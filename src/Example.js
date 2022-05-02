import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import TableView from "./TableView";

export default function Example() {
  const optionsPerPage = [3, 5, 10, 15, 50];
  const [itemsPerPage, setItemsPerPage] = useState(optionsPerPage[1]);
  const [page, setPage] = useState(0);

  const headers = [
    { field: "firstName", title: "First Name", size: "34%" },
    { field: "lastName", title: "Last Name", size: "33%" },
    { field: "age", title: "Age", size: "33%" },
  ];

  const data = [
    {
      firstName: "Test 1 Firstname",
      lastName: "Test 1 Lastname",
      age: 5,
    },
    {
      firstName: "Test 2 Firstname",
      lastName: "Test 2 Lastname",
      age: 30,
    },
    {
      firstName: "Test 3 Firstname",
      lastName: "Test 3 Lastname",
      age: 45,
    },
    {
      firstName: "Test 4 Firstname",
      lastName: "Test 4 Lastname",
      age: "19",
    },
    {
      firstName: "Test 6 Firstname",
      lastName: "Test 6 Lastname",
      age: 5,
    },
    {
      firstName: "Test 7 Firstname",
      lastName: "Test 7 Lastname",
      age: 23,
    },
    {
      firstName: "Test 8 Firstname",
      lastName: "Test 8 Lastname",
      age: 25,
    },
    {
      firstName: "Test 9 Firstname",
      lastName: "Test 9 Lastname",
      age: "85",
    },
    {
      firstName: "Test 10 Firstname",
      lastName: "Test 10 Lastname",
      age: 59,
    },
    {
      firstName: "Test 11 Firstname",
      lastName: "Test 11 Lastname",
      age: 30,
    },
    {
      firstName: "Test 12 Firstname",
      lastName: "Test 12 Lastname",
      age: 10,
    },
    {
      firstName: "Test 13 Firstname",
      lastName: "Test 13 Lastname",
      age: 41,
    },
    {
      firstName: "Test 14 Firstname",
      lastName: "Test `4 Lastname",
      age: "55",
    },
    {
      firstName: "Test 15 Firstname",
      lastName: "Test 15 Lastname",
      age: 15,
    },
    {
      firstName: "Test 16 Firstname",
      lastName: "Test 16 Lastname",
      age: 20,
    },
    {
      firstName: "Test 17 Firstname",
      lastName: "Test 17 Lastname",
      age: 25,
    },
    {
      firstName: "Test 18 Firstname",
      lastName: "Test 18 Lastname",
      age: "55",
    },
  ];

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <TableView
        title={"Example Table"}
        headers={headers}
        data={data}
        pageOptions={optionsPerPage}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        page={page}
        setPage={setPage}
        highlightRows={true}
        highlightColumns={false}
        paginate={true}
        headerColor={"dodgerblue"}
        firstColumnColor={"dodgerblue"}
        padding={true}
        footerColor={"darkgreen"}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
