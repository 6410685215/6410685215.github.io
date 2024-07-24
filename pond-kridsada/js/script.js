const confetti_audio = new Audio('audio/Voicy_Confetti Sound effect.mp3');
const element = document.getElementById('e0DQ82qcIov1');

function confettiShooter() {
    element.svgatorPlayer.ready(function () {
        // this refers to the player object
        const player = element.svgatorPlayer;
        const audio = confetti_audio;
        console.log(player.isPlaying);
        if (!player.isPlaying) {
            audio.play();
            player.play();
        }
    });
}

const tap_hover = document.getElementById('tap-hover');
tap_hover.addEventListener('click', confettiShooter);
tap_hover.addEventListener('mouseover', confettiShooter);