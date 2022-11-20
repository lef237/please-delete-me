#! /usr/bin/env node

const dolphinBeforeStdin = `
┌──────────────┐
│              │
│    PLEASE    │
│    DELETE    │
│    ME...     │
│              │
└───────ｖ─────┘

      _／|_
　＿／　　　 ＼
〈――  ●　　　  ＼
　￣＼_＿＿　　　ヽ
　　 /＞―｜ヽ―-､  |
　　　　　 ＼|￣＼|_
　　　　　　　　(人_)



Please type (y/n) and push EnterKey
`;

const dolphinAfterYes = `
┌──────────────┐
│              │
│   THANKS     │
│   FOR YOUR   │
│   KINDNESS   │
│              │
└───────ｖ─────┘

      _／|_
　＿／　　　 ＼
〈――  ●　　　  ＼
　￣＼_＿＿　　　ヽ
　　 /＞―｜ヽ―-､  |
　　　　　 ＼|￣＼|_
　　　　　　　　(人_)

`;

const extinguishedProcessOne = `
┌────────────...
│            ...
│   THANKS   ...
│   FOR YOUR ...
│   KINDNESS ...
│            ...
└───────ｖ───...

      _／|_...
　＿／　　　 ...
〈――  ●　　　 ...
　￣＼_＿＿　　...
　　 /＞―｜ヽ―-､...
　　　　　 ＼|￣...
　　　　　　　　...

`;

const extinguishedProcessTwo = `
┌─────────......
│         ......
│   THANKS......
│   FOR YO......
│   KINDNE......
│         ......
└───────ｖ......

      _......
　＿／　......
〈――  ●　......
　￣＼_＿......
　　 /＞―｜ヽ......
　　　　　 ......
　　　　　......

`;

const extinguishedProcessThree = `
┌─────..........
│     ..........
│   TH..........
│   FO..........
│   KI..........
│     ..........
└─────..........

    ........
　＿／........
〈―― .........
　￣.........
　　 /..........
　　　.........
　　..........

`;

const extinguishedProcessFour = `
...............
...............
...............
...............
...............
...............
...............

    ........
　............
.............
 ...........
　　............
　　　.........
　　..........

`;

const silence = `



     (silence)




`;

const grave = `
Rest in Peace Mr. Dolphin...
I'll never forget you.
　.　+ 　.:.　.　.
+　 　:.　　.　 +.
　.　　: .　 +　. .
.　:.　　　　　.
　.　　+     Π
　　　　　  ||
　　　 　(二Ｘ二O
　　　 　 　||　.+ .
　　　∧ ∧   ||
　　 /⌒ヽ )_||＿
＿～(　　);;;;::＼
"　"" """""""" ""/;
　"" 　 """　""／:;


`;

const grave2 = `
Rest in Peace Mr. Dolphin...
I'll never forget you.
　+　. 　.:+　.　+
.　 　:.　　.　 .+
　.　　: +　 .　. .
.　+.　　　　　.
　.　　.     Π
　　　　　  ||
　　　 　(二Ｘ二O
　　　 　 　||　.. +
　　　∧ ∧   ||
　　 /⌒ヽ )_||＿
＿～(　　);;;;::＼
""""" ""  ""   ""/;
""  """    　""／:;


`;

const reallyDolphin = `
┌──────────────┐
│              │
│    OH...     │
│    Really?   │
│              │
│              │
└───────ｖ─────┘

      _／|_
　＿／　　　 ＼
〈――  ●　　　  ＼
　￣＼_＿＿　　　ヽ
　　 /＞―｜ヽ―-､  |
　　　　　 ＼|￣＼|_
　　　　　　　　(人_)



`;

const metamorphosis = `

＿人人人人人人人人人人人人人人人人人＿
＞                                  ＜
＞                                  ＜
＞                                  ＜
＞                                  ＜
＞          METAMORPHOSE!!!         ＜
＞                                  ＜
＞                                  ＜
＞                                  ＜
￣Y^Y^Y^Y^Y^Y^Y^Y^Y^Y^Y^Y^Y^Y^Y^YY^Y￣

`;

const penginChanged = `
　　　 ＿_
　　　/ ･ ＞
　　_/　 (
　 / (ﾟДﾟ) 、 < I have become Mr. Penguin!
　/ /　　 |｜
　ﾚ｜　　 ﾊ/
　　>--┬--<
　　 ⌒^ ^⌒

`;

const penginGreat = `
　　　 _＿
　　　/・ ＞
　　 /　 ヽ
　 ／(ﾟДﾟ) ＼  < I feel great!! Booyah!!
　(／(ﾉ 　|)､)
　 ｜|　　|
　 ｜ヽ＿ノ
　　ﾚＵ Ｕ

`;

const penginGreat2 = `
　　　 _＿
　　　/・ ＞
　　 /　 ヽ
　 ／(ﾟДﾟ)  ＼  < I feel great!! Booyah!!
 (／(ﾉ   |)､  )
　 ｜|　　|
　 ｜ヽ＿ノ
   ﾚＵ  Ｕ

`;

const dolphinSurvived = `
┌──────────────┐
│              │
│    I'LL      │
│    BE        │
│    MYSELF    │
│              │
└───────ｖ─────┘

      _／|_
　＿／　　　 ＼
〈――  ●　　　  ＼
　￣＼_＿＿　　　ヽ
　　 /＞―｜ヽ―-､  |
　　　　　 ＼|￣＼|_
　　　　　　　　(人_)



`;

const dolphinSurvived2 = `
┌──────────────┐
│              │
│    I'LL      │
│    BE        │
│    MYSELF    │
│              │
└───────ｖ─────┘

       _ /|_
　＿／　　　 ＼
〈――  ●　　　  ＼
　￣＼_＿＿　　　ヽ
　　  /＞―｜ヽ―-､ |
　　　　　＼|￣＼ |_
　　　　　　　　 (人_)



`;

const thankyouDolphinOne = `
┌──────────────┐
│              │
│     THANK    │
│      YOU     │
│       ❤      │
│              │
└───────ｖ─────┘

      _／|_
　＿／　　　 ＼
〈――  ●　　　  ＼
　￣＼_＿＿　　　ヽ
　　 /＞―｜ヽ―-､  |
　　　　　 ＼|￣＼|_
　　　　　　　　(人_)




`;

const thankyouDolphinTwo = `
┌──────────────┐
│              │
│     THANK    │
│      YOU     │
│       ❤      │
│              │
└───────ｖ─────┘

       _ /|_
　＿／　　　 ＼
〈――  ●　　　  ＼
　￣＼_＿＿　　　ヽ
　　  /＞―｜ヽ―-､ |
　　　　　＼|￣＼ |_
　　　　　　　　 (人_)



`;

const asciiArts = {
  dolphinBeforeStdin,
  dolphinAfterYes,
  extinguishedProcessOne,
  extinguishedProcessTwo,
  extinguishedProcessThree,
  extinguishedProcessFour,
  silence,
  grave,
  grave2,
  reallyDolphin,
  metamorphosis,
  penginChanged,
  penginGreat,
  penginGreat2,
  dolphinSurvived,
  dolphinSurvived2,
  thankyouDolphinOne,
  thankyouDolphinTwo,
};

module.exports = asciiArts;
