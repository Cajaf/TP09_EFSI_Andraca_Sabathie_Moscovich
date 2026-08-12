import React from "react";
import { Image, StyleSheet } from "react-native";
import perfilDefault from "../assets/perfilDefault.png";

const FotoPerfil = ({ nombre, foto, size = 120, borderWidth = 2 }) => {
  const fotoPerfil = foto && foto !== "" ? { uri: foto } : perfilDefault;

  return (
    <Image
      source={fotoPerfil}
      style={[
        styles.fotoPerfilImg,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          borderWidth,
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  fotoPerfilImg: {
    resizeMode: "cover",
    borderColor: "#dbdbdb",
  },
});

export default FotoPerfil;