export const domTemplates = {
    main:`
        <section class="intro-screen">
            <header><h1>Match Me</h1></header>
            <div class="buttons-container">
                <button class="btn-start-game" aria-label="Start Game">Start Game</button>
                <a class="btn-instructions" href="#instructions" rel="modal:open" aria-label="Read Instructions">Instructions</a>
            </div>
            <footer>
                <button class="btn-main-page" aria-label="Return to main page">&copy; Match Me 2021</button>
                <div class="social-media-links">
                    <a href="https://www.facebook.com" target="_blank" aria-label="Visit us on Facebook"><ion-icon name="logo-facebook"></ion-icon></a>
                    <a href="https://play.google.com/store/" target="_blank" aria-label="Download our App on Google Play"><ion-icon name="logo-google-playstore"></ion-icon></a>
                    <a href="https://www.twitter.com" target="_blank" aria-label="Visit us on Twitter"><ion-icon name="logo-twitter"></ion-icon></a>
                </div>
                <button class="bug-report" aria-label="Report a Bug to us">Report a Bug</button>
            </footer>
        </section>

        <div id="instructions" class="modal">
            <p>
                Hi!<br><br>
                Welcome to ‘Match Me’, a memory / card matching game. The rules are:
            </p>
            <ul>
                <li>
                    You begin the game with 30 seconds (countdown only starts once you click a card).
                </li>
                <li>
                    When you match a pair, you get a 10 seconds bonus and your score will increase. 
                </li>
                <li>
                    The score is calculated by multiplying the time you have left times 100. 
                    For example, if you match two cards at 20 seconds, you gain 2000 points (20 x 100).
                </li>
                <li>
                    Occasionally, a score bonus will be activated (a smiley face pops up on the screen). 
                    Whilst the bonus is on, your score is multiplied by 200, instead of 100. 
                    For example, if you match two cards at 20 seconds, you gain 4000 points (20 x 200). 
                    The bonus is activated / de-activated at random times, so be sure to keep an eye out on the smiley face.
                </li>
                <li>
                    You win the game when you match all pairs.
                </li>
                <li>
                    You lose the game when you run out of time.
                </li>
            </ul>
        </div>`,
    startGame:`
            <article class="game-screen">
                <section class="game-grid">
                    <div class="card-container"><ion-icon name="leaf" class="reveal-card"></ion-icon></div>
                    <div class="card-container"><ion-icon name="leaf" class="reveal-card"></ion-icon></div>
                    <div class="card-container"><ion-icon name="ice-cream" class="reveal-card"></ion-icon></div>
                    <div class="card-container"><ion-icon name="ice-cream" class="reveal-card"></ion-icon></div>
                    <div class="card-container"><ion-icon name="earth" class="reveal-card"></ion-icon></div>
                    <div class="card-container"><ion-icon name="earth" class="reveal-card"></ion-icon></div>
                    <div class="card-container"><ion-icon name="flash" class="reveal-card"></ion-icon></div>
                    <div class="card-container"><ion-icon name="flash" class="reveal-card"></ion-icon></div>
                    <div class="card-container"><ion-icon name="snow" class="reveal-card"></ion-icon></div>
                    <div class="card-container"><ion-icon name="snow" class="reveal-card"></ion-icon></div>
                    <div class="card-container"><ion-icon name="rocket" class="reveal-card"></ion-icon></div>
                    <div class="card-container"><ion-icon name="rocket" class="reveal-card"></ion-icon></div>
                    <div class="card-container"><ion-icon name="headset" class="reveal-card"></ion-icon></div>
                    <div class="card-container"><ion-icon name="headset" class="reveal-card"></ion-icon></div>
                    <div class="card-container"><ion-icon name="fish" class="reveal-card"></ion-icon></div>
                    <div class="card-container"><ion-icon name="fish" class="reveal-card"></ion-icon></div>
                    <div class="time">
                        <ion-icon class="clock" name="time-outline"></ion-icon>
                        <p id="timer">00:30</p>
                    </div>
                    <p class="score">Score: 0</p>
                    <div class="bonus-card"><ion-icon name="happy-outline" class="reveal-card"></ion-icon></div>
                    <div class="btn-restart-grid">
                        <button id='btn-restart-grid' aria-label="Restart Game">Restart</button>
                    </div>    
                </section>
                <button class="btn-restart" aria-label="Restart Game">Restart</button>
                <footer>
                    <button class="btn-main-page" aria-label="Return to main page">&copy; Match Me 2021</button>
                    <div class="social-media-links">
                        <a href="https://www.facebook.com" target="_blank" aria-label="Visit us on Facebook"><ion-icon name="logo-facebook"></ion-icon></a>
                        <a href="https://play.google.com/store/" target="_blank" aria-label="Download our App on Google Play"><ion-icon name="logo-google-playstore"></ion-icon></a>
                        <a href="https://www.twitter.com" target="_blank" aria-label="Visit us on Twitter"><ion-icon name="logo-twitter"></ion-icon></a>
                    </div>
                    <button class="bug-report" aria-label="Report a Bug to us">Report a Bug</button>
                </footer>
            </article>`,
    form:`
        <form class="report-a-bug-form" id="report-a-bug-form">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your name" class="form-input-box" required>

            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your email address" class="form-input-box" required >

            <label for="comment">Comments</label>
            <textarea id="comment" name="comment" cols="24" rows="9" placeholder="Report a bug or send your feedback here" class="comment-box" required></textarea>

            <input type="submit" value="Submit" class="form-submit-button">
        </form>`,
    gameOver: `
        <section class="game-over-container">
            <h1></h1>
            <p class="game-over-score"></p>
            <button class="btn-replay" aria-label="Replay Game">Replay</button>
            <footer>
                <button class="btn-main-page" aria-label="Return to main page">&copy; Match Me 2021</button>
                <div class="social-media-links">
                    <a href="https://www.facebook.com" target="_blank" aria-label="Visit us on Facebook"><ion-icon name="logo-facebook"></ion-icon></a>
                    <a href="https://play.google.com/store/" target="_blank" aria-label="Download our App on Google Play"><ion-icon name="logo-google-playstore"></ion-icon></a>
                    <a href="https://www.twitter.com" target="_blank" aria-label="Visit us on Twitter"><ion-icon name="logo-twitter"></ion-icon></a>
                </div>
                <button class="bug-report" aria-label="Report a Bug to us">Report a Bug</button>
            </footer>
        </section>`,
    formSent: `
        <section class="thank-you-container">
            <h1>Thank You!</h1>
            <p>
                Your comments have been submitted.
                We'll get back to you whenever possible.
            </p>
            <button class="btn-new-game" aria-label="Play New Game">New Game!</button>
        </section>`,
    formError:`
        <section class="thank-you-container">
            <h1>Oh snap, there was an error!</h1>
            <p>
                We didn't get your feedback, error message was:
            </p>
            <p id="submit_error"></p>
            <p>Please try again later.</p>
            <button class="btn-new-game" aria-label="Play New Game">New Game!</button>
        </section>  
    `
};