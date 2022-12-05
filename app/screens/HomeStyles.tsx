import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    height: "100%"
  },
  backgroundView: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100%',
    overflow: "hidden"
  },
  bgImage: {
    height: '100%',
    width: '100%',
    resizeMode: "cover"
  }
});
