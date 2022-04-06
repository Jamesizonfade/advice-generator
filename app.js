const adviceNumber = document.getElementById('advice-number')

const advice = document.getElementById('advice')

const generateAdvice = document.getElementById('generate-advice')


const renderApp = () => {
  fetch("https://api.adviceslip.com/advice").then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log(data)
    console.log(data.slip.id);
    adviceNumber.innerText = "ADVICE " + "#" + data.slip.id
    console.log(data.slip.advice);
    advice.innerText = `"` + data.slip.advice + `"`
  }).catch(function() {
    console.log("Booo");
  });
}

renderApp()

generateAdvice.addEventListener('click', renderApp)