const checkRes = (res) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err))
}

export const getCat = (value = 20) => {
    return fetch(`https://api.thecatapi.com/v1/images/search?limit=${value}`, {
        headers: {
            'Content-Type': 'application/json',
            "x-api-key": "a68d55c7-245f-402f-b4e9-3cbe18a979dc"
        }
    })
        .then(checkRes)
}