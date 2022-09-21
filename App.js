import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import meme from "./long.jpeg";
//code for cs class
let deviceWidth = Dimensions.get("window").width;
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.redBox}>
        <Text style={styles.text3}>CS is so fun</Text>
      </View>
      <View style={styles.blueBox}>
        <Text style={styles.text}>Life sucks</Text>
      </View>
      <View style={styles.greenBox}>
        <Text style={styles.text2}>Happy</Text>
      </View>
      <View style={styles.yellowBox}>
        <Text style={styles.text}>Why would you close your terminal bro</Text>
      </View>
      <TouchableOpacity onPress={() => alert("乐")}>
        <Image source={meme} style={styles.topimage} />
      </TouchableOpacity>
      <Image
        source={{
          uri: "https://pd-beamliving-cd.beamliving.com/-/media/14-to-bl/2021-funny-memes-cats-1000x666px.jpg",
        }}
        style={styles.bottom}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffa",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#faf",
    fontSize: 29,
    fontFamily: "serif",
  },
  text2: {
    color: "#f0f",
    fontSize: 30,
    fontFamily: "san-serif",
    //lineHeight: 20,
  },
  text3: {
    color: "#0ff",
    fontSize: 30,
    fontFamily: "san-serif",
    lineHeight: 50,
  },
  topimage: {
    width: 200,
    height: 200,
  },
  bottom: {
    width: 300,
    height: 225,
  },
  redBox: {
    backgroundColor: "#ff0049",
    width: deviceWidth,
    alignItems: "center",
    justifyContent: "center",
  },
  blueBox: {
    backgroundColor: "#00a9ff",
    width: deviceWidth,
    alignItems: "center",
    justifyContent: "center",
  },
  yellowBox: {
    backgroundColor: "#00ff00",
    width: deviceWidth,
    alignItems: "center",
    justifyContent: "center",
  },
  greenBox: {
    backgroundColor: "#ffff00",
    width: deviceWidth,
    alignItems: "center",
    justifyContent: "center",
  },
});
