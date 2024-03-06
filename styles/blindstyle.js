import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  buttonclose: {
    width: 50, // Example width
    height: 40, // Example height
    tintColor:'#fff'
  },
  Button: {
    
    top: -30,
    left: 340,
  },
  tableContainer: {
    maxHeight: 340,
  },
  title: {
    top: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
    position: 'relative',
  },
  bodybg: {
    backgroundColor: '#fff',
    height: '100%',

    alignItems: 'center', // Align items horizontally
  },
  containerbox: {
    top: 170,
    width: 390,
    height: 470,
    backgroundColor: '#0C103E',
  
 
    borderRadius: 10,
  },

  tableRow: {
    flexDirection: 'row',
    backgroundColor: '#232652',
    position: 'relative',
    width: 330,
    left: 30,
  },
  tableCell: {
    flex: 1,
    padding: 10,
  },

  headerCell: {
    fontWeight: 'bold',
    backgroundColor: '#16193E',
  },

  evenCell: {
    backgroundColor: '#303362',
  },
});
export default styles;
