// fetch('https://api.adviceslip.com/advice')
// .then(function(response) {
//   const advice = response.json()
//   console.log(advice)

// })
// .catch(function(error) {
//   console.log('Looks like there was a problem: ', error);
// });

fetch("https://api.adviceslip.com/advice").then(function(response) {
    return response.json();
  }).then(function(data) {
    console.log(data)
    console.log(data.slip.id);
    console.log(data.slip.advice);
  }).catch(function() {
    console.log("Booo");
  });