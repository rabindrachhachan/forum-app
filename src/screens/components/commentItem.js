
import React from "react";
import {
    View,
    Text,
} from "react-native";

import styles from "./styles";

const CommentItem = React.memo(({ item})=>{
    const {id,name,body,email} = item;
    
    return(
        <View style={styles.commentItem} key={id}>
            <View style={styles.postNameContainer}>
                <Text style={[styles.text1,{fontWeight:'700',}]} numberOfLines={1}>
                    { `${name}`}
                </Text>
            </View>
            <View style={styles.postBodyContainer} >
                <Text style={[styles.text1]} numberOfLines={2}>
                    { `${body}`}
                </Text>
            </View>
            <View  style= {styles.postUserNameContainer} >
                <Text style={[styles.text1,{fontWeight:'700',}]} numberOfLines={1}>
                    { `${email}`}
                </Text>
            </View>
        </View>
    )

})

export default CommentItem;

