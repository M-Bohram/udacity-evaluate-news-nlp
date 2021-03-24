import { checkArticleURL } from "../src/client/js/urlChecker";

describe("Test the checkArticleURL function", () => {
  test("checkArticleURL is defined", () => {
    expect(checkArticleURL).toBeDefined();
  });

  test("checkArticleURL return true if the url is a valid URL", () => {
    expect(checkArticleURL("http://google.com")).toBeTruthy();
  });

  test("checkArticleURL return true if the url is a invalid URL", () => {
    expect(checkArticleURL("test message")).toBeFalsy();
  });
});
