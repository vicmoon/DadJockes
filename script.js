const jokeElement = document.getElementById("joke");
const jokeBTN = document.getElementById("jokeBtn");

jokeBTN.addEventListener("click", generateJoke);

generateJoke();

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const res = await fetch("https://icanhazdadjoke.com/", config);
  const data = await res.json();
  console.log(data);
  jokeElement.innerHTML = data.joke;
}

// .then((response) => response.json())
//     .then((data) => {
//       jokeElement.innerHTML = data.joke;
//     });
