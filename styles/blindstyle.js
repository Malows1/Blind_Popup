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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
    position: 'relative',
  },
  bodybg: {
    backgroundColor: 'white',
    height: '100%',

    alignItems: 'center', // Align items horizontally
  },
  containerbox: {
    top: 170,
    width: 390,
    height: 470,
    backgroundColor: '#191C5F',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
  },

  tableRow: {
    flexDirection: 'row',
    backgroundColor: '#383C71',
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
    backgroundColor: '#1D1C4D',
  },

  evenCell: {
    backgroundColor: '#303362',
  },
});
export default styles;
