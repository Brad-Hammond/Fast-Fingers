// Random Paragraph Quotes
const paragraphs = [
  "Along the rugged coastline, where the waves crashed against the cliffs with a relentless fury, a lighthouse stood sentinel, its beacon cutting through the darkness like a guiding star. Against the backdrop of the stormy sea, it stood as a symbol of hope, offering solace to ships lost in the tempestuous waters.",
  "As the sun dipped below the horizon, casting hues of orange and pink across the sky, the weary traveler trudged along the dusty path, feeling the weight of the backpack on their shoulders. In the distance, the silhouette of a quaint village emerged, promising warmth and shelter for the night.",
  "Amidst the bustling city streets, where the rhythm of life pulsated with an energy all its own, a solitary figure sat on a bench, lost in thought. The cacophony of honking horns and distant chatter faded into the background as memories of yesteryears flooded their mind, painting a vivid tapestry of nostalgia.",
  "Beneath the sprawling branches of the ancient oak tree, its leaves whispering secrets to the wind, a young couple shared a quiet moment, their fingers intertwined in a silent vow of love. Time seemed to stand still as they gazed into each other's eyes, cherishing the serenity of the tranquil meadow.",
  "In the heart of the enchanted forest, where shafts of sunlight danced through the canopy above, a mischievous sprite darted between the trees, leaving a trail of giggles in its wake. With a twinkle in its eye, it beckoned to the weary traveler, inviting them to embark on a whimsical journey into the unknown.",
  "As the first snowflakes of winter descended from the heavens, blanketing the world in a pristine coat of white, children emerged from their homes, their laughter echoing through the frosty air. With rosy cheeks and sparkling eyes, they built snowmen and waged epic snowball battles, reveling in the magic of the season.",
  "In the quaint countryside, where fields of golden wheat stretched as far as the eye could see, a farmer toiled from dawn till dusk, his weathered hands nurturing the land with tender care. With each season's harvest, he reaped the fruits of his labor, a testament to the timeless cycle of nature.",
  "Within the hallowed halls of academia, where knowledge flowed like a mighty river, students gathered in eager anticipation, their minds hungry for enlightenment. From the classics of literature to the mysteries of science, they delved deep into the annals of human understanding, seeking answers to life's profound questions.",
  "Beneath the twinkling canopy of stars, where the night sky unfolded like a vast tapestry woven with celestial wonders, a solitary astronomer peered through the lens of his telescope, charting the movements of distant galaxies. Lost in the vastness of the cosmos, he pondered the mysteries of the universe, a humble seeker of truth.",
  "Amidst the bustling marketplace, where vendors peddled their wares with fervent enthusiasm, a street performer captivated the crowd with a mesmerizing display of music and dance. With nimble fingers and graceful movements, he wove a tale of passion and longing, transporting his audience to distant lands and forgotten dreams.",
  "In the heart of the old city, where narrow cobblestone streets wound their way through centuries of history, an artist sat before an easel, capturing the essence of urban life with each stroke of the brush. With a keen eye and steady hand, they immortalized the timeless beauty of crumbling facades and bustling marketplaces, breathing life into the faded memories of generations past.",
  "Amidst the tranquil expanse of the countryside, where the gentle breeze carried the sweet scent of wildflowers, a solitary writer sought inspiration beneath the shade of an ancient oak tree. With a tattered notebook resting on their lap, they penned tales of love and loss, weaving together words like threads in a delicate tapestry of emotion and introspection.",
  "Beneath the shimmering surface of the crystal-clear lake, where sunlight danced in playful patterns upon the rippling water, a diver descended into the depths, exploring a hidden world teeming with life. Amongst swaying kelp forests and vibrant coral reefs, they marveled at the kaleidoscope of colors and creatures that thrived in the underwater oasis.",
  "Along the rugged mountain trail, where jagged peaks pierced the sky and alpine meadows bloomed in a riot of colors, a group of intrepid hikers embarked on a journey of discovery and adventure. With each step, they forged a bond as strong as the granite cliffs that surrounded them, conquering obstacles and scaling heights they never thought possible.",
  "In the bustling metropolis, where skyscrapers towered like giants of glass and steel, a chef worked tirelessly in a bustling kitchen, orchestrating a symphony of flavors and aromas that tantalized the senses. With pots bubbling and pans sizzling, they transformed humble ingredients into culinary masterpieces, each dish a testament to their passion and creativity.",
];
// Variable Selectors
let displayText = document.querySelector(".display-text");
let quoteInput = document.getElementById("quoteInput");
let countDownTimer = document.getElementById("countDown");
let mistakeCount = document.querySelector(".mistakes span");
let wpmDisplay = document.querySelector(".wpm span");
let cpmDisplay = document.querySelector(".cpm span");
let tryAgainButton = document.querySelector("button");
let startTime;
let timerInterval;
let mistakeCounter = 0;
let characterCount = 0;
let wordCount = 0;

