import caesar from './utils/caesar.js'

const messages = [
    {
        shift: 7,
        ciphered: 'Qpunsl ilssz, qpunsl ilssz. Qpunsl HSS aol dhf.',
    },
    {
        shift: 18,
        ciphered: 'Sdd A osfl xgj Uzjaklesk ak - YJWWF LWKLK!',
    },
    {
        shift: 22,
        ciphered: 'Sa seod ukq w Iannu Ydneopiwo wjz w Dwllu Jas Uawn!',
    },
    {
        shift: 6,
        ciphered: 'Ygtzg Irgay oy iusotm zu zuct',
    },
    {
        shift: 10,
        ciphered:
            'Dro gokdrob yedcsno sc pbsqrdpev. Led dro myno sc *wwr* novsqrdpev.',
    },
    {
        shift: 12,
        ciphered:
            'Pqow ftq tmxxe iuft nagste ar taxxk. Rm xm xm xm xm, xm xm xm xm.',
    },
]

messages.forEach(({ shift, ciphered }) => console.log(caesar(ciphered, -shift)))
