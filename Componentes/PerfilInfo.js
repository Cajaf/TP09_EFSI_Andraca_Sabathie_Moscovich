import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import FotoPerfil from "./FotoPerfil";
import moreIcon from "../assets/puntitos.png";

const PerfilInfo = ({ nombre, posts, followers, following, desc, foto }) => {
  return (
    <View style={styles.perfilInfo}>
      <View style={styles.perfilHeader}>
        <FotoPerfil nombre={nombre} foto={foto} size={150} borderWidth={0} />
      </View>
      <View style={styles.perfilStats}>
        <View style={styles.topRow}>
          <Text style={styles.nombre}>{nombre}</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Edit profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Ad tools</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Image source={moreIcon} style={styles.settingsIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.stats}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{posts}</Text>
            <Text style={styles.statLabel}> posts</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{followers}</Text>
            <Text style={styles.statLabel}> followers</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{following}</Text>
            <Text style={styles.statLabel}> following</Text>
          </View>
        </View>

        <Text style={styles.username}>{nombre.toLowerCase()}</Text>
        <Text style={styles.perfilDesc}>{desc}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  perfilInfo: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 30,
    maxWidth: 935,
    width: "100%",
    marginHorizontal: "auto",
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  perfilHeader: {
    alignItems: "center",
    justifyContent: "center",
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 20,
  },
  nombre: {
    fontSize: 20,
    fontWeight: "400",
    color: "#000",
  },
  button: {
    paddingVertical: 7,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#dbdbdb",
    borderRadius: 8,
    backgroundColor: "#fafafa",
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
  },
  iconButton: {
    padding: 4,
  },
  settingsIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  perfilStats: {
    flex: 1,
  },
  stats: {
    flexDirection: "row",
    marginBottom: 20,
    gap: 40,
  },
  statItem: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  statNumber: {
    fontWeight: "600",
    fontSize: 16,
    color: "#000",
  },
  statLabel: {
    fontSize: 16,
    color: "#000",
  },
  username: {
    fontWeight: "600",
    fontSize: 14,
    marginBottom: 2,
  },
  perfilDesc: {
    fontSize: 14,
    lineHeight: 20,
    color: "#000",
  },
});

export default PerfilInfo;
