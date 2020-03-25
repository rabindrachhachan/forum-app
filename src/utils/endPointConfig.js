export default (EndPointConfig = {
    Post: {
        getPosts:()=> `https://jsonplaceholder.typicode.com/posts`,
        getPostDetail :(postId)=> `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
        getUsers:()=> `https://jsonplaceholder.typicode.com/users`
    }
})