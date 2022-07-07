export const unique = (arr) => {
    let uniqueValue = []
    for (let el of arr) {
        if (!uniqueValue.includes(el)) {
            uniqueValue.push(el)
        }
    }
    return uniqueValue
}