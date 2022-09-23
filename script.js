x = 1;
function carousel() {
    x++;
    document.documentElement.style.backgroundImage = "url('img/CondeNasty_" + x + ".jpg')";
    if (x == 51) x = 0;
}