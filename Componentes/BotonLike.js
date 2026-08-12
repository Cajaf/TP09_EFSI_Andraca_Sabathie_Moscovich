import React, { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import likeIcon from "../assets/like.png";

const BotonLike = ({ setLikeState, likes }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikeState(likes - 1);
      setLiked(false);
    } else {
      setLikeState(likes + 1);
      setLiked(true);
    }
  };

  return (
    <View style={styles.likeContainer}>
      <TouchableOpacity onPress={handleLike}>
        <Image
          source={likeIcon}
          style={[styles.likeIcon, liked && styles.liked]}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  likeContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  likeIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  liked: {
    tintColor: "red",
  },
});

export default BotonLike;