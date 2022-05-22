//1. Define and store variables
const question = document.querySelector('.cardQuestion');
const flipIt = document.querySelector('.cardImage');
const correctBtn = document.querySelector('#correct');
const incorrectBtn = document.querySelector('#incorrect');
const correct = document.querySelector('#corCount');
const incorrect = document.querySelector('#incCount');
let randomTerm;
//end modal
const endModal = document.querySelector('#endModal');
const modalClose = document.querySelector('.close');

//2.object for flashcard content (elements of crim and evidence terms) 
let cardData = {
    ASSAULT: '(1) ATTEMPTED BATTERY or (1) INTENTIONAL CREATION of (2) REASONABLE FEAR in the mind of victim (3) of IMMINENT BODILY HARM',
    BATTERY: '(1) UNLAWFUL (2) APPLICATION OF FORCE to another that causes(3a) BODILY INJURY or (3b) OFFENSIVE TOUCHING',
    MURDER: '(1) Causing the DEATH (2) of ANOTHER (3) with MALICE AFORETHOUGHT',
    LARCENY: '(1) TRESPASSORY (2) TAKING and CARRYING AWAY (3) PROPERTY of another with LAWFUL CUSTODY(4) with INTENT TO KEEP',
    ROBBERY: '(1) LARCENY (2) In PRESENCE or VICINITY of victim (3) Involving FORCE or THREAT OF IMMEDIATE INJURY',
    EMEZZLEMENT: '(1) CONVERSION of another persons property (2) with LAWFUL POSSESSION (3) with INTENT TO DEFRAUD',
    FORGERY: '(1) With INTENT TO DEFRAUD (1a) MAKING (1b) or ALTERING (2) a WRITING (3) so that it is FALSE',
    BURGLARY: '(1) BREAKING and (2) ENTERING (3) a DWELLING of another (4) at NIGHT (5) with INTENT TO COMMIT FELONY INSIDE',
    ACCOMPLICE: '(1a) AIDS or (1b) ENCOURAGES principal (2) with INTENT CRIME BE COMMITTED (3) who is NOT A VICTIM',
    REUNICATION: 'Affirmative defense where defendant must show a SUBSTANTIAL EFFORT to prevent crime.',
    SOLICITATION: '(1) ASKING another to commit a crime with (2) INTENT crime be committed',
    CONSPIRACY: 'Specific intent to (1) Agree (2) Commit crime with an (3) AGREEMENT of 2+ people',
    ATTEMPT: '(1) OVERT ACT beyond preparation that is a (2) SUBSTANTIAL STEP (3) Toward commission of a CRIME',
    HEARSAY: 'An out of court statement offered to prove the truth of the matter asserted ',
    IMPEACHMENT: 'To discredit the testimony of a witness by proving that they have not told the truth or has been inconsistent, by introducing contrary evidence',
    SEIZURE: 'Any exercise of control by a government agent over a person or thing.',
}

//allows me to access the object data like an array
let data = Object.entries(cardData);

//--adding functionality to the correct button--creates an index of false so the 'correct' button can change it to true
for(const card of data){ 
     card[2]= false;
};

//function that populates the question/term on the card randomly. on HTML, it is set to onload.
function getRandomTerm(){
    randomTerm = data[Math.floor(Math.random() * data.length)]
    question.innerHTML = `<h1>${randomTerm[0]}</h1>`;
};

//swap text between term/definition 
function switchText() {
    if(question.innerHTML === `<h1>${randomTerm[0]}</h1>`) {
        question.innerHTML = `<h1>${randomTerm[1]}</h1>`;
    } else {
        question.innerHTML = `<h1>${randomTerm[0]}</h1>`
    }
};

//3. Make the buttons work 

//next button
nextBtn.addEventListener("click", function(e) {
    getRandomTerm();
});

//correct and inccorrect button
correctBtn.addEventListener("click", function(e) {
    correct.innerHTML = (parseInt(correct.innerHTML) + 1)
    randomTerm[2] = true; 
    hideCorrect()
    getRandomTerm()
});

function hideCorrect(){
    if (randomTerm[2] === true) {
        let randomIndex = data.indexOf(randomTerm);
        data.splice(randomIndex, 1); 
        openModal() 
    }
function openModal(){
    if(data.length <= 0){
        endModal.style.display = "block"
        call.innerHTML = `You answered all (${correct.innerHTML}) cards correctly and originally marked ${incorrect.innerHTML} cards as incorrect. Would you like to...`;
        correctBtn.disabled = true;
        incorrectBtn.disabled = true;
        }
    }
};

incorrectBtn.addEventListener("click", function(e) {
    incorrect.innerHTML = (parseInt(incorrect.innerHTML) + 1)
    getRandomTerm()
});

//4. How to end the session

//end menu
modalClose.onclick = function() {
    endModal.style.display = "none";
};



//keepng this so I can re-introduce it when I add more functioanllity to this app. 

// window.onclick = function(e) {
//     if (e.target == endModal) {
//       endModal.style.display = "none";
//     }
// }; 