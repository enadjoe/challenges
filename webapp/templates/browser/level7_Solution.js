var buttons = document.getElementsByTagName('button');

for (i=0;i<buttons.length+1;i=i+1) {
    if (buttons[i].innerText != 'Home' && buttons[i].style.backgroundColor) buttons[i].click()

}