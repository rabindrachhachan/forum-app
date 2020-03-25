
import React from "react";
import {
    View,
    Text,
} from "react-native";

import styles from "./styles";

const UserItem = React.memo(({ user})=>{
    const {id,name,email,website,company} = user;
    const body = `${company['name']}, ${company['catchPhrase']}, ${company['bs']}`
    
    return(
        <View style={styles.commentItem} key={id}>
            <View style={styles.postNameContainer}>
                <Text style={[styles.text1,{fontWeight:'700',}]} numberOfLines={1}>
                    {`${name} ${email} `}
                </Text>
            </View>
            <View style={styles.postBodyContainer} >
                <Text style={[styles.text1]} numberOfLines={2}>
                    { `${body}`}
                </Text>
            </View>
            <View  style= {styles.postUserNameContainer} >
                <Text style={[styles.text1,{fontWeight:'700',}]} numberOfLines={1}>
                    { `${website}`}
                </Text>
            </View>
        </View>
    )

})

export default UserItem;



