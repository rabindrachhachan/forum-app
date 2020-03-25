
import React from 'react';

import {
    View, 
    TouchableOpacity,
    Image,
    Text
} from 'react-native';

import styles from "./styles";
import backIcon from "../../assets/back-arrow.png"

const CustomHeader = React.memo((props)=>{
    const { title, navigation } = props;
    return(
        <View style={styles.headerWrapper}>
            <View style={styles.headerContainer }>
                <TouchableOpacity 
                    style={{width:'20%',paddingStart:15,flexDirection:'row'}}
                    onPress={()=> typeof navigation !=='undefined' && navigation.goBack()}
                >
                    <Image source={backIcon} resizeMode={'contain'} style={styles.imageIcon} tintColor={'rgb(0,151,235)'} />
                </TouchableOpacity>
                <View style={{width:'80%',flexDirection:'row',paddingStart:50}}> 
                    <Text>{title} </Text> 
                </View>
            </View>
        </View>
    )

})


export default CustomHeader 