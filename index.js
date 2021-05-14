// Day 2: Loops

/* const isVowel = (i) => {
        const vowels = 'aeiou'
        let isVowel = false;

        vowels.split('').forEach(v => {
            if (v == i) {
                isVowel = true
            }
        })

        return isVowel;
} */

const isVowel = (i) => {
    const vowels = 'aeiou'.split('');
    return vowels.includes(i) ? true : false
}


function vowelsAndConsonants(s) {
    const word = s;

    let notVowels = []
    let areVowels = []

    word.split('').forEach(l => {
        isVowel(l) ? areVowels.push(l) : notVowels.push(l)
    })

    const x = [...areVowels, ...notVowels].forEach(i => console.log(i))
}


vowelsAndConsonants('javascriptloops')

