function displayPoem(response) {
    console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

    let instructionsInput = document.querySelector("user-instructions");
  let apiKey = "012b5b3a44t6b0bodaf08aa43444f3f6";
  let prompt = `User instructions: Generate a French poem about $(instructionsInput.value)`;
  let context = "You are a romantic Poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic terms and separate each line with a <br />. Make sure to follow the user instructions. Does not include a title to the poem. Please sign the poem with 'SheCodes AI' inside a <strong></strong> element";
  let apiURL =
    `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  
console.log("Generating poem");
console.log('Prompt: ${prompt}');
console.log('Context: ${context}');

    axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
