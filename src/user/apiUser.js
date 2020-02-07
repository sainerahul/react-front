export const read = (userId, token) => {
    //  console.log(userId)
    //  ${process.env.REACT_APP_API_URL}
    return fetch(`http://localhost:8080/user/${userId}`, {
        method: "GET",
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
export const list = () => {
    return fetch(`http://localhost:8080/users`, {
        method: "GET",
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            console.log(error)
        })
}
export const remove = (userId, token) => {
    //  console.log(userId)
    //  ${process.env.REACT_APP_API_URL}
    return fetch(`http://localhost:8080/user/${userId}`, {
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
export const update = (userId, token,user) => {
    //  console.log(userId)
    //  ${process.env.REACT_APP_API_URL}
    return fetch(`http://localhost:8080/user/${userId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            console.log(error)
        })
}