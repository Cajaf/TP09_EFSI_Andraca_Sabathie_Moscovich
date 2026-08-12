import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import FotoPerfil from "./FotoPerfil";
import likeIcon from "../assets/like.png";

const Comentario = ({ nombre, comentario, compact, foto }) => {
  if (compact) {
    // Caption estilo feed: "usuario texto" en una sola línea
    return (
      <Text style={styles.compactText}>
        <Text style={styles.comentarioNombre}>{nombre} </Text>
        <Text style={styles.compactComentario}>{comentario}</Text>
      </Text>
    );
  }

  // Estilo modal: avatar + usuario + texto + corazón a la derecha
  return (
    <View style={styles.comentarioContainer}>
      <FotoPerfil foto={foto} nombre={nombre} size={28} borderWidth={0} />
      <View style={styles.comentarioBody}>
        <Text style={styles.comentarioTexto}>
          <Text style={styles.comentarioNombre}>{nombre}  </Text>
          {comentario}
        </Text>
      </View>
      <Image source={likeIcon} style={styles.comentarioLike} />
    </View>
  );
};

const styles = StyleSheet.create({
  // usado en el feed (Home), texto tipo "usuario: comentario" en una línea
  compactText: {
    fontSize: 14,
    lineHeight: 18,
  },
  compactComentario: {
    color: "#000",
  },

  // usado en el modal, con avatar + like a la derecha
  comentarioContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
    marginVertical: 8,
  },
  comentarioBody: {
    flex: 1,
  },
  comentarioTexto: {
    fontSize: 14,
    lineHeight: 18,
    color: "#000",
  },
  comentarioNombre: {
    fontWeight: "600",
    color: "#000",
  },
  comentarioLike: {
    width: 12,
    height: 12,
    marginTop: 4,
    resizeMode: "contain",
    tintColor: "#8e8e8e",
  },
});

export default Comentario;