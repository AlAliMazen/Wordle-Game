
# Table of Contents
Copy your readme to http://ecotrust-canada.github.io/markdown-toc/ to make a table of contents.  This will help assessors to see the structure of your readme. Just test it out ast this tool isn't perfect. It tends to mess up with special characters like dashes.

====================================== The Sections you Fill in are below ==============================

# Wordle Game
🚨**Required** 

In simple eords, **WordleGame** is an international game where player should guess the right word in six tries. In other words, there are 6 rows and each row has 5 square for a 5 letter meaningful word. The word itself should not be an acrynom or a person name. 

If player guessed a right letter at right positon, the game board square and the keyboard key will be turned to a green.

If player guessed a right letter at wrong position, the game board square as will as the keyboard key will be turned into yellow.

If player's guess is neither a right letter or at right position, then game board square and the keyboard key will be gray coloured.

Wordle Game is also responsive and load like in the following **am I responsive here** [wordle-Game](https://ui.dev/amiresponsive?url=https://alalimazen.github.io/Wordle-Game/)
and it looks like ![wordle-game](assets/README-imgs/wordle-game-res-a.png) with how to play-to-play instructions. 

When game starts it looks like following screenshot ![Game-board](assets/README-imgs/wordle.game-res-b.png) .



## Live Site
🚨**Required** 

- A live Wordle Game based on the written and implemented code is deployed on GitHub Pages under [Wordle-Game](https://alalimazen.github.io/Wordle-Game/) .

## Repository
🚨**Required** 

-Game is hosted on GitHub and code can be checked up at the following repository [Word-Game](https://github.com/AlAliMazen/Wordle-Game) .


## Author
🚨**Required** 

Mazen Al Ali

## Table of Contents
🚀 **merit & beyond**

Generate after readme is complete by copying and pasting your readme from this point & below into this tool:
- [mardown table of contents generator](https://ecotrust-canada.github.io/markdown-toc/)
**NOTE:** It does have some bugs if you have dashes or trailing spaces in your headers

# UX
🚀 **merit & beyond**


This particular section can be blank, it's just a wrapper for the child sections.

The subsections provide insight into your UX process, focusing on why you made the user experience decisions you did. If the target audience and user base drove you to a certain look and feel call it out so the accessors can't be objective and say I don't like it. 

## Target Audience
🚀 **merit & beyond**

- On one side, this game targets English learners whi want to test their knowledge to guess 5 letter words based on the game board which is very helpful.

- On the other side, it targets the junior developers who want to test their understanding of JavaScript and the interactivity between UI (HTML and CSS) amd backend with (JS).

## Project Goals
🚀 **merit & beyond**

- Mainyl is the ability to have interaction between end user and the website. Project Goal for Wordle Game is to take user choice, process it and get the consequence of that choice. 

- Another goald is to build a game which is internationally known but with a differnt code base. The idea is not to repeat the same code and have a code clone, but rather to build this game with a different code base and as simple as possible make it possible for future learner to know that it is still possible and can even be improved.

## User Stories
🚀 **merit & beyond**

This section lists outs as a X I want Y, so I can Z format. It helps drive out the features you will build.

You can have many kinds of users so feel free to have one section or the subsections listed or more

### Site User Stories
🚀 **merit & beyond**

### Website Owner Stories
🚀 **merit & beyond**

### Developer Stories
🚀 **merit & beyond**

## Design Choices
🚀 **merit & beyond**

Your site is most likely geared to a certain audience, and your design choices should tie into them. Let the assessors know your thought process.


You may want to re-watch the videos about the [5 planes of UX development ](https://learn.codeinstitute.net/courses/course-v1:codeinstitute+FE+2017_T3/courseware/22905698f3be425d918ebc64c87801b7/9c295bdc5a4048308460e262b14ab7df/) when writing up this section

### Typography
🚀 **merit & beyond**

- Because each user key stroke is going to be a single letter, I paid special attention for a font which is soft and clear even when small letter is used. 

- Font family is 'Nato Sans', which belongs to sans-serif and taken from Google font under [Noto Sans](https://fonts.google.com/noto/specimen/Noto+Sans) with following weights:

    - 100
    - 200
    - 300
    - 400
    - 500
    - 600
    - 700
    - 800
    - 900

    with bold style.
- Tests on the font includes using small capital i and small l like in Illuminate, for example. 

### Imagery
🚀 **merit & beyond**

Explain why you used certain icons and images on your site & tie it back into your target audience

### Animations and Transitions
🚀 **merit & beyond**

- discuss any special animations or transitions you've included 
- special hover state effects

## Design Elements
🚀 **merit & beyond**

what are some of they key User Interactive elements and bits of functionally you will have on your site:
tables, accordions, maps, videos, forms with inputs, text areas, select/dropdowns

## Wireframes
🚀 **merit & beyond**

Wireframes are done using the Balsamiq software licesned by Code Institute and I have made a wireframe for **desktop** and **mobile devices** and both can be found under the assets/wireframes .



### Features
🚨**Required** 

Right from the beginning when the game loads, it starts by showing user a set of instructions on how ot play and what color has which meaning. After touching or clicking on **OK** button, the game board and the on-screen keyboard  and in the middle there is a scoring calculation tracker. 

### Implemented Features
🚨**Required** 

- Instruction window: When game load at the first stage, it opens up with a how-to-play instructions. This window is connected to Javascript file through a ducntion responsible to hide this window and show the game UI.

- On the top of the gameboard there are two incons on is lillte i circle used to show the instructions and hide the whole game UI elements and hid it again to show the game UI. 

- Next to the instructions icon there is a volum icon. When clicked a background music will start playing help player to listen to music while playing. The same icon is also used to pause the backgriund music.


- Gamebaord: a grid UI of 5 squares and 6 rows. Whenever player is ready with aguess of a word, player can click on **Submit** key to check the typed word against the random selected word.

- Coloring Gameboard: when letter is at right position, square will be turned into green. When letter is at wrong position but still included in the random word, square will be turned into yellow. When letter is not included in the random word, square will be turned into gray. 

- Play again button: This button is going to be shown only when either play wins the game at what ever row, or when player loses without guessing the right word. **Play again** button is used to reset both game board and the on-screen keyboard. 

- Notifications: There are 3 notification while game is running. First one is when user has guesed the random word using 'window.aler()' built in function. The second notification is when player loses the game, a notification will be shown telling user that game is over and what the random word is. The last notification is shown when the size of the browser or device dimension. 

- On-screen keyboard: The keyboard is used to get the letter into the gameboard squares. The Keyboard get also colored when player has guessed right letter at right position, right letter at wrong position or not included letter to avoid these letter on the next try. 

- Animation of both game board and keyboard: When a word is submitted the row on the gameboard is rotated and gets colored from side of Javascript implemention CSS code. The same animation is applied to the keyboard keys after **play again** button. 

- Scoring: since we have a word of 5 letters, player will get 20 points for each right letter at the right position. Only 10 points for a right letter at the right position. If player gets the right word from the first try, s/he will get 100 point + 105. The 105 is so aggregated the player will lose 5 points for each row (which is considered a try) (5+10+15+20+25+2+30 =105).


## Future Features
🚀 **merit & beyond**

One of the future feature which I would like to implement when completing the database module it to link this game to a central database and add statistics to the game to show results between different player from all over the globe.

## Testing
🚨**Required** 

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Validation Testing
🚨**Required** 



### CSS Validation
🚨**Required** 

Following screenshot has been don on the following website and it shows no errors in the whole page.
[CSS validator](https://jigsaw.w3.org/css-validator/)

![Css Validation](assets/README-imgs/css-validation-results.png) .



### HTML Validation
🚨**Required** 

All html pages included in this game are validated on the following website.
[HTML Validator](https://validator.w3.org/)

**index.html**

![Index.html](assets/README-imgs/html-index-validation.png) .


**404.html**
![img.png](documentation/images/404-html-validation.png)

### Javascript Validation
🚨**Required** 

This validator requires you to copy in your code. For each JavaScript file:

- include a screenshot of the JS panel and the right-hand panel that shows now errors. 

If you have tons of warnings about spacing and semicolons, right,click your file to format in gitPod and see if that helps. If you have a warning about ES6 or 7 add this to the top of your file:
- `/*jshint esversion: 6 */ `

[JS validation](https://jshint.com) 

**pie.js**
![img_3.png](img_3.png)

### Javascript Validation
🚨**Required** 
There aretwo JS files used in this game. Both of them are validated on the following website and showing no errors
[JSON validation](https://jsonlint.com/) 

**main.js**
![mian-javascript-file](assets/README-imgs/js-main-validation.png)

**words** 
![list-of-words](assets/README-imgs/js-words-validation.png)

## Compatibility and Responsive Testing
🚨**Required** 

1. Visit https://gs.statcounter.com/browser-market-share to figure out the most popular browsers & operating system combos seen across the we for the geographic region, and platoform(s) and screen sizes you expect your users to belong to. 

1. Include a sentence about why you chose the combinations you did.

1. Create a table that lists out what devices, browsers, and operating system you tested your application on and a brief description of why you chose the mixture you did. The point is to prove that you looked at the site across various browsers, operating systems, and viewport breakpoints. [markdown table generator](https://www.tablesgenerator.com/markdown_tables)

1. if you can't find the brower/device/OS combinations you want on Browserstack with your github student webpack (or you didn't activate that in time), note what you'd ideally test on then what you ended up testing on as a compromise. 

| TOOL / Device                 | BROWSER     | OS         | SCREEN WIDTH  |
|-------------------------------|-------------|------------|---------------|
| real phone: motog6            | chrome      | android    | XS 360 x 640  |
| browser stack: iPhone5s       | safari      | iOs        | XS 320 x 568  |
| dev tools emulator: pixel 2   | firefox     | android    | SM 411 x 731  |
| browserstack: iPhone 10x      | Chrome      | iOs        | SM 375 x 812  |
| browserstack: nexus 7 - vert  | Chrome      | android    | M 600 x 960   |
| real tablet: ipad mini - vert | safari      | iOs        | M 768 x 1024  |
| browserstack: nexus 7 - horiz | firefox     | android    | LG 960 x 600  |
| chrome emulator: ipad - horiz | safari      | iOs        | LG 1024 x 768 |
| browserstack                  | Chrome      | windows    | XL 1920 x 946 |
| real computer: mac book pro   | safari 12.1 | Mohave     | XL 1400 x 766 |
| browserstack                  | IE Edge 88  | windows 10 | XL 1920 x 964 |

## Manual Testing
🚨**Required** 

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. 

There are 3 ways you can document your testing:

**1. Markdown**

Describing your testing process is via scenarios, right here such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

**2. Use Spreadsheets**    

Here is a [Manual Testing Template](https://docs.google.com/spreadsheets/d/1vc1IVL-ydQwWeWMqnk_GRox6HE6qxDLpchGse8Crayo/edit#gid=296578096) that you can use as a starting point to keep track of your testing efforts. Make a copy of it in your own account and update as needed to reflect the browsers you are testing and features.  

**3.Use Github Agile Tools**

Create Custom Issue Template and A Project Board in git hub.[Here's a brief overview](https://docs.google.com/document/d/1nDS5tZeMO77Dfq85IZGMSV6C41XaPm9FwcpR3k-UTVc/edit?usp=sharing) I put together on how to do this

It's ok to spot check specific functionality across devices and browsers but each page should be viewed as a whole for each device/browser combo at least once too.

A quick way to check if items are exceeding the screen width of a project is to run this javascript in the console for various screen emulations:

```
var docWidth = document.documentElement.offsetWidth;
[].forEach.call(document.querySelectorAll('*'),function(el){if(el.offsetWidth > docWidth){console.log(el);}});
```


### Defect Tracking
🚨**Required** 

Try to create issues in real time as it better reflects the daily life of a developer.

GitHub has an issues bar that helps you track things pretty quickly. Here's a [guide to GitHub Defects](Defects.md)

You could do track them as bullet items in this document, or create a google speadsheet too. 

### Defects of Note
🚀 **merit & beyond**

Some defects are more pesky than others. Highlight 3-5 of the bugs that drove you the most nuts and link to them directly here.


## Outstanding Defects
🚨**Required** 

It's ok to not resolve all the defects you found as long as:
- it does not impact a user from completing a vital function on the website
- it only affects a very small subset of users
- is an extreme edge case that very few users would try
- there is an open issue against a framework, browser or technology used

If you know of something that isn't quite right, create an issue and link to it here and explain why you chose not to resolve it. 

Sometimes it's as simple, word wrapping issue that makes the site look odd at a certain screensize that you just didn't have time to fix due to the impending deadline it's best to mention it but note why you allowed it to go live: "Yes it looks odd, but it doesn't impact core functionality of the site." than to let the accessors think you didn't notice it. 

## Core Web Vitals
🚀 **merit & beyond**

SEO is greatly impacted by your core web vitals. The readout from https://web.dev/measure/ which is essentially a lighthouse audit gives your site scores in 4 categories. Ideally you want your site to be in the green for all 4 scores. web.dev has dedicated servers to test deployed sites without extensions that skew the results, so it's best to get results from this site.
 You should talk about the results for each section pay attention to 

## Accessibility Testing
🚨**Required** 

Accessibility testing is aimed to make sure that those with visual or physical disabilities can still browse your website. Some users have had strokes or accidents that make it difficult to use a mouse, so they use keyboard keys to tab through sites. Others use screen readers that rely on HTML tags to help the user navigate quickly through the site to find information they want, others have color blindness or contrast issues. It's the law to provide services 
Here's a [site](https://www.w3.org/WAI/fundamentals/accessibility-intro/#:~:text=Accessibility%20is%20Important%20for%20Individuals%2C%20Businesses%2C%20Society,-The%20Web%20is&text=That%20is%2C%20the%20accessibility%20barriers,older%20people) where you can learn more about accessibility and the internet.

### Accessibility Audits
🚨**Required** 

Accessibility audits run through the HTML and determine if the parts of the WCAG (web content accessibility guidelines ) that are implemented through HTML tags and attributes are present. They can do some checking for low vision/contrast stuff too.

You should run your deployed website pages through  at least on auditing tool. lighthouse's audit to check performance, accessibility, best practices and SEO scores. You should aim to get 85 or higher score on accessibility. 

**You should fix issues associated with:**
- contrast 
- aria labels
- alt text
- large images
- skewed images

**Lighthouse**
https://web.dev/measure/  If you have lower scores, read the report and follow the links to address the flagged issues. You can run this tool from Chrome Dev Tools too against your local machine, but chrome extensions can sometimes give you missing alt text on things like the grammarly plug in tracking pixel.

You want a score in the green for accessibility and should look at ways to get it to 100.

**[WAVE chrome](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh?hl=en-US) extension**
Wave is developed by webaim.org and does a bit better at contrast issues and uses 2.1 guidelines

**Contrast Checkers**
- https://webaim.org/resources/contrastchecker/
- https://color.a11y.com/

### Keyboard Navigation
🚀 **merit & beyond**

Another way to accessibility test your site is to try to click on the browser URL and see what happens if you use the tab, arrow and enter keys. Does it work well or does the user get stuck? Check this in a couple browsers as the focus & active outlines are typically styled by the browser

The expected results for various keyboard entries and field types can be found [here](https://webaim.org/techniques/keyboard/#testing)

You can take a video of this testing if you want and convert it to a gif and paste that into your readme. Record something to yourself in a Slack direct message, then download it. Then you can use https://cloudconvert.com/mp4-to-gif to convert the mp4 to a gif and just paste it into the readme via GiHu, and it'll resolve itself.

### Chrome Vox Reader
🚀 **merit & beyond**

If you are really ambitious, you can use the [VoxReader](https://chrome.google.com/webstore/detail/screen-reader/kgejglhpjiefppelpmljglcjbhoiplfn?hl=en) extension in chrome to see what your site sounds like on a screen reader. It really drives home the need for good aria-labels & semantic HTML.

## Automated Testing
🚀 **merit & beyond**

Once you write javascript, you could use jasmine or jest to automate testing. This stuff isn't covered until you get into the P4 materia!  [Here's a quick tutorial](https://www.youtube.com/watch?v=FgnxcUQ5vho) if you are interested.

# Technologies Used
🚀 **merit & beyond**

This section just summarizers tools and programming languages you used.

## Languages
🚀 **merit & beyond**

-write bullet points for the languages you used (HTML & CSS)

## Frameworks, Libraries & Programs Used
🚀 **merit & beyond**

List out the tools you used with a link and a short description (this helps others figure out where to get the bonus points & reminds you what you used for your next project
- Balsamiq
- Coolors.co
- fontawesome
- gitpod
- github
- google fonts
- font awesome
- amiresponsive
- table of contents creator
- markdown table generator

# Deployment
🚨**Required** 

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages).

In particular, you should provide all details of the differences between the deployed version and the development version, if any.

Remember to use proper markdown for commands and enumerated steps.


You may want to re-watch the [initial deployment in gitpod video](https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LR101+2021_T1/courseware/4a07c57382724cfda5834497317f24d5/9b06129195c64fada6783de9cfe82d60/) when writing up this section.

## Deploy to GitHub Pages
🚨**Required** 

Write out steps you would take and test them to deploy your code to GitHub Pages, include screenshots if you think they would make the process easier.

## Forking The Repository
🚀 **merit & beyond**

A fork creates a completely independent copy of Git repository. In contrast to a fork, a Git clone creates a linked copy that will continue to synchronize with the target repository, so if you want to ensure other people don't commit to your public repo, you might want to tell them to fork the repository :) 

## Run Locally With GitPod
🚀 **merit & beyond**

Enumerate and write the steps of how to run a project locally via gitPod. Include Screenshots to maximize the impact of the instructions.

# Credits
🚨**Required** 

To avoid plagiarism amd copyright infringement, you should mention any other projects, stackoverflow, videos, blogs, etc that you used to gather imagery or ideas for your code even if you used it as a starting point and modified things. Giving credit to other people's efforts and ideas that saved you time acknowledges the hard work others did. 

## Content
🚨**Required** 

Use bullet points to list out sites you copied text from and cross-reference where those show up on your site

## Media
🚨**Required** 

Make a list of sites you used images from. If you used several sites try to match up each image to the correct site. This includes attribution for icons if they came from font awesome or other sites, give them credit.

You should not be using images taken from copyrighted sites, but only royalty free ones. Try typing `!copyright` in slack and see what help it gives you for this topic.

## Acknowledgments
🚀 **merit & beyond**

This is the section where you refer to code examples, mentors, blogs, stack overflow answers and videos that helped you accomplish your end project. Even if it's an idea that you updated you should note the site and why it was important to your completed project.

If you used a CodeInstitute Example project as a starting point. Make note of that here.


