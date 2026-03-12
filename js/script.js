const thoughts = [
    "you are doing great!",
    "placeholder 1 (my bad i ran out of ideas)",
    "cad is a word that means a man who behaves dishonorably, especially toward a woman",
    "i have no more thoughts to add :(",
    "i could add some more thoughts, but i am too lazy to do so",
    "this is so difficult",
    "i see you spamming the button, stop it",
    "how many thoughts can you ebven think of",
    "blahblahlablahlbalhalblahlablha",
    "mann i wish i could get a free bag of chips",
    "random fact: i was suspended in grade 9, ask me why (i wont tell u)",
    "random fact: ive bled out my eyes before! yes this is TRUE i was in grade 3 and got sent to the ER",
    "random fact: i have 8 cousins, 4 aunties and uncles and about 20 great aunts and uncles. big family :)",
    "random fact: i had a pet fish and bro starved. my bad",
    "someone is probaly devouring the most scrumptious cookie rn",
    "do fish get thirsty? is water even wet??",
    "is my cortisol low yet",
    "if i had a super-opwer, i would travel multiverses",
    "binging jjk rn (its so unbelievably peak)",
    'try sending me an anonymous message <a href="message.html">here</a>',
    "just goes to show that my brain is literally empty",
];

function getRandomThought() {
    const randomIndex = Math.floor(Math.random() * thoughts.length);
    return thoughts[randomIndex];
}

document.getElementById('generate').addEventListener('click', function() {
    const thoughtElement = document.getElementById('thought');
    thoughtElement.innerHTML = getRandomThought();
});
