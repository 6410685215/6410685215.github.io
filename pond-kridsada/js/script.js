function confettiShooter() {
    const element = document.getElementById('e0DQ82qcIov1');
    element.svgatorPlayer.ready(function () {
        // this refers to the player object
        const player = element ? element.svgatorPlayer : {};
        if (player.play) {
            player.play();
        }
    });
}

const tap_hover = document.getElementById('tap-hover');
tap_hover.addEventListener('click', confettiShooter);
tap_hover.addEventListener('mouseover', confettiShooter);