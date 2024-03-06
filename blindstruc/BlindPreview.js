import React from "react";
import 'react-native-gesture-handler';

import {
  View,
  Text,
  ScrollView,
   TouchableOpacity,
} from 'react-native';
import styles from '../styles/blindstyle'
const BlindPreview = ({ jsonData }) => {


  return (
    
    <View style={styles.bodybg}>

      <View style = {styles.containerbox}>
    

         {/* Header row */}
         <Text style={[styles.title]}>Blind Structure</Text>
         <TouchableOpacity onPress={() => console.log('Button pressed')} style={styles.Button}>
          <Text style={[styles.buttonclose]}>x</Text>
        </TouchableOpacity>
      <View style={styles.tableRow}>
        
        <Text style={[styles.tableCell, styles.headerCell]}>Level</Text>
        <Text style={[styles.tableCell, styles.headerCell]}>Time</Text>
        <Text style={[styles.tableCell, styles.headerCell]}>Blinds</Text>
      </View>
      <ScrollView style={styles.tableContainer}
          showsVerticalScrollIndicator={false}>
      {/* DATA ROW table*/}
      <View style={styles.table}>
        {jsonData.map((row, index) => (
             <View
             style={[
               styles.tableRow,
               // Check if the value of "Level" (cell at index 0) is even
               index % 2 === 1 && parseInt(row[0]) % 2 === 0 && styles.evenCell,
             ]}
             key={index}
           >
            {row.map((cell, cellIndex) => (
           <Text
           style={[
             styles.tableCell,
             // Check if the value of "Level" (cell at index 0) is even
             cellIndex === 0 && parseInt(cell) % 2 === 0 && styles.evenCell,
           ]}
           key={cellIndex}
         >
                {cell}
              </Text>
            ))}
            
          </View>
          
        ))}

        </View>
         </ScrollView>
      </View>
   
    </View>
  );
}


export default BlindPreview;
