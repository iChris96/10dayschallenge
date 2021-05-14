// Day 2: Loops


function vowelsAndConsonants(s) {
    const word = s;

    const vowels = 'aeiou'

    const isVowel = (i) => {
        let isVowel = false;

        vowels.split('').forEach(v => {
            if (v == i) {
                isVowel = true
            }
        })

        return isVowel;
    }

    let notVowels = []
    let areVowels = []

    word.split('').forEach(l => {

        isVowel(l) ? areVowels.push(l) : notVowels.push(l)
    })

    const x = [...areVowels, ...notVowels].forEach(i => console.log(i, '\n'))
}


vowelsAndConsonants('javascriptloops')

