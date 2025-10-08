let themeButton = document.getElementById('theme-button');
const rsvpButton = document.getElementById('rsvp-button');
const teamImg = document.getElementById('team-img');
const modalImage = document.getElementById('modal-image');
var scaleFactor = 1;

const changeMode = () => {
    document.body.classList.toggle("dark-mode");
}

const addRsvp = (player) => {
    event.preventDefault();
    const rsvpCount = document.getElementById('rsvp-count');
    let currentCount = parseInt(rsvpCount.textContent);
    const participants = document.querySelector('.rsvp-participants');
    let txt = document.createElement('p');
    txt.innerText = "User " + player.usn + " has RSVPed for COA!";
    participants.appendChild(txt); 
    rsvpCount.textContent = currentCount + 1;
}

const toggleModal = (player) => {
    let modal = document.querySelector('.modal');
    let modal_text = document.getElementById('modal-text');
    
    modal.style.display = "flex";
    
    modal_text.innerText="Thank you for showing interest in the next COA, user " + player.usn + "! Maybe we can get a bigger budget now!"
    
    let intervalId=setInterval(animateImage, 500);
   
    setTimeout(() => {
        modal.style.display = "none";
        clearInterval(intervalId);
    },5000);
    
}

const validateForm = () => {
    event.preventDefault();
    var rsvpInputs = document.getElementById("rsvp-form").elements;

    let player = {
    usn: rsvpInputs[0].value,
    uid: rsvpInputs[1].value,
    region: rsvpInputs[2].value
    };

    let containsErrors = false;

    if(rsvpInputs[1].value.length<6){
        containsErrors = true;
    }

    if(containsErrors){
        rsvpInputs[1].classList.add("error");
    }else{
        rsvpInputs[1].classList.remove("error");
        addRsvp(player);
        toggleModal(player);
        for(let i=0;i<2;i++){
            rsvpInputs[i].value="";
        }
    }
    
}

const animateImage = () =>{
    if (scaleFactor === 1){
        scaleFactor = 2;
    }else{
        scaleFactor=1
    };

    modalImage.style.transform = 'scale(' + scaleFactor + ')';
}

const teamMotto = () =>{
    let mottoModal = document.getElementById('quote-modal');
    let mottoText = document.getElementById('motto');
    mottoModal.style.display='flex';
}


themeButton.addEventListener('click', changeMode);
rsvpButton.addEventListener('click', validateForm);
//rsvpButton.addEventListener('click', addRsvp);



