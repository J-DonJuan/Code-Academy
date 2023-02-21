let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

let count = 0;
storyWords.forEach(word => {
  count += 1;
})

// Remove all instances of the word 'literally' from the story
storyWords = storyWords.filter(word => word != unnecessaryWord);

// Fix all misspelled words ('beautifull' to 'beautiful')
storyWords = storyWords.map(word => {
  if (word === misspelledWord) {
    return 'beautiful';
  } else {
    return word;
  }
})

//Find index of any badwords so we can fix it
let badWordIndex = storyWords.findIndex(word => {
  return word === badWord;
})
storyWords[badWordIndex] = 'really'

//Checking if every word in the story is less than 10 chars
let lengthCheck = storyWords.every(word => word.length < 10);

//Find index of the word that is more than 10 chars so we can fix it
let longWordIndex = storyWords.findIndex(word => word.length > 10);

//Replacing the long word we found with a shorter word
storyWords[longWordIndex] = 'stunning';

// Array being output as readable text for testing
console.log(`storyWords word count: ${storyWords.length}`);
console.log(storyWords.join(' '));