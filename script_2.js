let captcha_box = document.querySelector("#captcha-box");
let refresh = document.querySelector(".captcha-refresh");

const alphabetArray = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];
function generate_captcha() {
    for (let i = 0; i < 5; i++) {
        let random_captch = alphabetArray[Math.floor(Math.random() * alphabetArray.length)];


        captcha_box.innerText += ` ${random_captch}`;
        captcha_box.style.fontSize = "30px";

    }
}
generate_captcha();

refresh.addEventListener("click", () => {
    captcha_box.innerText = "";

});

let submit = document.querySelector("#check_captcha");

submit.addEventListener("click", () => {
    const check = document.querySelector(".preview").value.split('').join(' ');
    console.log("done")
    if (check === captcha_box.innerText) {
        console.log(true)
        alert("Captcha Entered is valid ");
    }
    else if (check === "") {
        alert("Please Enter valid captcha !")
    }
    else {
        alert("Entered Captcha is Invalid !");
        location.reload();
    }
})

function show_password() {
    let pass = document.querySelector("#password");
    console.log("password area")
    if (pass.type === "password") {
        pass.type = "text";
    }
    else {
        pass.type = "password";
    }

}
