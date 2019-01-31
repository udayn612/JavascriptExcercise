var st= "webmaster"
function lettersInAlphabeticalOrder(str)
{
    return str.split("").sort().join("");
}
console.log(lettersInAlphabeticalOrder(st))