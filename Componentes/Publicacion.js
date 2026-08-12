import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import FotoPerfil from "./FotoPerfil";
import Comentario from "./Comentario";
import BotonLike from "./BotonLike";

import mensajes from "../assets/mensaje.png";
import enviar from "../assets/Enviar.png";
import favorito from "../assets/favorito.png";
import puntitos from "../assets/puntitos.png";

const Publicacion = ({ perfil, foto, likes, comentarios }) => {
  const [likesState, setLikeState] = useState(likes);

  return (
    <View style={styles.publicacion}>
      {/* Encabezado */}
      <View style={styles.publicacionHead}>
        <View style={styles.profile}>
          <FotoPerfil foto={perfil.foto} nombre={perfil.nombre} size={32} borderWidth={0} />
        </View>
        <Text style={styles.nombre}>{perfil.nombre}</Text>
        <Image source={puntitos} style={styles.puntitos} />
      </View>

      {/* Imagen principal */}
      <Image source={{ uri: foto }} style={styles.publicacionImg} />

      {/* Botones */}
      <View style={styles.botones}>
        <BotonLike setLikeState={setLikeState} likes={likesState} />
        <Image source={mensajes} style={styles.icono} />
        <Image source={enviar} style={styles.icono} />
        <Image source={favorito} style={styles.favorito} />
      </View>

      {/* Likes */}
      <Text style={styles.publicacionLikes}>{likesState} likes</Text>

      {/* Comentario */}
      <View style={styles.publicacionComentario}>
        <Comentario
          nombre={comentarios[0].nombre}
          comentario={comentarios[0].comentario}
          compact
        />
      </View>

      {/* Barra separadora */}
      <View style={styles.barraSeparadora} />
    </View>
  );
};

const styles = StyleSheet.create({
  publicacion: {
    width: "100%",
    maxWidth: 470,
    borderRadius: 8,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#dbdbdb",
    marginHorizontal: "auto",
    overflow: "hidden",
  },
  publicacionHead: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  profile: {
    marginRight: 10,
  },
  nombre: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
  },
  puntitos: {
    marginLeft: "auto",
    width: 18,
    height: 18,
    resizeMode: "contain",
  },
  publicacionImg: {
    width: "100%",
    aspectRatio: 1,
    resizeMode: "cover",
  },
  botones: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  icono: {
    width: 24,
    height: 24,
    marginHorizontal: 6,
    resizeMode: "contain",
  },
  favorito: {
    marginLeft: "auto",
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  publicacionLikes: {
    paddingHorizontal: 12,
    paddingTop: 6,
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
  },
  publicacionComentario: {
    paddingHorizontal: 12,
    paddingTop: 4,
    paddingBottom: 12,
  },
  barraSeparadora: {
    display: "none",
  },
});

export default Publicacion;
