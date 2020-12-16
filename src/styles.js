import {StatusBar, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginTop: StatusBar.currentHeight || 50,
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#00ffff',
        padding: 8,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        flex: 4,
        fontSize: 24,
    },
    content: {
        flex: 1,
    },
    loading: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 50,
    },
    form: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      padding: 35,
      marginTop: StatusBar.currentHeight || 0,
    },
    inputStyle: {
      width: '100%',
      marginBottom: 15,
      paddingBottom: 15,
      alignSelf: "center",
      borderColor: "#ccc",
      borderBottomWidth: 1
    },
})

export default styles;