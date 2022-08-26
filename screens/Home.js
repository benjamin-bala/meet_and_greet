import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import Contactsmenu from "../components/Contactsmenu";
import Header from "../components/Header";
import MenuButtons from "../components/MenuButtons";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ height: "100%" }}>
        {/*Header */}
        <Header />
        {/*Searchbar */}
        <SearchBar />
        {/*Menu buttons */}
        <MenuButtons />
        {/*Contacts menu */}
        <Contactsmenu />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    padding: 15,
  },
});
