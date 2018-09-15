let currentQuestion = 0;
let score = 0;
let element = document.querySelector(".question");
let resultBox = document.getElementById("result-box");
let radios = document.getElementsByTagName("input");
let alert = document.getElementById("alert");

alert.style.display = 'block';
    setTimeout(function(){
        alert.remove();
        return;
    },3000);


function populate() {
    for(let i = 0; i <= questions.length; i++){
        element.innerHTML = questions[currentQuestion].question;
        for(let j = 0; j < questions[currentQuestion]["choices"].length; j++){
            let option = document.getElementById("choice" + j);
            option.innerHTML = questions[currentQuestion]["choices"][j];
        } 
        getQuote(); //last question in quiz shows undefined
    }
}



function nextQuestion() {

    let selectedOption = document.querySelector("input[type=radio]:checked");

    let answer = selectedOption.value;
    if(questions[currentQuestion]["answer"] == answer) {
        console.log("goodjob");
        score+=1;
        currentQuestion++;
    } else {
        currentQuestion++;
    }

    selectedOption.checked = false;

    

    if(currentQuestion === questions.length) {
        let button2 = document.getElementById("button2");
        document.querySelector(".quiz-box").style.display = "none";
        resultBox.style.display = 'block';
        document.querySelector(".end-result").innerHTML = "Total Score: " + score;
        document.getElementById("button1").style.display = 'none';
        button2.style.display = 'block';
        if(score === questions.length) {
            button2.childNodes[0].innerHTML = "Ulric's Fury! All correct! Again?";
            button2.childNodes[0].style.fontSize = '15px';
        } else if(score === 0) {
            button2.childNodes[0].innerHTML = "Heretic! Seekst thou retribution?";
            button2.childNodes[0].style.fontSize = '15px';
        }
        return;
    }
    populate();
    
}

function retreat() {
    currentQuestion--;
    populate();
}


function goAgain() {
    window.location.reload();
}

function getQuote() {
    let randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById("quote-text").innerHTML = quotes[randomNumber];
}


populate();

//  To do
//  Random 5 questions out of 20 total










