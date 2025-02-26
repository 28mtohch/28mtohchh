document.body.addEventListener("click", function() {
    let music = document.getElementById("bg-music");
    if (music.paused) {
        music.play();
    }
});

function toggleMusic() {
    let music = document.getElementById("bg-music");
    let button = document.getElementById("music-button");
    
    if (music.paused) {
        music.play();
        button.textContent = "🔇 ปิดเพลง";
    } else {
        music.pause();
        button.textContent = "🔊 เปิดเพลง";
    }
}

function showMessage() {
    document.getElementById("message").style.display = "block";
}
