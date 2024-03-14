import {StyleSheet} from 'react-native';

const makeStyles = colors =>
  StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
      margin: 20,
      backgroundColor: colors.charcoalGray,
      paddingBottom: 10,
      shadowColor: '#000',
      borderRadius: 10,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    submodalview: {
      width: '100%',
      alignItems: 'center',
      backgroundColor: colors.indigo,
      padding: 10,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#23b574',
      width: '100%',
      alignItems: 'center',
      borderRadius: 5,
      padding: 8,
      marginTop: 10,
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    successtext: {
      color: '#50535a',
      textAlign: 'center',
      fontSize: 20,
      margin: 10,
    },
    instructiontext: {
      color: '#6c727e',
      fontSize: 18,
      textAlign: 'center',
      margin: 5,
    },
    titletext1: {
      color: 'White',
      fontSize: 19,
      fontWeight: '500',
      textAlign: 'center',
      margin: 8,
      alignSelf: 'center',
      width: '70%',
    },
    modalOverlay: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0)',
    },
  });

export default makeStyles;
