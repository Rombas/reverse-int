module.exports = function reverse (n) {
    // let res = n.toString();
    // let resStr = res.split("");
    // let resStrRev = resStr.reverse();
    // resStr = resStrRev.join("");
    // let ress = Number.parseInt(resStr);

    return Number.parseInt(n.toString().split("").reverse().join(""));
}
