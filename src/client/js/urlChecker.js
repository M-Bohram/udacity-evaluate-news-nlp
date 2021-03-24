export const checkArticleURL = (inputText) => {
  console.log("::: Running checkArticleURL :::", inputText);

  const pattern = new RegExp(
    /^((?:https?:\/\/)?[^.\/]+(?:\.[^.\/]+)+(?:\/.*)?)$/
  );
  return pattern.test(inputText);
};
