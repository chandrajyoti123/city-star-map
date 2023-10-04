export const breakString = (str, chunkSize) => {
    const result = [];
    for (let i = 0; i < chunkSize; i++) {
        result.push(str[i])
    }
    return result.join("")
}