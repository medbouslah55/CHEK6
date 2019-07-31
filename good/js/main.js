function bold() {
    event.preventDefault();
    var ban = document.getElementById("txt");
    if (ban.style.fontWeight != "bold") {

        ban.style.fontWeight = 'bold';
    } else {
        ban.style.fontWeight = 'normal';
    }
}
function ital() {
    event.preventDefault();
    var ban = document.getElementById("txt");
    if (ban.style.fontStyle != "italic") {

        ban.style.fontStyle = 'italic';
    } else {
        ban.style.fontStyle = 'normal';
    }
}
function under() {
    event.preventDefault();
    var ban = document.getElementById("txt");
    if (ban.style.textDecoration != "underline") {
        ban.style.textDecoration = 'underline';
    } else {
        ban.style.textDecoration = 'none';
    }
}
function sizee() {
    var ban = document.getElementById("txt");
    event.preventDefault();
    ban.style.fontSize = document.getElementById("sz").value;

}
function font() {
    event.preventDefault();
    var ban = document.getElementById("txt");
    ban.style.fontFamily = document.getElementById("family").value;

}
$(".ta").mouseenter(function () {

    $(this).css("opacity", "0.5");
    $(".tt").show();
})
$(".ta").mouseleave(function () {

    $(this).css("opacity", "1");
    $(".tt").hide();
})
console.log($("viewa"))



$(".tb").mouseenter(function () {

    $(this).css("opacity", "0.5");
    $(".yy").show();
})
$(".tb").mouseleave(function () {

    $(this).css("opacity", "1");
    $(".yy").hide();
})




$(".tc").mouseenter(function () {

    $(this).css("opacity", "0.5");
    $(".uu").show();
})
$(".tc").mouseleave(function () {

    $(this).css("opacity", "1");
    $(".uu").hide();
})



var firebaseConfig = {
    apiKey: "AIzaSyA1KZsMzbxzxzf5Ix0X6KFMxwSLU9uyTuI",
    authDomain: "medmycode-35d45.firebaseapp.com",
    databaseURL: "https://medmycode-35d45.firebaseio.com",
    projectId: "medmycode-35d45",
    storageBucket: "",
    messagingSenderId: "578773811760",
    appId: "1:578773811760:web:e1fcbb6b0a3e7b0d"
};

firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref("medmycode-35d45");
function submitForm(e) {
    e.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var message = document.getElementById('message').value;
    saveMessage(name, email, password, message);
}


document.getElementById('contactForm').addEventListener('submit', submitForm);
function saveMessage(name, email, password, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        password: password,
        message: message
    });
}










