// get the doms
let image = document.getElementById('cardImage')
let text = document.getElementById('cardText')
let leftBtn = document.getElementById('leftBtn');
let rightBtn = document.getElementById('rightBtn');

let cardText = [
    'Welcome! Here I have assembled some very, very rough drafts of different general directions we could head. Again, these are NOT final in any way, only rough concepts. The idea is to use these to know where to focus our attention. Please check them all out and let me know which two you feel are the best direction for RGC and I will start drawing variations based on those. Cheers!',
    'A seal can be effective for establishing a sense of trade craft, makers, or other hands-on type businesses.',
    'This is known as a combination mark, the rose emerging out of the words communicates both the idea of stability (the font) and of growth (the rose).',
    'A more painterly approach brings old school, hand drawn vibe to the communication. From playful, to arty, there are a lot of ways this approach could go.',
    'This is inspired by classic rubber stamps, a common visual in early to mid century commerce. This exudes confidence, strength, and has a more industrial vibe.',
    'Somewhat more elegant, this approach communicates the artisan qualities of the brand with just a touch of class.',
    'Right out of the `70s this approach is simple, bold, and just a little playful. Might appeal more to imbibers than industry but could be a fun direction.'

]
let cardimage = [
    '/images/welcome.png',
    '/images/roundcrest.png',
    '/images/combomark.png',
    '/images/scripty.png',
    '/images/labelmark.png',
    '/images/starcombo.png',
    '/images/simplecombo.png'
]

const swap = (x) => {
    text.innerText = cardText[x]
    image.src = cardimage[x];
}

let counter = 0

const step = (y) => {
    counter = counter + y;
    if (counter < 0) { counter = 0 };
    if (counter > 6) { counter = 6 };
    swap(counter);
}

swap(counter)


console.log('testing the water')