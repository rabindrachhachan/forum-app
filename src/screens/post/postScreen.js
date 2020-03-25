import React, { Component } from "react";
import {
    View,
    FlatList,
} from "react-native";
import { connect } from 'react-redux';
import Snackbar from 'react-native-snackbar';
import styles from "./styles";
import {
    getPostDetail
} from "../../actions/post"

import CommentItem from "../components/commentItem";
import PostItem from "../components/postItem";

class PostDetailScreen extends Component {
    constructor(props){
        super(props);
        this.state ={
            data: []
        }
    }

    componentDidMount(){
        const {item} = this.props.navigation.state.params;
        const {id} = item['post'];
        this.props.getPostDetail(id)
    }

    componentDidUpdate(prevProps){
        if(prevProps.getCommentSuccess !== this.props.getCommentSuccess && this.props.getCommentSuccess){
            this.updateList(this.props.comments)
        }
        if(prevProps.getCommentFailed !== this.props.getCommentFailed  && this.props.getCommentFailed ){
            this.renderSnackbar('Something went wrong')
        }
    }

    updateList =(list)=>{
        this.setState({ data : list})
    }

    renderSnackbar = message => {
        Snackbar.show({
            title: message,
            duration: Snackbar.LENGTH_LONG,
            backgroundColor: '#FA9917',
            color: 'white',
        });
    };

    gotoUserView =(user)=>{
        this.props.navigation.navigate('userview',{user:user});
    }


    renderCommentItem =({item})=>{
        return(
            <CommentItem item ={item}/>
        )
    }


    renderComments = () => {
        const { data } = this.state;
        if (data && data.length) {
            return (
                <View>
                    <FlatList
                        data={data}
                        extraData={this.state}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={this.renderCommentItem}
                    />
                </View>
            );
        }
        return null;
    };



    renderPost =(item)=>{
        if(item){
            return(
                <PostItem item ={item['post']} users={item['users']} gotoUserView={this.gotoUserView} />
            )
        }
    }

    render() {
        const {item} = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                <View style={{marginBottom:10}}>
                    {this.renderPost(item)}
                </View>
                <View>
                    {this.renderComments()}
                </View>
               
                
            </View>
        );
    }
}
const mapStateToProps = state => {
    return {
        comments: state.PostReducer.comments,
        getCommentSuccess: state.PostReducer.getCommentSuccess,
        getCommentFailed: state.PostReducer.getCommentFailed,
    };
};

const mapDispatchToProps ={
    getPostDetail
}



export default connect(mapStateToProps,mapDispatchToProps)(PostDetailScreen);