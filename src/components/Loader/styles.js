import { StyleSheet } from 'react-native'
import { screenHeight, screenWidth } from '../../helper/methods'

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: screenHeight,
        width: screenWidth,
        opacity: 0.6,
        backgroundColor: '#0000007c'
    }
})

export default styles