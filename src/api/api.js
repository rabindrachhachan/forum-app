import EndPointConfig from '../utils/endPointConfig';

function headers() {
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'dataType': 'json',
        
    };
}

export async function getPosts() {
    const url = EndPointConfig.Post.getPosts();
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: headers(),
        });

        return {
            status: response.ok,
            data: await response.json(),
        };
    } catch (e) {
        console.error(e);
        throw e;
    }
}

export async function getPostDetail(data) {
    const url = EndPointConfig.Post.getPostDetail(data['postId']);
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers:headers(),
        });

        return {
            status: response.ok,
            data: await response.json(),
        };
    } catch (e) {
        console.error(e);
        throw e;
    }
}

export async function getUsers() {
    const url = EndPointConfig.Post.getUsers();
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers:headers(),
        });

        return {
            status: response.ok,
            data: await response.json(),
        };
    } catch (e) {
        console.error(e);
        throw e;
    }
}
