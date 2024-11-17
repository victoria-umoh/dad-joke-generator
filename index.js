const btnEl = document.getElementById("btn");
const apiKey = "F5ImDZT0MZYx0PkSbDEluQ==V8iuTsu7fDrnDaxp";
const jokeEl= document.getElementById("joke");


const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
}

apiURL = "https://api.api-ninjas.com/v1/dadjokes";

async function getJoke(){
    try {
        jokeEl.innerText = "Updating ...";
        btnEl.disabled = true;
        btnEl.innerText = "Loading ...";

        const response = await fetch(apiURL, options);
        const data = await response.json();
        // console.log(data[0]);

        btnEl.disabled = false;
        btnEl.innerText = "Tell me a Joke";

        jokeEl.innerText = data[0].joke;
    } catch (error) {
        jokeEl.innerText = "An error happened, try again later";
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a Joke";
        console.log(error);
    }
    

}

btnEl.addEventListener("click", getJoke);