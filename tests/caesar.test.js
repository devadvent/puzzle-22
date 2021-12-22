import caesar from '../src/utils/caesar.js'

const testMap = [
    {
        plain: 'Jingle bells, jingle bells. Jingle ALL the way.',
        shift: 7,
        ciphered: 'Qpunsl ilssz, qpunsl ilssz. Qpunsl HSS aol dhf.',
    },
    {
        plain: 'All I want for Christmas is - GREEN TESTS!',
        shift: 18,
        ciphered: 'Sdd A osfl xgj Uzjaklesk ak - YJWWF LWKLK!',
    },
    {
        plain: 'We wish you a Merry Christmas and a Happy New Year!',
        shift: 22,
        ciphered: 'Sa seod ukq w Iannu Ydneopiwo wjz w Dwllu Jas Uawn!',
    },
    {
        plain: 'Santa Claus is coming to town',
        shift: 6,
        ciphered: 'Ygtzg Irgay oy iusotm zu zuct',
    },
    {
        plain: 'The weather outside is frightful. But the code is *mmh* delightful.',
        shift: 10,
        ciphered:
            'Dro gokdrob yedcsno sc pbsqrdpev. Led dro myno sc *wwr* novsqrdpev.',
    },
    {
        plain: 'Deck the halls with boughs of holly. Fa la la la la, la la la la.',
        shift: 12,
        ciphered:
            'Pqow ftq tmxxe iuft nagste ar taxxk. Rm xm xm xm xm, xm xm xm xm.',
    },
]

testMap.forEach(({ plain, shift, ciphered }) => {
    test(`Ciphered text should be: ${ciphered}`, () => {
        expect(caesar(plain, shift)).toBe(ciphered)
    })
})

testMap.forEach(({ plain, shift, ciphered }) => {
    test(`Deciphered text should be: ${plain}`, () => {
        expect(caesar(ciphered, -shift)).toBe(plain)
    })
})
