import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import Publicacion from '../Componentes/Publicacion';
import Perfiles from '../Componentes/Perfiles';

export default function Home() {
  const [cats, setCats] = useState([]);
  const [publicaciones, setPublicaciones] = useState([]);

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

  useEffect(() => {
    if (cats.length >= 10) {
      setPublicaciones([
        { perfil: perfiles[0], foto: cats[0].url, likes: 12, comentarios: [comentarios[2], comentarios[4]] },
        { perfil: perfiles[1], foto: cats[1].url, likes: 8, comentarios: [comentarios[1]] },
        { perfil: perfiles[2], foto: cats[2].url, likes: 15, comentarios: [comentarios[5], comentarios[0]] },
        { perfil: perfiles[3], foto: cats[3].url, likes: 20, comentarios: [comentarios[6]] },
      ]);
    }
  }, [cats]);

  return (
    <View style={styles.appContainer}>
      <View style={styles.mainContent}>
        <ScrollView
          style={styles.feedColumn}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={true}
        >
          <Perfiles perfiles={perfiles.slice(1, 7)} />
          {publicaciones.map((item, index) => (
            <View key={`publicacion-${index}`} style={styles.postWrapper}>
              <Publicacion
                perfil={item.perfil}
                foto={item.foto}
                likes={item.likes}
                comentarios={item.comentarios}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  mainContent: {
    flex: 1,
  },
  feedColumn: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  postWrapper: {
    marginBottom: 16,
  },
});
