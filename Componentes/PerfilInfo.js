import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import FotoPerfil from "./FotoPerfil";
import moreIcon from "../assets/puntitos.png";

const PerfilInfo = ({ nombre, posts, followers, following, desc, foto }) => {
  return (
    <View style={styles.perfilInfo}>
      {/* Fila superior: foto + stats */}
      <View style={styles.topRow}>
        <FotoPerfil nombre={nombre} foto={foto} size={80} borderWidth={0} />

        <View style={styles.stats}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{posts}</Text>
            <Text style={styles.statLabel}>posts</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{followers}</Text>
            <Text style={styles.statLabel}>followers</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{following}</Text>
            <Text style={styles.statLabel}>following</Text>
          </View>
        </View>
      </View>

      {/* Nombre y descripciÃ³n */}
      <View style={styles.textBlock}>
        <Text style={styles.username}>{nombre.toLowerCase()}</Text>
        <Text style={styles.nombre}>{nombre}</Text>
        <Text style={styles.perfilDesc}>{desc}</Text>
      </View>

      {/* Botones de acciÃ³n */}
      <View style={styles.buttonRow}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  perfilInfo: {
    maxWidth: 935,
    width: "100%",
    marginHorizontal: "auto",
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    marginBottom: 16,
  },
  stats: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    fontWeight: "600",
    fontSize: 16,
    color: "#000",
  },
  statLabel: {
    fontSize: 13,
    color: "#000",
  },
  textBlock: {
    marginBottom: 16,
  },
  username: {
    fontWeight: "600",
    fontSize: 14,
    color: "#000",
    marginBottom: 2,
  },
  nombre: {
    fontSize: 14,
    color: "#000",
    marginBottom: 4,
  },
  perfilDesc: {
    fontSize: 14,
    lineHeight: 20,
    color: "#000",
  },
  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    flexWrap: "wrap",
  },
  button: {
    flex: 1,
    minWidth: 100,
    alignItems: "center",
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#dbdbdb",
    borderRadius: 8,
    backgroundColor: "#fafafa",
  },
  buttonText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#000",
  },
  iconButton: {
    padding: 8,
    borderWidth: 1,
    borderColor: "#dbdbdb",
    borderRadius: 8,
  },
  settingsIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },
});

export default PerfilInfo;
