let done=false;

/*Go to anchor without using <a> that changes style */
function jumpTo(section){
    if (section=='beginning'){
        window.scrollTo(0, 0);
    }
    else{
        var url = document.href;
        location.href = "#"+section;
        history.replaceState(null,null,url);
    }
}

/*Play animation of lottie when called */
function addAnimation(element){
    animation=document.getElementById(element);
    animation.play();
}

/*Pause animation of lottie when called */
function removeAnimation(element){
    animation=document.getElementById(element);
    animation.pause();
}

/*Change the active state of an element using its classlist*/
function changeState(element){
    if (document.getElementById(element).classList.contains('active')){
        document.getElementById(element).classList.remove('active');
    }
    else{
        document.getElementById(element).classList.add('active');
    }
}

/*Go to new page without using <a> that changes style */
function goTo(page){
    window.open(page,"_self");
}

/*Send an email */
function sendMail(){
    var sender=document.getElementById("mailSender").value;
    var name=document.getElementById("nameSurname").value;
    var bodyMel=document.getElementById("bodyMail").value;
    if (sender.length!=0 && name.length!=0 && bodyMel.length!=0){
        console.log('yeah there is');
        var mail = {
            mail_sender:sender,
            from_name:name,
            body:bodyMel,
        };
        emailjs.send('service_eno33v5','template_f0uniy6',mail,'kVvk8vOqvqKT8LZmn')
            .then(function(res){
                console.log("success",res.status);
            })
            document.getElementById("mailSender").value='';
            document.getElementById("nameSurname").value='';
            document.getElementById("bodyMail").value='';
            alert('Votre mail a bien été envoyé, je devrais vous répondre sous peu !');
    }
    else{
        alert('Vous devez compléter tous les champs !');
    }
}

function goToLink(link){
    if (link=='instagram'){
        window.open('https://www.instagram.com/bda_enib/?hl=en',"_self");
    }
    else if(link=='sv'){
        window.open('https://www.instagram.com/seconde_vie_ihh/?hl=en',"_self");
    }
    else if(link=='agenda'){
        window.open('https://lebercailsaintmalo.com/agenda-culturel-evenements');
    }
    else if(link=='baniere'){
        window.open('https://lebercailsaintmalo.com/');
    }
    else if(link=='oldcv'){
        window.open('https://braun238.github.io/');
    }
    else if(link=='ddd'){
        window.open('https://mochaproduction.com/nous-contacter/');
    }
    else if(link=='linkedin'){
        window.open('https://www.linkedin.com/in/camille-clavier-6665371a2/');
    }
}

function changeStateCard(element){
    if (document.getElementById('card'+element).classList.contains('invisibleImage')){
        document.getElementById('card'+element).classList.remove('invisibleImage');
        document.getElementById('title'+element).classList.remove('visible');
        document.getElementById('title'+element).classList.add('invisible');
        document.getElementById('text'+element).classList.remove('visible');
        document.getElementById('text'+element).classList.add('invisible');
    }
    else{
        document.getElementById('card'+element).classList.add('invisibleImage');
        document.getElementById('title'+element).classList.add('visible');
        document.getElementById('title'+element).classList.remove('invisible');
        document.getElementById('text'+element).classList.add('visible');
        document.getElementById('text'+element).classList.remove('invisible');
    }
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function addClassToAll(){
    var barres = document.querySelectorAll('.wvariable');

    for (const barre of barres) {
        barre.classList.add('visible');
    }
}

var intervalId = window.setInterval(function(){
    if (document.getElementById('containerLangues')!=null){
        if (isInViewport(document.getElementById('containerLangues')) && done==false){
            addClassToAll();
            done=true;
        }
    }
  }, 100);

var liste_diapo=[document.getElementById("mocha"),document.getElementById("asvp"),document.getElementById("baril"),document.getElementById("rdv"),document.getElementById("marche")];
var index=0

function next_diapo(sens){
    var current_diapo=liste_diapo[index];
    if (sens=='left'){
        if(current_diapo!=liste_diapo[0]){
            removeoldclasses(current_diapo);

            current_diapo.classList.add('right');
            current_diapo.classList.remove('visible');
            current_diapo.classList.add('invisible');

            document.getElementById('puce'+index).classList.remove('active');

            index--;
            current_diapo=liste_diapo[index];
            removeoldclasses(current_diapo);

            current_diapo.classList.add('right');
            current_diapo.classList.remove('invisible');
            current_diapo.classList.add('visible');

            document.getElementById('puce'+index).classList.add('active');
        }
    }else if(sens=='right'){
        if(current_diapo!=liste_diapo[liste_diapo.length-1]){
            removeoldclasses(current_diapo);

            current_diapo.classList.add('left');
            current_diapo.classList.remove('visible');
            current_diapo.classList.add('invisible');

            document.getElementById('puce'+index).classList.remove('active');

            index++;
            current_diapo=liste_diapo[index];
            removeoldclasses(current_diapo);

            current_diapo.classList.add('left');
            current_diapo.classList.remove('invisible');
            current_diapo.classList.add('visible');

            document.getElementById('puce'+index).classList.add('active');
        }
    }
}

function removeoldclasses(current_diapo){
    if (current_diapo.classList.contains('left')){
        current_diapo.classList.remove('left')
    }
    else if(current_diapo.classList.contains('right')){
        current_diapo.classList.remove('right')
    }
}