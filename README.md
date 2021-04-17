# Match Me

'Match Me' is a simple card matching / memory game that provides its players a quick and easy way to kill time and have fun.

## 1. UX

The target audience for this application are individuals of all ages that can operate a computer, tablet or mobile device.

As a user, I expect to:
* Easily understand what are the game instructions
* Quickly access the game itself
* Have fun whilst playing the game
* Be able to provide feedback to the developers without any difficulty

## 2. Features

The website can be split into 3 main sections, each section then leading onto subsections (explained below). A PDF with all the wireframes can be found [here](assets/wireframes/match_me_wireframes.pdf). Please note that the PDF document only includes wireframes for desktop and mobile design. Tablets will take the mobile design when viewed as portrait, and desktop / laptop design when viewed as landscape.

The website's 3 main sections are:

1. The start page
1. The game page
1. The feedback page

All pages use the "Josefin Sans" font from Google Fonts, usually with a large size, in order to give the app a playful look.

### 2.1 - The Start Page

The [start page](assets/wireframes/start_page.png) has a very simple layout. The title of the game (Match Me) is displayed at the top of the page, and at the centre the user will find two big buttons: "Start Game" and "Instructions". The first button takes the user to the app's second main section (the game page), while "Instructions" provides the user with information regarding the game's rules and score method. Clicking the "Instructions" [button](assets/wireframes/instructions_modal.png) will open a modal window that can be closed by clicking the "X" on the upper right corner. 

At the bottom of this section the user will find a footer containing basic copyright text on the left, social links in the middle and a feedback button ("Report a Bug") on the right. The feedback button sends the user to the website's third main section: the feedback page.

### 2.2 - The Game Page

The [game page](assets/wireframes/game_page.png) contains a 4x4 grid of cards in the centre of the page and also a few other elements that are important for the game's execution: a countdown timer, a score display, a "bonus mode" display and a restart button.

Whenever the user clicks a card, it will reveal a specific symbol. If the symbols on two cards match, the cards will remain open. Otherwise, they close again.

The timer displays "00:30" (minutes:seconds) when the user enters this section. Countdown only starts once the user clicks on one of the cards.

The score is initially 0, but will increase each time the user matches a pair of cards.

When the "bonus mode" is activated, a smiley face pops up on the screen (upper right on mobile portrait display, center left on mobile landscape and desktop displays). When the bonus is ON, the score amount is duplicated. Activation / de-activation of the bonus mode is done at random times via a Javascript function.

The restart button restarts the game.

At the bottom of this page, the user can also find the same footer as in the start page section. The copyright text at the left side can be clicked, leading the user back to the main page.

When the game is complete, the user is taken to a game over [page](assets/wireframes/game_over.png). The text on this page changes dinamically, depending on whether the user won or lost the game. This subsection also includes a "Replay" button that takes the user back to the game page, allowing them to play a new game. The usual footer and all its functionality can also be found at the bottom of the game over subsection.

The game page incorporates audio effects that are triggered when the following events take place:

* A card is clicked
* A pair is matched
* Bonus event is activated

### 2.3 - The Feedback Page

The [feedback page](assets/wireframes/report_a_bug.png) consists of a simple form where the user is required to enter his name, email address and feedback. Once all fields have been filled in, the user can click the "Submit" button and the data will be sent to the developer's email address (in this case, davidej.p.correia@gmail.com). A confirmation of receipt will also be sent to the user's email address. Once the "Submit" button is clicked, the HTML elements in this page change dinamically to confirm if the submission has been successful or not (wireframe example can be [here](assets/wireframes/report_a_bug_submit.png)). After feedback submission (whether successful or not), a "New Game!" button becomes visible, allowing users to return to main section 2 (the game page).

### 2.4 Features Left to Implement

At this stage, the following features / improvements could be implemented to boost UX:

* Hover states on the footer buttons / links should change colour, to make it clearer to the user that these elements lead somewhere.

* Game cards would benefit from a more imaginative design.

* The game instructions are sitting inside a modal window, which feels a bit overwhelming on mobile devices. Instead of a modal window, it might be worth generating an HTML page for the instructions.

## 3. Technologies Used

The following languages were used in the development of this website: HTML, CSS and Javascript.

