import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FotoPerfil from "./FotoPerfil";

const Perfiles = ({ perfiles }) => {
  return (
    <View style={styles.perfilesContainer}>
      {perfiles.map((item, index) => (
        <View key={index} style={styles.perfilContainer}>
          <View style={styles.storyRing}>
            <View style={styles.storyRingInner}>
              <FotoPerfil foto={item.foto} nombre={item.nombre} size={56} borderWidth={2} />
            </View>
          </View>
          <Text style={styles.nombre} numberOfLines={1}>{item.nombre}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  perfilesContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "nowrap",
    paddingVertical: 12,
    paddingHorizontal: 8,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#dbdbdb",
    borderRadius: 8,
  },
  perfilContainer: {
    flexDirection: "column",
    alignItems: "center",
    width: 74,
    marginHorizontal: 4,
  },
  storyRing: {
    width: 64,
    height: 64,
    borderRadius: 32,
    padding: 2,
    backgroundColor: "#e1306c",
    alignItems: "center",
    justifyContent: "center",
  },
  storyRingInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  nombre: {
    marginTop: 6,
    fontSize: 12,
    fontWeight: "400",
    color: "#000",
    maxWidth: 70,
    textAlign: "center",
  },
});

export default Perfiles;