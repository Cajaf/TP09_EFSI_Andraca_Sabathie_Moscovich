import React, { useEffect, useState } from "react";
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  TouchableOpacity, 
  Modal, 
  ScrollView 
} from "react-native";
import axios from "axios";
import PerfilInfo from "../Componentes/PerfilInfo";
import Comentario from "../Componentes/Comentario";
import FotoPerfil from "../Componentes/FotoPerfil";
import puntitos from "../assets/puntitos.png";
import mensajes from "../assets/mensaje.png";
import enviar from "../assets/Enviar.png";
import favorito from "../assets/favorito.png";
import likeIcon from "../assets/like.png";

const Perfil = () => {
  const [cats, setCats] = useState([]);
  const [selectedCat, setSelectedCat] = useState(null);
  const [publicaciones, setPublicaciones] = useState([]);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await axios.get("https://api.thecatapi.com/v1/images/search", {
          headers: {
            "x-api-key": "live_ZtQBVqgO3tQ6htJwAQ8VqMxkzM0D5tVRF0be6lkTr7S5vGdzdc3YEQZtPdZpbgMB"
          },
          params: { limit: 10 }
        });
        setCats(response.data);
      } catch (error) {
        console.error("Error al traer gatos:", error);
      }
    };
    fetchCats();
  }, []);

  const comentarios = [
    { nombre: "Felipe", comentario: "¡Qué buena foto!" },
    { nombre: "Ana", comentario: "Me encanta este lugar." },
    { nombre: "Luis", comentario: "Gran recuerdo." },
    { nombre: "María", comentario: "Muy inspirador." },
    { nombre: "Carlos", comentario: "Hermoso día." },
    { nombre: "Sofía", comentario: "Qué alegría verte." },
    { nombre: "Pedro", comentario: "Excelente publicación." },
    { nombre: "Lucía", comentario: "Me trae nostalgia." },
    { nombre: "Jorge", comentario: "Muy buena toma." },
    { nombre: "Valentina", comentario: "¡Felicitaciones!" },
  ];

  const perfiles = [
    { nombre: "Felipe", foto: "" },
    { nombre: "Ana", foto: "" },
    { nombre: "Luis", foto: "" },
    { nombre: "María", foto: "" },
    { nombre: "Carlos", foto: "" },
    { nombre: "Sofía", foto: "" },
    { nombre: "Pedro", foto: "" },
    { nombre: "Lucía", foto: "" },
    { nombre: "Jorge", foto: "" },
    { nombre: "Valentina", foto: "" },
  ];

  useEffect(() => {
    if (cats.length >= 10) {
      setPublicaciones([
        { perfil: perfiles[0], foto: cats[0].url, likes: 12, comentarios: [comentarios[2], comentarios[4]] },
        { perfil: perfiles[1], foto: cats[1].url, likes: 8, comentarios: [comentarios[1]] },
        { perfil: perfiles[2], foto: cats[2].url, likes: 15, comentarios: [comentarios[5], comentarios[0]] },
        { perfil: perfiles[3], foto: cats[3].url, likes: 20, comentarios: [comentarios[0]] },
        { perfil: perfiles[4], foto: cats[4].url, likes: 5, comentarios: [comentarios[1], comentarios[2]] },
        { perfil: perfiles[5], foto: cats[5].url, likes: 9, comentarios: [comentarios[1]] },
        { perfil: perfiles[6], foto: cats[6].url, likes: 13, comentarios: [comentarios[2], comentarios[3]] },
        { perfil: perfiles[7], foto: cats[7].url, likes: 7, comentarios: [comentarios[4]] },
        { perfil: perfiles[8], foto: cats[8].url, likes: 11, comentarios: [comentarios[5], comentarios[6]] },
        { perfil: perfiles[9], foto: cats[9].url, likes: 18, comentarios: [comentarios[7], comentarios[8]] },
      ]);
    }
  }, [cats]);

  const usuarioPerfil = {
    nombre: "Felipe",
    posts: 5,
    followers: 15,
    following: 14,
    desc: "Desarrollador web.",
    foto: ""
  };

  const usuario = { nombre: "Felipe", foto: "" };

  const filasPublicaciones = [];
  for (let i = 0; i < publicaciones.length; i += 3) {
    filasPublicaciones.push(publicaciones.slice(i, i + 3));
  }

  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <PerfilInfo
          nombre={usuarioPerfil.nombre}
          posts={usuarioPerfil.posts}
          followers={usuarioPerfil.followers}
          following={usuarioPerfil.following}
          desc={usuarioPerfil.desc}
          foto={usuarioPerfil.foto}
        />

        <View style={styles.gridDivider} />

        <ScrollView contentContainerStyle={styles.catGrid}>
          {filasPublicaciones.map((fila, filaIndex) => (
            <View key={`fila-${filaIndex}`} style={styles.gridRow}>
              {fila.map((item, index) => (
                <TouchableOpacity
                  key={`${item.perfil.nombre}-${filaIndex}-${index}`}
                  style={styles.catImageWrapper}
                  onPress={() => setSelectedCat(item)}
                >
                  <Image source={{ uri: item.foto }} style={styles.catImage} />
                </TouchableOpacity>
              ))}
              {Array.from({ length: 3 - fila.length }).map((_, emptyIndex) => (
                <View key={`empty-${filaIndex}-${emptyIndex}`} style={styles.catImageWrapperEmpty} />
              ))}
            </View>
          ))}
        </ScrollView>

        {/* Modal - vista agrandada del post */}
        <Modal
          visible={!!selectedCat}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setSelectedCat(null)}
        >
          <View style={styles.modalOverlay}>
            <TouchableOpacity
              style={styles.modalCloseArea}
              activeOpacity={1}
              onPress={() => setSelectedCat(null)}
            />
            <View style={styles.modalContent}>
              {selectedCat && (
                <>
                  <TouchableOpacity
                    style={styles.modalCloseBtn}
                    onPress={() => setSelectedCat(null)}
                  >
                    <Text style={styles.modalCloseText}>✕</Text>
                  </TouchableOpacity>

                  <Image source={{ uri: selectedCat.foto }} style={styles.modalImage} />

                  <View style={styles.modalInfo}>
                    {/* Header */}
                    <View style={styles.modalHeader}>
                      <FotoPerfil
                        foto={selectedCat.perfil.foto}
                        nombre={selectedCat.perfil.nombre}
                        size={32}
                        borderWidth={0}
                      />
                      <Text style={styles.modalNombre}>{selectedCat.perfil.nombre}</Text>
                      <Text style={styles.modalNombreExtra}> and openaidalle</Text>
                      <Image source={puntitos} style={styles.modalPuntitos} />
                    </View>

                    {/* Comentarios */}
                    <ScrollView style={styles.modalCommentsList}>
                      <Comentario
                        nombre={selectedCat.perfil.nombre}
                        comentario={`Publicación con ${selectedCat.likes} likes.`}
                        foto={selectedCat.perfil.foto}
                      />
                      {selectedCat.comentarios.map((c, i) => (
                        <Comentario key={i} nombre={c.nombre} comentario={c.comentario} foto={c.foto} />
                      ))}
                    </ScrollView>

                    {/* Botones */}
                    <View style={styles.modalBotones}>
                      <Image source={likeIcon} style={styles.modalIcono} />
                      <Image source={mensajes} style={styles.modalIcono} />
                      <Image source={enviar} style={styles.modalIcono} />
                      <Image source={favorito} style={styles.modalFavorito} />
                    </View>

                    <Text style={styles.modalLikes}>{selectedCat.likes} likes</Text>
                    <Text style={styles.modalFecha}>3 DAYS AGO</Text>

                    <View style={styles.modalAddComment}>
                      <Text style={styles.modalAddCommentPlaceholder}>Add a comment...</Text>
                      <Text style={styles.modalPost}>Post</Text>
                    </View>
                  </View>
                </>
              )}
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "#fafafa",
  },
  sidebar: {
    width: 250,
    borderRightWidth: 1,
    borderRightColor: "#dbdbdb",
  },
  mainContent: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  gridDivider: {
    maxWidth: 935,
    width: "100%",
    marginHorizontal: "auto",
    borderTopWidth: 1,
    borderTopColor: "#dbdbdb",
    marginBottom: 2,
  },
  catGrid: {
    maxWidth: 935,
    width: "100%",
    marginHorizontal: "auto",
    paddingBottom: 20,
  },
  gridRow: {
    flexDirection: "row",
    width: "100%",
  },
  catImageWrapper: {
    width: "33.33%",
    aspectRatio: 1,
    padding: 1,
  },
  catImageWrapperEmpty: {
    width: "33.33%",
    aspectRatio: 1,
    padding: 1,
  },
  catImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  /* Modal - vista agrandada */
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.85)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalCloseArea: {
    ...StyleSheet.absoluteFillObject,
  },
  modalContent: {
    backgroundColor: "#fff",
    borderRadius: 4,
    width: "90%",
    maxWidth: 900,
    maxHeight: "85%",
    flexDirection: "row",
    overflow: "hidden",
  },
  modalCloseBtn: {
    position: "absolute",
    top: -36,
    right: 0,
    zIndex: 10,
  },
  modalCloseText: {
    color: "#fff",
    fontSize: 22,
  },
  modalImage: {
    width: "60%",
    height: "100%",
    resizeMode: "cover",
    backgroundColor: "#000",
  },
  modalInfo: {
    width: "40%",
    borderLeftWidth: 1,
    borderLeftColor: "#dbdbdb",
    flexDirection: "column",
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#efefef",
  },
  modalNombre: {
    fontSize: 14,
    fontWeight: "600",
    marginLeft: 10,
    color: "#000",
  },
  modalNombreExtra: {
    fontSize: 14,
    color: "#000",
  },
  modalPuntitos: {
    marginLeft: "auto",
    width: 18,
    height: 18,
    resizeMode: "contain",
  },
  modalCommentsList: {
    flex: 1,
    paddingHorizontal: 14,
    paddingTop: 10,
  },
  modalBotones: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#efefef",
  },
  modalIcono: {
    width: 24,
    height: 24,
    marginHorizontal: 6,
    resizeMode: "contain",
  },
  modalFavorito: {
    marginLeft: "auto",
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  modalLikes: {
    paddingHorizontal: 14,
    paddingTop: 8,
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
  },
  modalFecha: {
    paddingHorizontal: 14,
    paddingTop: 4,
    paddingBottom: 10,
    fontSize: 10,
    color: "#8e8e8e",
    letterSpacing: 0.5,
  },
  modalAddComment: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#efefef",
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  modalAddCommentPlaceholder: {
    flex: 1,
    fontSize: 14,
    color: "#8e8e8e",
  },
  modalPost: {
    fontSize: 14,
    fontWeight: "600",
    color: "#3897f0",
  },
});

export default Perfil;
