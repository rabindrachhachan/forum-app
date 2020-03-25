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
    postItem: {
        marginTop: 2,
        width: DEVICE_WIDTH * 0.96,
        height:60,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'rgb(169,171,173)',
        backgroundColor:'white',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: 'black',
        shadowOpacity: 0.8,
        shadowRadius: 1,
        alignSelf:'center'
    },

    postTitleContainer: {
        height:40,
        width: DEVICE_WIDTH * 0.96,
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
    },
    
    userNameContainer: {
        height:20,
        width: DEVICE_WIDTH * 0.96,
    },
    
    text1: {
        fontSize: 14,
        lineHeight: 18,
        textAlign:'left',
        paddingStart: 10,
        color:'black'
    },

    focusText: {
        fontSize: 14,
        textAlign: 'center',
        color: 'rgb(0,151,235)',
        width: '100%',
    },

    commentItem: {
        marginTop: 2,
        width: DEVICE_WIDTH * 0.96,
        height:90,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'rgb(169,171,173)',
        backgroundColor:'white',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: 'black',
        shadowOpacity: 0.8,
        shadowRadius: 1,
        alignSelf:'center'
    },

    postNameContainer: {
        height:20,
        width: DEVICE_WIDTH * 0.96,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },

    postBodyContainer: {
        height:40,
        width: DEVICE_WIDTH * 0.96,
    },

    postUserNameContainer: {
        height:20,
        width: DEVICE_WIDTH * 0.96,
    },

    headerWrapper:{
        height:60,
        width:'100%',
        backgroundColor:'white',
        elevation:5,
        alignItems:'center',
        justifyContent:'center'
    },

    headerContainer:{
        height:40,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
    },

    imageIcon:{
        height:18, 
        width:24,
        alignSelf:'center'
    }
});

export default styles;
