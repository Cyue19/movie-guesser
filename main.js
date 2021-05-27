const movies = [
    {title: "Harry Potter", explanation: "This movie is about a dude with a stick...", hint: "It's Magic"},
    {title: "Just Go With It", explanation: "This movie is about people who go on holiday...", hint: "Adam, Drew, and Jennifer"},
    {title: "Never Back Down", explanation: "This movie is about two guys with daddy issues who beat each other up...", hint: "Kanye West - Stronger"},
    {title: "Spongebob Squarepants", explanation: "This movie is about a rectangle...", hint: "It's a cartoon"},
]
var movie;
const explanation = document.getElementById("explanation");
const input = document.getElementById("input");
const output = document.getElementById("output");
const hint = document.getElementById("hint");
const submitButton = document.getElementById("submitButton");
const hintButton = document.getElementById("hintButton");

chooseMovie();

submitButton.addEventListener("click", () => {
    const guess = input.value;
    if (guess.toUpperCase()==movie.title.toUpperCase()) {
        output.innerHTML = "Correct the movie was " + movie.title;
    } else {
        output.innerHTML = "Incorrect the movie was " + movie.title;
    }
    chooseMovie();
});

hintButton.addEventListener("click", () => {
    hint.innerHTML = "Hint: " + movie.hint;
});

function chooseMovie() {
    var randNum = generateRandomNumber(movies.length);
    movie = movies[randNum];
    explanation.innerHTML = movies[randNum].explanation;
    hint.innerHTML = "";
    input.value = null;
}

function generateRandomNumber(max) {
    return Math.floor(Math.random()*max);
}