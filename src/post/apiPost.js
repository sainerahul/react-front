export const create = (userId,token,post)=>{
    return fetch(`http://localhost:8080/post/new/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            // "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: post
     
    })
        .then(response => {
 
            return (
                // console.log(response),
                response.json())
        })
        .catch(err => {
            console.log(err)
        })
}

export const list = () => {
    return fetch(`http://localhost:8080/posts`, {
        method: "GET",
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            console.log(error)
        })
}

export const singlePost = (postId) => {
    return fetch(`http://localhost:8080/post/${postId}`, {
        method: "GET",
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            console.log(error)
        })
}
export const listByUser = (userId,token) =>{
    return fetch(`http://localhost:8080/post/by/${userId}`,{
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
    })
    .then(response => {
        return response.json()
    })
    .catch(err =>console.log(err))
}
export const remove = (postId, token) => {
    //  console.log(userId)
    //  ${process.env.REACT_APP_API_URL}
    return fetch(`http://localhost:8080/post/${postId}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            console.log(error)
        })
}
export const update = (postId, token,post) => {

    console.log('apiPost',postId, token, post)

   //  ${process.env.REACT_APP_API_URL}
   
   // const {name,email,photo} = user
   return fetch(`http://localhost:8080/post/${postId}`, {
       method: "PUT",
       headers: {
           Accept: "application/json",
           // "Content-Type": "application/json",
           Authorization: `Bearer ${token}`
       },
       // body: JSON.stringify({name,email})
       body : post
   })
       .then(response => {

           return (
               console.log(response),
               response.json())
       })
       .catch(error => {
           console.log(error)
       })
}

export const comment = (userId,token,postId, comment)=>{
    return fetch(`http://localhost:8080/post/comment`,{
        method:"PUT",
        headers:{
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body : JSON.stringify({userId,postId, comment})
    })
    .then(response =>{
        return response.json();
    })
    .catch(err=> console.log(err));
}

export const uncomment = (userId,token,postId, comment)=>{
    return fetch(`http://localhost:8080/post/uncomment`,{
        method:"PUT",
        headers:{
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body : JSON.stringify({userId,postId, comment})
    })
    .then(response =>{
        return response.json();
    })
    .catch(err=> console.log(err));
}
