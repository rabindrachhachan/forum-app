import {
    StyleSheet,
    Dimensions
} from "react-native";

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical:10
    },

    searchContainer: {
        height:40,
        margin:10,
        width: DEVICE_WIDTH * 0.96,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomColor:'#989898',
        borderBottomWidth: StyleSheet.hairlineWidth,
        backgroundColor:'white',
        marginTop:0,
    },

    inputWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    inputText: {
        fontSize: 14,
        fontFamily: 'roboto',
        color: 'black',
        width: DEVICE_WIDTH * 0.85,
        paddingHorizontal:10
    },
    imageIcon:{
        height:18, 
        width:24,
        alignSelf:'center'
    }
});

export default styles;
