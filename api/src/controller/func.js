module.exports = (a) => {
    if (!a) return "";
    let b = "";
    for (let i = 0; i < a.length; i++) {
        if (a[i] === "") {
            b += "\xa0"+" ";
        } else {
            b += a[i];
        }
    }
    return b;
}

