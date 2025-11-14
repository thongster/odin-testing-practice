
function capitalize(string) {
    if (typeof string != "string" || 
        string.length === 0 ||
        typeof string[0] != "string"
    ) return string

    const newString = string[0].toUpperCase() + string.slice(1)
    return newString
}

console.log(capitalize("you are gae"))
export {capitalize}