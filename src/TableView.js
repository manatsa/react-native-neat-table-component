import { ScrollView, Text, View } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";
import React from "react";
import Footer from "./Footer";

export default function TableView({
  title = "Data Table",
  titleColor = "dodgerblue",
  defaultColor = "dodgerblue",
  data = [],
  headers = [],
  paginate = true,
  setItemsPerPage,
  setPage,
  page = 0,
  itemsPerPage = 5,
  pageOptions = [5, 10, 20],
  headerColor = "dodgerblue",
  firstColumnColor = "black",
  footerColor = "dodgerblue",
  highlightRows = true,
  highlightColumns = false,
  padding = false,
  alignColumns = "center",
  alignFirstColumn = "flex-start",
}) {
  const formattedData =
    itemsPerPage && paginate
      ? data?.slice(itemsPerPage * page, itemsPerPage * (page + 1))
      : data;

  return (
    <ScrollView style={{ width: "100%", marginTop: 50 }}>
      <View style={{ alignItems: "center", paddingBottom: 10 }}>
        <Text
          style={{
            color: titleColor,
            textDecorationLine: "underline",
            textDecorationStyle: "double",
            textTransform: "uppercase",
            paddingVertical: 10,
            fontWeight: "bold",
          }}
        >
          {title.toUpperCase()}
        </Text>
      </View>
      <Grid style={{ minHeight: "10%" }}>
        <Row>
          {headers.map((h, index) => {
            return (
              <Col
                key={index}
                style={{
                  width: h.size,
                  alignItems: alignColumns,
                  paddingHorizontal: padding ? "0.5%" : 0,
                }}
              >
                <Text
                  style={{
                    backgroundColor: highlightColumns
                      ? index % 2 === 1
                        ? "#efefef"
                        : "#fff"
                      : "#fff",
                    color: headerColor,
                    alignItems: alignColumns,
                    fontWeight: "bold",
                    fontSize: 16,
                    paddingVertical: 10,
                  }}
                >
                  {h.title}
                </Text>
              </Col>
            );
          })}
        </Row>
        <View
          style={{ borderColor: defaultColor, borderWidth: 0.5, width: "100%" }}
        />

        <View
          style={{
            width: "100%",
            marginTop: 1,
          }}
        />

        {formattedData?.map((item, i) => {
          return (
            <View key={i} style={{ flex: 1 }}>
              <Row
                style={{
                  backgroundColor: highlightRows
                    ? i % 2 === 1
                      ? "#eee"
                      : "#fff"
                    : "white",
                  color: headerColor,
                  paddingVertical: 10,
                }}
                key={i}
              >
                {Object.keys(item)?.map((k, index) => {
                  return (
                    <Col
                      key={index}
                      style={{
                        width: headers[index].size,
                        color: headerColor,
                        alignItems:
                          index == 0 ? alignFirstColumn : alignColumns,
                        paddingHorizontal: padding ? "0.5%" : 0,
                      }}
                    >
                      <Text
                        style={{
                          paddingHorizontal: 2,
                          color: firstColumnColor
                            ? index === 0
                              ? firstColumnColor
                              : "black"
                            : "black",
                        }}
                      >
                        {item[headers[index].field]}
                      </Text>
                    </Col>
                  );
                })}
              </Row>
            </View>
          );
        })}
      </Grid>
      <View
        style={{ marginTop: 1, borderColor: defaultColor, borderWidth: 0.3 }}
      />

      {paginate &&
        pageOptions &&
        itemsPerPage &&
        setItemsPerPage &&
        page &&
        setPage(
          <Footer
            pageOptions={pageOptions}
            itemsPerPage={itemsPerPage}
            setItemsPerPage={setItemsPerPage}
            setPage={setPage}
            footerColor={footerColor}
            data={data}
            page={page}
          />
        )}
      <View
        style={{ marginTop: 0, borderColor: defaultColor, borderWidth: 1 }}
      />
    </ScrollView>
  );
}
