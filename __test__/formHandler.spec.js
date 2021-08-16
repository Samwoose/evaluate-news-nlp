import "@babel/polyfill"
import { postUserUrlHelper } from "../src/client/js/formHandler";

describe("postUserUrlHelper function testing", () => {
//     test("It should check if newlyFormedUserUrl is created", async () => {
//     const newlyFormedUserUrlTest = await postUserUrlHelper('https://www.politico.com/news/2021/08/15/biden-white-house-afghanistan-drawdown-505018', '/update-url')
//     expect(newlyFormedUserUrlTest).toBe("https://www.politico.com/news/2021/08/15/biden-white-house-afghanistan-drawdown-505018");
//   });
  test('It should check if newlyFormedUserUrl is created', () => {
    postUserUrlHelper('https://www.politico.com/news/2021/08/15/biden-white-house-afghanistan-drawdown-505018', '/update-url')
    .then(response=>{
        expect(resonse).toBe("https://www.politico.com/news/2021/08/15/biden-white-house-afghanistan-drawdown-505018");})
    
    });
});