In addition to "vanilla" JS, the Jquery library was also used, in particular a jquery [modal](https://jquerymodal.com/) developed by GitHub user [Kyle Fox](https://github.com/kylefox/).

The API [EmailJS](https://www.emailjs.com/) was used on section 3 of this website (the feedback page), in order to allow the user to send feedback to the developer.

For the game cards pictures, the following framework was used: https://ionicons.com/.

## 4. Testing

### 4.1 - The Start Page

The following elements were tested on section 1 of this app:
* The "Start Game" button.
* The "Instructions" button.
* The footer links / buttons.

The "Start Game" button triggers two JS functions: "loadPage" and "startGame". The first function loads all HTML elements for section 2 (game page), while the latter loads javascript functionality related to the game page itself.

The "Instructions" button does what is expected: opens up a modal with the game's rules / score method.

The links on the footer will navigate to the expected webpages, opening up on new browser tabs. 

The copyright button on the left will reload the main page, and the "Report a Bug" button will lead the user to section 3 (feedback page).

### 4.2 - The Game Page

The following elements / events were tested:
* Card display behaviour
* Timer countdown
* Score increase
* Bonus event
* Restart button
* Audio events
* Game Over behaviour
* Card Shuffle

#### 4.2.1 - Card Display Behaviour

All cards are initially presented with their pictures covered. Clicking on a card toggles the required CSS styles to reveal the card's picture. The CSS style '.disabled' prevents the user from clicking the exact same card again.
Clicking a second card will result in one of the two actions below:

* If the cards match, the CSS styles do not change and the cards remain open.
* If the cards don't match, the CSS styles are reverted and the user is able to click the cards again.

#### 4.2.2 - Timer Countdown

The timer initially displays "00:30" (minutes:seconds). The countdown only starts once one of the game cards is clicked, triggering the function called "countdown". This function triggers an interval (setCountdown) that updates the timer every second.

The function "countdown" also contains code that prevents a few bugs:

* Prevent subsequent card clicks from retriggering the "countdown" function.
* Display a 0 in front of minutes or seconds, when the value of both is less than 10 (i.e. display 09:10, instead of 9:10).
* Prevent the seconds counter from reaching negative values (i.e. -01, -02...).

#### 4.2.3 - Score Increase

The score starts with a display of 0. When a pair is matched, the function "increaseScore" is triggered. This function takes the current time (converting minutes to seconds) and then multiplies the total number of seconds by 100 or 200 (if the bonus mode is ON).
I played the game, console logging the score and time whenever a pair was matched. Results on the console log matched the update on the DOM with and without the bonus mode ON.

#### 4.2.4 - Bonus Event

The bonus event starts when the first card is clicked, triggering a JS function called "smileyBonus". This function sets an interval that runs every 5 seconds. With each occurrence, it generates a number between 0 and 500. If the number is even, it will activate the bonus if it's off, or de-activate it, if it's on.

I tested this functionality by console logging the random number generated and it performs as expected: if even, the CSS styles are toggled and reflected on the DOM (smiley face shows up when bonus mode is ON and disappears when OFF), and the boolean "smileyBonusActivated" is updated accordingly.

#### 4.2.5 - Restart Button

The "Restart" button does as expected: it clears all intervals that are running ("setCountdown" and "smileyEvent"), reloads the DOM and retriggers the "startGame" function.

Retriggering the "startGame" function will "refresh" all outer scope variables:

* addTimeBonus - resets if to 'false', otherwise the timer will jump from 00:30 to 00:39 (time bonus will kick in if state is left as 'true' from a previous game).

* smileyBonusActivated - resets it to 'false', otherwise boolean value and CSS styles won't match (smiley face will pop up, but boolean value is actually false and no bonus is applied).

* intervals - cleans up array, so that it may start empty.

* pairsMatched - clears array back to 0 (empty), otherwise it will contain a value from a previous game, causing a false victory or not triggering game over when all pairs are matched.

#### 4.2.6 - Audio Events

Played the game and audio events trigger when expected:

* When a card is clicked
* When a pair is matched
* When bonus mode is activated

There is a current bug: when two cards are clicked almost simultaneously, the card open sound will only trigger once. Further research needs to be done on this.

#### 4.2.7 - Game Over Behaviour

The "gameOver" function is triggered when the timer goes below 0 seconds or when all pairs are matched.

For the timer, I console logged the seconds countdown and, as expected, it triggers "gameOver" when the value hits '-1'. All intervals running are cleared at this stage.

The function "allPairsMatched" checks if all 16 cards have been matched. I console logged the result of the variable "pairsMatched" and, as expected, it triggers "gameOver" when it hits 16.

The "gameOver" function will clear all intervals that are currently running. It will then load the DOM with the "Game Over" [subsection](assets/finished_project_screenshots/game_over.PNG). The 'H1' element updates as expected:

* It states "You Won :)" if all cards are matched.
* It states "You Lost :(" if the user runs out of time.

I console logged the final score before the "gameOver" function is triggered and it reflects what is stated on the 'p' element of the "Game Over" page.

The "Replay" button on the "Game Over" subsection reloads the game page and retriggers the "startGame" function. No issues found whilst replaying the game (timer, score, bonus and other elements behave as expected).

Similarly, no issues found on the footer of the "Game Over" subsection:

* The will navigate to the expected webpages, opening up on new browser tabs. 

* The copyright button on the left will reload the main page, and the "Report a Bug" button will lead the user to section 3 (feedback page).

#### 4.2.8 - Card Shuffle

I tested the "shuffleCards" function by console logging the end result of the 'cards' array. In all events, the array was always different and did not contain duplicated values.

### 4.3 - Feedback Page

The following items were tested on the feedback page:

* Form input text elements
* Submit button
* EmailJS

#### 4.3.1 - Form Input Text Elements

Tested if it's possible to submit a form with incorrect information (no name, invalid email address, no comments) - this is not possible, as expected.

#### 4.3.2 - Submit Button

Clicking the "Submit" button successfully triggers the EmailJS API written inside JS function "formSend".

The button will also initiate a spinning circle that will disappear once feedback submission completes or fails.

#### 4.3.3 - EmailJS

EmailJS functionality for this project has been set up to send the user's comments to davidej.p.correia@gmail.com, whilst also sending a confirmation message to the user's email.

I tested the above by filling in the form, using insanereason@gmail.com as a user email. The comments on the form were sent to davidej.p.correia@gmail.com and a confirmation was also sent to insanereason@gmail.com.

A successful submission will change the DOM to state that the feedback has been [sent](assets/finished_project_screenshots/form_submit_successful.png).

To simulate a submission error, I changed the EmailJS template used from "send_feedback" to "send_feedbackk". The results were as expected, leading the user to a [page](assets/finished_project_screenshots/form_submit_error.png) that states that not only was the feedback not sent, but also what the error message was.

On both scenarios (successful and error), the user is presented with a "New Game!" button. This button does what is expected: it loads the game page and triggers the "startGame" function.

### 4.4 - Responsive Elements

The webpage was viewed at several different resolutions, media queries kick in as expected. The following resolutions were tested:

* 360x740 (including landscape mode)
* 375x667 (including landscape mode)
* 411x823 (including landscape mode)
* 414x736 (including landscape mode)
* 375x812 (including landscape mode)
* 768x1024 (including landscape mode)
* 800x1280 (including landscape mode)
* 834x1112 (including landscape mode)
* 600x960 (including landscape mode)
* 1024x1366 (including landscape mode)
* 1280x720
* 1440x900
* 1920x1080

The form page has a bug when viewed on Android phones. When touching on one of the text fields, the virtual keyboard is activated and squeezes the viewport, making it difficult to view the form. A solution for this was found on a stackover [discussion](https://stackoverflow.com/questions/32963400/android-keyboard-shrinking-the-viewport-and-elements-using-unit-vh-in-css). Code can be found below:

```javascript
    setTimeout(function () {
        let viewheight = $(window).height();
        let viewwidth = $(window).width();
        let viewport = $("meta[name=viewport]");
        viewport.attr("content", "height=" + viewheight + "px, width=" + 
        viewwidth + "px, initial-scale=1.0");
    }, 300);
```

### 4.5 - Software / Devices

The website was tested on the following browsers, all displaying similar behaviour:

* Mozilla Firefox (87.0).
* Google Chrome (89.0.4389.114).
* Microsoft Edge (89.0.774.68).

For mobile, I used an Asus Zenphone 5, Android version 9. The following browsers were used for testing:

* Mozilla Firefox (87.0.0-rc.1).
* Google Chrome (89.0.4389.105).

## 5 - Deployment

Website was deployed to GitHub (username [evendoom](https://github.com/evendoom/)) via Visual Studio Code. 

Once deployed to GitHub, the following steps were taken to create a GitHub Page: 

1. Access the GitHub [repository](https://github.com/evendoom/match_me) via an internet browser.
1. Click 'Settings'.
1. On the new page, scroll down to 'GitHub Pages' and click 'Check it out here!'.
1. Select branch (main).
1. Select folder (root).
1. Click 'Save'.

## 6 - Credits

The following articles / webpages / services were directly used or served as inspiration for this project:

* The website 'Flat UI colors' provided inpiration regarding color palettes: https://flatuicolors.com/.

* The primary font style used throughout this website (Josefin Sans) was taken from [Google Fonts](https://fonts.google.com/).

* All icons used on this website (except the favicon) were taken from [Ion Icons](https://ionicons.com/v4/).

* The favicon used on the browser's tab was taken from the following website under 'emoji > alien monster': https://favicon.io/.

* References to HTML and CSS glyphs can be found on the following website: https://css-tricks.com/snippets/html/glyphs/.

* The following jQuery code was used for modal implementation: https://jquerymodal.com/.

* The following jQuery plugin was used for the spinning circle: https://www.jqueryscript.net/loading/circle-indicator-spinner.html

* Form submission was implemented via [EmailJS](https://www.emailjs.com/).

* The stackoverflow website was used as a reference to some bug solving, particularly to fix the viewport on Android mobile devices when the virtual keyboard is activated: https://stackoverflow.com/questions/32963400/android-keyboard-shrinking-the-viewport-and-elements-using-unit-vh-in-css.

* The following MDN article gave me a good understanding on how to use modules in javascript: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules.

*README.md written by Davide Correia, 2021*