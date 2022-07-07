<<<<<<< HEAD
export const unique = (arr) => {
    let uniqueValue = []
    for (let el of arr) {
        if (!uniqueValue.includes(el)) {
            uniqueValue.push(el)
        }
    }
    return uniqueValue
=======
export const unique = (arr) => {
    let uniqueValue = []
    for (let el of arr) {
        if (!uniqueValue.includes(el)) {
            uniqueValue.push(el)
        }
    }
    return uniqueValue
>>>>>>> dce69a906b0c0d696eb744df290099e4b9942212
}