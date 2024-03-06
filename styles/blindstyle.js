import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  buttonclose: {
    fontSize: 30,
    width: 20,

    color: '#FFF',
  },
  Button: {
    height: 30,
    top: -40,
    left: 330,
  },
  tableContainer: {
    maxHeight: 340,
  },
  title: {
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
    backgroundColor: '#252452',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
  },

  tableRow: {
    flexDirection: 'row',
    backgroundColor: '#474675',
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
    backgroundColor: '#312F5F',
  },
});
export default styles;
