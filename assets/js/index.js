// Import DOM Templates from templates.js
import { domTemplates } from './templates.js'; 

// Outer Scope Variables
let addTimeBonus;
let smileyBonusActivated = false;
let intervals = [];
let pairsMatched = [];

// Wait for start page DOM to finish loading and add event listeners to buttons
document.addEventListener("DOMContentLoaded", function() {
    let startButton = document.getElementsByClassName('btn-start-game')[0];
    let reportBug = document.getElementsByClassName('bug-report')[0];

    // Event Listener - Loads game page
    startButton.addEventListener('click', function() {        
        loadPage(domTemplates.startGame);
        startGame();
    });

    // Event Listener - Loads form page
    reportBug.addEventListener('click', function() {
        loadPage(domTemplates.form);
        formSend();
    });
});

// Change DOM elements when button is clicked

function loadPage(text) {
    document.getElementById('js-container').innerHTML = text;
}

// Start Game

function startGame() {
    addTimeBonus = false;
    let restartButtonDesktop = document.getElementById('btn-restart-grid');
    let restartButtonMobile = document.getElementsByClassName('btn-restart')[0];
    let reportBug = document.getElementsByClassName('bug-report')[0];
    let cardsPair = [];
    let cardNumbers = [];

    // Event Listener - Loads Form page
    reportBug.addEventListener('click', function() {
        loadPage(domTemplates.form);
    });
    
    // Event Listeners - Restart game
    restartButtonDesktop.addEventListener('click', function() {
        intervals.forEach(clearInterval);
        loadPage(domTemplates.startGame);
        startGame();
    });

    restartButtonMobile.addEventListener('click', function() {
        intervals.forEach(clearInterval);
        loadPage(domTemplates.startGame);
        startGame();
    });
    

    // Shuffle cards
    shuffleCards();

    // Event Listener - Card is clicked
    $('.card-container').click(function() {

        // Toggle CSS styles
        $(this).toggleClass('container-revealed');
        $(this).children('ion-icon').toggleClass('reveal-card');
        $(this).addClass('disabled');

        // Add card to cardsPair and cardNumbers arrays
        cardsPair.push(this.firstChild.attributes.name.value);
        cardNumbers.push(this.classList[1]);

        // Check if pair matches
        if (cardsPair.length === 2) {
            isPair(cardsPair, cardNumbers);
            cardsPair = [];
            cardNumbers = [];
        }
        
    });

    // Start timer countdown when first card is clicked
    $('.card-container').on('click', countdown);

    // Trigger smileyBonus
    $('.card-container').on('click', smileyBonus);
}

// Shuffle cards function

function shuffleCards() {

    let cards = ['card-1', 'card-2', 'card-3', 'card-4', 'card-5', 'card-6',
                'card-7', 'card-8', 'card-9', 'card-10', 'card-11', 'card-12',
                'card-13', 'card-14', 'card-15', 'card-16'];

    let cardContainers = document.getElementsByClassName('card-container');

    // Shuffle array containing CSS classes
    for (let i = 0; i < cards.length; i++) {
        let num = Math.floor(Math.random() * cards.length);

        let temp = cards[i];
        cards[i] = cards[num];
        cards[num] = temp;
    }

    // Add CSS classes to card containers
    for (let card of cardContainers) {
        card.classList.add(cards.pop());
    }
}

// Verify pair function

function isPair(pair, cards) {
    if (pair[0] === pair[1]) {

        // increase score
        increaseScore();

        // Check if all pairs have been matched
        allPairsMatched(pair);

        // Increase time by 10 seconds
        addTimeBonus = true;

    } else {

        setTimeout(function() {
            for (let card of cards) {
                $(`.${card}`).toggleClass('container-revealed');
                $(`.${card}`).children('ion-icon').toggleClass('reveal-card');
                $(`.${card}`).removeClass('disabled');
            }
        }, 500);
    }
}

// Start timer

