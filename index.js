#! /usr/bin/env node

const readline = require("readline");
const asciiArts = require("./AA.js");

const textTransitionYes = [
  asciiArts.dolphinAfterYes,
  asciiArts.extinguishedProcessOne,
  asciiArts.extinguishedProcessTwo,
  asciiArts.extinguishedProcessThree,
  asciiArts.extinguishedProcessFour,
  asciiArts.silence,
  asciiArts.grave,
];
const textTransitionNo = [
  asciiArts.reallyDolphin,
  asciiArts.metamorphosis,
  asciiArts.penginChanged,
  asciiArts.penginGreat,
];
const textTransitionLet = [
  asciiArts.dolphinSurvived,
  asciiArts.dolphinSurvived2,
  asciiArts.thankyouDolphinOne,
];
const textSwitchingYes = [asciiArts.grave, asciiArts.grave2];
const textSwitchingNo = [asciiArts.penginGreat, asciiArts.penginGreat2];
const textSwitchingLet = [
  asciiArts.thankyouDolphinOne,
  asciiArts.thankyouDolphinTwo,
];

const transitionAA = (i, textArray, delay = 1500) => {
  return new Promise((resolve) => {
    setTimeout(function () {
      console.clear();
      console.log(textArray[i]);
      resolve();
    }, delay);
  });
};

const switchingAA = async (textArray) => {
  return new Promise((resolve) => {
    let counter = 0;
    const timerId = setInterval(function () {
      if (counter > 4) {
        clearInterval(timerId);
        resolve();
      }
      console.clear();
      console.log(textArray[counter % 2]);
      counter++;
    }, 1400);
  });
};

const main = async () => {
  for (;;) {
    const answer = await prompt("Please delete me...");
    if (["y", "Y", "yes", "Yes"].includes(answer)) {
      const counter = textTransitionYes.length;
      for (let i = 0; i < counter; i++) {
        await transitionAA(i, textTransitionYes);
      }
      await switchingAA(textSwitchingYes);
      break;
    } else if (["n", "N", "no", "No"].includes(answer)) {
      const counter = textTransitionNo.length;
      for (let i = 0; i < counter; i++) {
        const delay = i === 1 || i === 3 ? 3000 : 1500;
        await transitionAA(i, textTransitionNo, delay);
      }
      await switchingAA(textSwitchingNo);
      break;
    } else if (["let it go"].includes(answer)) {
      const counter = textTransitionLet.length;
      for (let i = 0; i < counter; i++) {
        await transitionAA(i, textTransitionLet);
      }
      await switchingAA(textSwitchingLet);
      break;
    }

    console.log("");
  }
};

const prompt = async (msg) => {
  console.log(msg);
  const answer = await question(asciiArts.dolphinBeforeStdin);
  return answer.trim();
};

const question = (question) => {
  const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    readlineInterface.question(question, (answer) => {
      resolve(answer);
      readlineInterface.close();
    });
  });
};

(async () => {
  await main();
})();
