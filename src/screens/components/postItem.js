
import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
} from "react-native";

import styles from "./styles";

getUserName = (users ,userId)=>{
    if(users && Array.isArray(users)){
        return users.find((item)=> item['id'] == userId)
    }
}

const PostItem = React.memo(({ item, users,gotoPostView, gotoUserView,})=>{
    const {id,title,userId} = item;
    const user = this.getUserName(users,userId)
    const userName = typeof user !=='undefined'? user['username'] : userId
    return (
        <TouchableOpacity
            onPress={() => typeof gotoPostView ==='function' &&  gotoPostView({post:item,users:users})}
            key={id.toString()}
            style={styles.postItem}
        >
            <View style={styles.postTitleContainer}>
                <Text style={styles.text1} numberOfLines={2}>
                    {title}
                </Text>    
            </View>
            <View
                style={[styles.userNameContainer]}>
                <Text 
                    style={[styles.text1,{fontWeight:'700', color: 'rgb(0,151,235)'}]} numberOfLines={1}
                    onPress={() => typeof gotoUserView ==='function' && gotoUserView(user)}
                >
                    { `${userName}`}
                </Text>
            </View>
        </TouchableOpacity>
    );

})

export default PostItem;







