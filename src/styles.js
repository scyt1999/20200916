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
    }
})

export default styles;