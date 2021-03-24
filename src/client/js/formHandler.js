import { checkArticleURL } from "./urlChecker";

// function and not arrow function because of the change of "this" keyword in the event handler
export async function handleSubmit(event) {
  console.log("::: Running handleSubmit :::");

  event.preventDefault();

  const inputField = document.getElementById("name");
  const outputField = document.getElementById("results");

  // check what text was put into the form field
  let formText = inputField.value;
  if (checkArticleURL(formText)) {
    try {
      outputField.innerHTML = "Loading...";
      const jsonRes = await fetch(
        `http://localhost:8081/analyze?url=${formText}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await jsonRes.json();
      console.log(data);
      const { agreement, subjectivity, confidence, irony } = data;
      outputField.innerHTML = `agreement: ${agreement} - subjectivity: ${subjectivity} - confidence: ${confidence} - irony: ${irony}`;
    } catch (error) {
      outputField.innerHTML =
        "Error fetching the analysis data, make sure it is a valid article URL!";
    }
  } else {
    outputField.innerHTML =
      "This is not an article URL, please check the URL and try again!";
  }
}
