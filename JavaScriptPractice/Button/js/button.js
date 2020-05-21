var btn = document.createElement("Button");//Creating a button

btn.innerHTML = "0";//Button displays 0 initially
btn.id = "btn";//Give it an id
document.body.appendChild(btn);

btn.onclick = function() {
    btn.innerHTML++;//Displays no of clicks on the button
}