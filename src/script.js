
const getDetails = document.getElementById("getDetails");

getDetails.addEventListener("click", async () => {
  //!using the joke api to fetch the data from server.
  const result = await fetch("https://official-joke-api.appspot.com/random_joke");
  const data = await result.json();
  console.log(data);
  const output = document.getElementById("api1");
  output.innerHTML = `💥Click the above Jokes button the content will be changed 💥
    <br> 
    <br> 
    jokes ::  ${data.setup} 
    <br> 
    <br>
     punch ::${data.punchline} <br>`;
});