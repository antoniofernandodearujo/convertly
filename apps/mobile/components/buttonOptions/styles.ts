import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    justifyContent: 'flex-start',
    marginBottom: 16,
    marginLeft: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 144,
    height: 144,
    borderRadius: 10,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  buttonDefault: {
    backgroundColor: '#333',
    opacity: 0.7,
  },
  buttonSelected: {
    backgroundColor: '#28a745',
    opacity: 1,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginTop: 8,
  },
});

export default styles;
