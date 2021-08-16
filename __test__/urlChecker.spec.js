import { urlValidator } from "../../src/client/js/urlChecker";

describe("urlValidator function testing", () => {
    test("It should check if the url is valid", () => {
      const input = "https://www.politico.com/news/2021/08/15/biden-white-house-afghanistan-drawdown-505018"
  
      const output = true;

      expect(urlValidator(input)).toEqual(output);
    });

    test("It should check if the url is valid", () => {
      const input = "1"
  
      const output = false;

      expect(urlValidator(input)).toEqual(output);
    });
  });