function countdown() {

    // Prevent further card clicks from initiating countdown
    $('.card-container').off('click', countdown);

    let minutes = 0;
    let seconds = 29;
    let displayM;
    let displayS;
    
    let setCountdown = setInterval(function() {

        // Execute when pair is matched
        if (addTimeBonus) {

            seconds += 10;

            if (seconds >= 60) {
                seconds = seconds - 60;
                minutes++;
            }

            addTimeBonus = false;

        }

        displayM = minutes < 10 ? `0${minutes.toString()}` : minutes.toString();
        displayS = seconds < 10 ? `0${seconds.toString()}` : seconds.toString();
        $('#timer')[0].innerText = `${displayM}:${displayS}`;
        seconds--;
        
        if (seconds < 0 && minutes > 0) {
            seconds = 59;
            minutes--;
        }
        

        if (minutes === 0 && seconds < 0) {
            // Get final score before reloading page
            let currentScore = $('.score')[0].innerText.split(': ');
            let finalScore = parseInt(currentScore[1]);

            intervals.forEach(clearInterval);
            gameOver('lost', finalScore);
        }
    }, 1000);

    intervals.push(setCountdown);
}

// Increase Score
function increaseScore() {
    let score = 0;
    let multiplier = 0;
    let bonus = 0;

    // Get current score
    let currentScore = $('.score')[0].innerText.split(': ');
    score = parseInt(currentScore[1]);

    // Get current time
    let time = $('#timer')[0].innerText.split(':');
    let min = parseInt(time[0]);
    let sec = parseInt(time[1]);
    console.log(min);

    // Convert minutes to seconds
    
    while (min > 0) {
        multiplier += 60;
        min--;
    }

    multiplier += sec;

    // Check if smileyBonus is activated
    if (smileyBonusActivated) {
        bonus = 200 * multiplier;
    } else {
        bonus = 100 * multiplier;
    }

    score += bonus;

    // Update score on DOM
    $('.score')[0].innerText = `Score: ${score}`;
    console.log(score);
}

// Surprise bonus
function smileyBonus() {

    // Prevent further card clicks from triggering smileyBonus function
    $('.card-container').off('click', smileyBonus);

    let smileyEvent = setInterval(function() {

        let number = Math.round(Math.random() * 500);
        
        // Toggle bonus when remainder is 0
        if (number % 2 === 0) {
           $('.bonus-card').children('ion-icon').toggleClass('reveal-card');

           smileyBonusActivated = smileyBonusActivated === false ? true : false;
        }
    }, 5000);

    intervals.push(smileyEvent);
}

// Check if Game Won
function allPairsMatched(pair) {
    pairsMatched.push(pair[0], pair[1]);

    if (pairsMatched.length === 16) {
        // Get final score
        let currentScore = $('.score')[0].innerText.split(': ');
        let finalScore = parseInt(currentScore[1]);

        intervals.forEach(clearInterval);
        gameOver('won', finalScore);
    }
}

// Game over
function gameOver(state, finalScore) {
    loadPage(domTemplates.gameOver);

    if (state === 'lost') {
        $('h1')[0].innerText = `You Lost :(`;
    } else {
        $('h1')[0].innerText = `You Won :)`;
    }
    
    $('.game-over-score')[0].innerText = `You Scored: ${finalScore} points`;

    // Event Listener - Replay Button
    $('.btn-replay').click(function() {
        intervals = [];
        pairsMatched = [];
        loadPage(domTemplates.startGame);
        startGame();
    });

    // Event Listener - Report a Bug button
    $('.bug-report').click(function() {
        loadPage(domTemplates.form);
        formSend();
    })
}

// Form send 
function formSend() {

    // Prevent Android keyboard from changing page size
    // Solution found at stack overflow: https://stackoverflow.com/questions/32963400/android-keyboard-shrinking-the-viewport-and-elements-using-unit-vh-in-css
    setTimeout(function () {
        let viewheight = $(window).height();
        let viewwidth = $(window).width();
        let viewport = $("meta[name=viewport]");
        viewport.attr("content", "height=" + viewheight + "px, width=" + 
        viewwidth + "px, initial-scale=1.0");
    }, 300);

    document.getElementById('report-a-bug-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get values from form
        const formDetails = {
            user_name: document.getElementById('name').value,
            user_email: document.getElementById('email').value,
            message: document.getElementById('comment').value
        }
        
        emailjs.send('service_wcq2bnx', 'send_feedback', formDetails)
            // if submit is successful
            .then(function(response) {
                loadPage(domTemplates.formSent);
                $('.btn-new-game').click(function() {
                    loadPage(domTemplates.startGame);
                    startGame();
                });
            }, 
            // if submit fails
            function(error) {
                    loadPage(domTemplates.formError);
                    $('#submit_error')[0].innerText = error.text;
                    $('.btn-new-game').click(function() {
                        loadPage(domTemplates.startGame);
                        startGame();
                    });
            });       
    })
}