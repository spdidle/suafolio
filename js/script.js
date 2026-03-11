const thoughts = [
    "you are doing great!",
    "placeholder 1 (my bad i ran out of ideas)",
    "cad is a word that means a man who behaves dishonorably, especially toward a woman",
    "i have no more thoughts to add :(",
    "i am a thought generator, not a thought creator cut me some SLACK",
    "i suppose i could add some more thoughts, but i am too lazy to do so",
    "this is so difficult",
    "i see you spamming the button, stop it",
    "how many thoughts can you ebven think of",
    "blahblahlablahlbalhalblahlablha",
    "holy originality",
    "can you help if yr a calc tutor i suck at calc and i need help :(",
    "mann i wish i could get a free bag of chips",
    "random fact: i got kicked off the badminton team this year",
    "random fact: i was suspended in grade 9, ask me why (i wont tell u)",
    "random fact: ive bled out my eyes before! yes this is TRUE i was in grade 3 and got sent to the ER",
    "random fact: i have 8 cousins, 4 aunties and uncles and about 20 great aunts and uncles. big family :)",
    "random fact: i had a pet fish and bro starved. my bad",
    "someone is probaly devouring the most scrumptious cookie rn",
    "do fish get thirsty? is water even wet??",
    "a meme thats trending as i write this rn is low cortisol",
    "if i had a super-opwer, i would travel multiversess",
];

function getRandomThought() {
    const randomIndex = Math.floor(Math.random() * thoughts.length);
    return thoughts[randomIndex];
}

document.getElementById('generate').addEventListener('click', function() {
    const thoughtElement = document.getElementById('thought');
    thoughtElement.textContent = getRandomThought();
});
