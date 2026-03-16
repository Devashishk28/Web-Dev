const buttons = document.querySelectorAll('button');
const names = document.querySelectorAll('h3');

buttons.forEach((btn, index) => {

    btn.addEventListener('click', () => {

        btn.innerHTML = "Sending...";

        setTimeout(() => {

            btn.innerHTML = "Req Sent";
            btn.style.opacity = "0.5";

            // fade the name
            names[index].style.opacity = "0.5";
            btn.disabled=true;
        }, 1000);

    });

});
