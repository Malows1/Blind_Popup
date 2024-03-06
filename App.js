import React from "react";
import { View, Text, StyleSheet } from "react-native";
import BlindPreview from "./blindstruc/BlindPreview.js";
import { generateBlindsStructure } from "./blindstruc/BlindGenerator.js";
import styles from './styles/appstyle.js';

const App = () => {
  // Generating blinds structure using the functions from BlindsGenerator
  const gameTime = 2000; // 30 minutes in seconds
  const raiseBlindTime = 180; // 3 minutes in seconds
  const blindsStructure = generateBlindsStructure(gameTime, raiseBlindTime);

  return (
    <View style={styles.container}>
    
      <BlindPreview jsonData={blindsStructure} />
    </View>
  );
};

export default App;
