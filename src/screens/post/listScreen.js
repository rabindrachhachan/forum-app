import React, { Component } from "react";
import {
    View,
    FlatList,
    TextInput,
    Image
} from "react-native";
import { connect } from 'react-redux';
import Snackbar from 'react-native-snackbar';
import styles from "./styles";

import {
    getPosts,
} from "../../actions/post"

import PostItem from "../components/postItem";
import searchIcon from "../../assets/search.png"


class ListScreen extends Component {
    constructor(props){
        super(props);
        this.state ={
            data : [],
            filterData: [],
            searchText:''
        }
    }

    componentDidMount(){
        this.props.getPosts();
    }

    componentDidUpdate(prevProps){
        if(prevProps.getPostSuccess !== this.props.getPostSuccess && this.props.getPostSuccess){
            this.updateList(this.props.post)
        }
        if(prevProps.getPostFailed !== this.props.getPostFailed && this.props.getPostFailed){
            this.renderSnackbar('Something went wrong')
        }
        
    }

    updateList =(list)=>{
        uData = list.map((item)=>{
            const user = this.getUserName(item['userId'])
            if(typeof user !=='undefined'){
                item['username'] = user['username'];
            }
            return item
        })
        this.setState({ data : uData,filterData:uData})
    }

    renderSnackbar = message => {
        if (message) {
            Snackbar.show({
                title: message,
                duration: Snackbar.LENGTH_LONG,
                backgroundColor:'#FA9917',
                color: '#FFFFFF',
            });
        }
    };


    getUserName = (userId)=>{
        const { users } = this.props;
        if(users && Array.isArray(users)){
            return users.find((item)=> item['id'] == userId)
        }
    }


    handleTextChanged = text => {
        let filter = [];
        let data = this.state.filterData;
        if (data.length) {
            data.map(item => {
                const userName =
                    item['username']
                        .toString()
                        .toLowerCase()
                        .search(text.trim().toLowerCase()) > -1;
                if (userName) {
                    filter.push(item);
                }
            });
        }

        if (text && filter.length) {
            this.setState({ searchText: text, filterData: filter });
        } else {
            this.setState({
                searchText: text,
                filterData: this.state.data,
            });
        }
    };


    gotoPostView =(item)=>{
        this.props.navigation.navigate('postview',{item:item});
    }

    gotoUserView =(user)=>{
        this.props.navigation.navigate('userview',{user:user});
    }

    renderPostItem = ({ item, index }) => {
        return(
            <PostItem  
                item={item} 
                users={this.props.users}
                gotoPostView ={this.gotoPostView} 
                gotoUserView= {this.gotoUserView} 
            /> 
        )
    };

    renderPostList = () => {
        const { filterData } = this.state;
        if (filterData && filterData.length) {
            return (
                <View>
                    <FlatList
                        data={filterData}
                        extraData={this.state}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={this.renderPostItem}
                    />
                </View>
            );
        }
        return null;
    };

    renderHeader = () => (
        <View style={styles.searchContainer}>
            <View style={styles.inputWrapper}>
                <TextInput
                    style={styles.inputText}
                    autoCorrect={false}
                    placeholder="Search"
                    underlineColorAndroid="transparent"
                    onChangeText={this.handleTextChanged}
                    value={this.state.searchText}
                    maxLength={50}
                />
            </View>
            <Image 
                source={searchIcon} 
                resizeMode={'contain'} 
                style={styles.imageIcon} 
                tintColor={'rgb(0,151,235)'} 
            />
        </View>
    );

    render() {
        return (
            <View style={styles.container}>
                {this.renderHeader()}
                <View style={styles.catalogWrapper}>
                    {this.renderPostList()}

                </View>
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        post: state.PostReducer.post,
        getPostSuccess: state.PostReducer.getPostSuccess,
        getPostFailed: state.PostReducer.getPostFailed,
        users:state.PostReducer.users
    };
};

const mapDispatchToProps ={
    getPosts,
}

export default connect(mapStateToProps,mapDispatchToProps)(ListScreen);