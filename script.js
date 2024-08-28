const apiResponse = document.getElementById('apiResponse');
const apiCall = document.getElementById('apiCall');
const loader = document.getElementById('loader');

// const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';
const url = 'https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';

let getJoke = () => {
    apiResponse.classList.remove("fade");
    loader.style.display = "block";
    fetch(url)
        .then(data => data.json())
        .then(item => {
            function greet() {
                loader.style.display = "none";
            }
            setTimeout(greet, 1000);

            function greet2() {
                apiResponse.textContent = `${item.joke}`;
                apiResponse.classList.add('fade');
            }
            setTimeout(greet2, 1000);

        });
    copyJoke.innerText = 'Copy';
}



let copyJoke = document.getElementById('copyJoke');

copyJoke.addEventListener('click', () => {
    if (apiResponse.textContent) {
        navigator.clipboard.writeText(apiResponse.textContent)
        console.log('Joke copied to clipboard!');
        copyJoke.innerText = 'Copied';
    }
});



apiCall.addEventListener("click", getJoke);

getJoke();