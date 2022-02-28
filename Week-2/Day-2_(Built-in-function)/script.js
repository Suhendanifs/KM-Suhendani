const changeChar = (str) =>{
    if (typeof str === 'string') {
        let splitStr = str.split(' ');

        let tmp = splitStr.map(val => {
            let eachWord = val.split(' ')
            console.log(eachWord)
            eachWord[0] = eachWord[0].toUpperCase()
            return eachWord.join('')
        })
        return tmp.join(' ')
    } else {
        alert("Error")
    }
}
console.log(changeChar('halo halo bandung'))