// Function for random quote
function randomText() {
  displayText.innerHTML = "";
  let randQuote = Math.floor(Math.random() * paragraphs.length);
  paragraphs[randQuote].split("").forEach((span) => {
    let spanTag = `<span>${span}</span>`;
    displayText.innerHTML += spanTag;
  });
}

// Event lister to set color of Quote
quoteInput.addEventListener("input", () => {
  if (!startTime) {
    startTimer();
  }
  const arrayQuote = displayText.querySelectorAll("span");
  const arrayValue = quoteInput.value.split("");
  let correct = true;
  arrayQuote.forEach((characterSpan, index) => {
    const character = arrayValue[index];
    if (character == null) {
      characterSpan.classList.remove("correct");
      characterSpan.classList.remove("incorrect");
    } else if (character === characterSpan.innerText) {
      characterSpan.classList.add("correct");
      characterSpan.classList.remove("incorrect");
    } else {
      characterSpan.classList.remove("correct");
      characterSpan.classList.add("incorrect");
      correct = false;
    }
  });
  // Increase mistake counter // not including backspaces
  if (event.inputType !== "deleteContentBackward" && !correct) {
    mistakeCounter++;
    mistakeCount.textContent = mistakeCounter;
  }
  // Stops timer once complete
  if (correct && arrayQuote.length === arrayValue.length) {
    clearInterval(timerInterval);
    calculateWPM();
    calculateCPM();
  }
  // CPM Count
  characterCount = quoteInput.value.length;
  // WPM Count
  wordCount = quoteInput.value
    .split(/\s+/)
    .filter((word) => word !== "").length;
  calculateWPM();
  calculateCPM();
});
// Try again button event listner
tryAgainButton.addEventListener("click", () => {
  resetValues();
  randomText();
});
// Function for Count Down Timer
function startTimer() {
  startTime = Date.now();
  timerInterval = setInterval(updateTimer, 1000);
}
function updateTimer() {
  const currentTime = Date.now();
  const elapsedTime = currentTime - startTime;
  const seconds = Math.floor(elapsedTime / 1000);
  countDownTimer.textContent = seconds;
}
// Calculate WPM
function calculateWPM() {
  const elapsedTimeInMinutes = (Date.now() - startTime) / (1000 * 60);
  const wpm = Math.round(wordCount / elapsedTimeInMinutes);
  wpmDisplay.textContent = wpm;
}
function calculateCPM() {
  const elapsedTimeInMinutes = (Date.now() - startTime) / (1000 * 60);
  const cpm = Math.round(characterCount / elapsedTimeInMinutes);
  cpmDisplay.textContent = cpm;
}
quoteInput.addEventListener("input", () => {
  if (!startTime) {
    startTimer();
  }
});

// Function to reset values for try again button
function resetValues() {
  clearInterval(timerInterval);
  mistakeCounter = 0;
  characterCount = 0;
  wordCount = 0;
  mistakeCount.textContent = 0;
  wpmDisplay.textContent = 0;
  cpmDisplay.textContent = 0;
  countDownTimer.textContent = 0;
  startTime = null;
  quoteInput.value = "";
}
randomText();
