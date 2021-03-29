export const domTemplates = {
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
                        <button id='btn-restart-grid'>Restart</button>
                    </div>    
                </section>
                <button class="btn-restart">Restart</button>
                <footer>
                    <p>&copy; Match Me 2021</p>
                    <div class="social-media-links">
                        <a href="https://www.facebook.com" target="_blank"><ion-icon name="logo-facebook"></ion-icon></a>
                        <a href="https://play.google.com/store/" target="_blank"><ion-icon name="logo-google-playstore"></ion-icon></a>
                        <a href="https://www.twitter.com" target="_blank"><ion-icon name="logo-twitter"></ion-icon></a>
                    </div>
                    <button class="bug-report">Report a Bug</button>
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
            <button class="btn-replay">Replay</button>
            <footer>
                <p>&copy; Match Me 2021</p>
                <div class="social-media-links">
                    <a href="https://www.facebook.com" target="_blank"><ion-icon name="logo-facebook"></ion-icon></a>
                    <a href="https://play.google.com/store/" target="_blank"><ion-icon name="logo-google-playstore"></ion-icon></a>
                    <a href="https://www.twitter.com" target="_blank"><ion-icon name="logo-twitter"></ion-icon></a>
                </div>
                <button class="bug-report">Report a Bug</button>
            </footer>
        </section>`,
    formSent: `
        <section class="thank-you-container">
            <h1>Thank You!</h1>
            <p>
                Your comments have been submitted.
                We'll get back to you whenever possible.
            </p>
            <button class="btn-new-game">New Game!</button>
        </section>`,
    formError:`
        <section class="thank-you-container">
            <h1>Oh snap, there was an error!</h1>
            <p>
                We didn't get your feedback, error message was:
            </p>
            <p id="submit_error"></p>
            <p>Please try again later.</p>
            <button class="btn-new-game">New Game!</button>
        </section>  
    `
}