import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const contactsMenuButtons = [
  {
    type: "starred",
    name: "Starred",
  },
  {
    type: "contact",
    name: "Jessy Pablo",
    photo: require("../assets/pablo.jpg"),
  },
  {
    type: "contact",
    name: "Benjee Bala",
    photo: require("../assets/benjee.jpg"),
  },
  {
    type: "contact",
    name: "Raina Amastus",
    photo: require("../assets/raina.jpg"),
  },
];

export default function Contactsmenu() {
  return (
    <View style={styles.container}>
      {contactsMenuButtons.map((contact, index) => {
        return (
          <View style={styles.row} key={index}>
            {contact.type === "starred" ? (
              <View style={styles.starredIcon}>
                <AntDesign name="star" size={30} color="#efefef" />
              </View>
            ) : (
              <Image source={contact.photo} style={styles.image} />
            )}

            <Text style={styles.text}>{contact.name}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#333333",
    // flexDirection: "row",
    // height: 40,
    // paddingHorizontal: 10,
    // alignItems: "center",
    // borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  starredIcon: {
    backgroundColor: "#333333",
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  text: {
    fontSize: 18,
    color: "#fff",
    paddingLeft: 15,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 20,
  },
});
