var infos=document.getElementById("containerCardsInfos");
var infosappeared=false;
var happened=false;

var isVisibleDrinks = window.setInterval(function(){
    if (infos){
        const rect = infos.getBoundingClientRect();
        if(rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth) && !infosappeared){
                infosappeared=true;
                for(let i=1;i<=infos.childElementCount;i++){
                    document.getElementById("cardInfos"+i).style.animation='1s appear ease-in-out forwards';
                    document.getElementById("cardInfos"+i).style.animationDelay=0.5*i+'s';
                }
                clearInterval(isVisibleDrinks);
            }
    }
},500);

var categoryDrink=0;
var currentPage=0;

var soft=[["beige","Coca-Cola","1€ la cannette",""],["noir","Coca-Cola Cherry","1€ la cannette",""],["beige","Coca-Cola Zero","1€ la cannette",""],["noir","Schweppes","1€ la cannette",""],["beige","Fanta Orange","1€ la cannette",""],["noir","Fanta Citron","1€ la cannette",""],["beige","Ice Tea","1€ la cannette",""],["noir","Oasis Tropical","1€ la cannette",""],["beige","Oasis PCF","1€ la cannette",""],["noir","Perrier","1€ la cannette",""],["beige","Redbull","1€ la cannette",""]];
var champagne=[["beige","Brut","18€ la bouteille",""],["noir","Demi-Sec","18€ la bouteille",""],["beige","Prestige","23€ la bouteille",""]];
var bieres=[["beige","Blonde Bio","2€ le demi ou 4€ la pinte",""],["noir","IPA","2€ demi ou 4€ la pinte",""]];

var drinks=[soft,champagne,bieres];

function changeCategoryDrink(value){
    document.getElementById("categoryDrink"+categoryDrink).classList.remove("active");
    categoryDrink=value;
    document.getElementById("categoryDrink"+categoryDrink).classList.add("active");
    currentPage=0

    let left=document.createElement("div");
    left.classList.add("leftDrinks");
    left.classList.add("parent");

    let bottle=document.createElement("div");
    bottle.classList.add("bottle");
    bottle.id=drinks[categoryDrink][currentPage][1].replace(/ /g,'');

    let circle=document.createElement("div");
    circle.classList.add("circleDrink");
    circle.classList.add(drinks[categoryDrink][0][0]);

    left.appendChild(bottle);
    left.appendChild(circle);        

    let right=document.createElement("div");
    right.classList.add("rightDrinks");

    let nomdrink=document.createElement("div");
    nomdrink.classList.add("nomDrink");

    let prixDrink=document.createElement("div");
    prixDrink.classList.add("prixDrink");

    let descriptiondrink=document.createElement("div");
    descriptiondrink.classList.add("descriptionDrink");

    nomdrink.innerHTML=drinks[categoryDrink][0][1];
    prixDrink.innerHTML=drinks[categoryDrink][0][2];
    descriptiondrink.innerHTML=drinks[categoryDrink][0][3];

    right.appendChild(nomdrink);
    right.appendChild(prixDrink);
    right.appendChild(descriptiondrink);

    document.getElementById("containerDrinks").innerHTML="";
    document.getElementById("containerDrinks").appendChild(left);
    document.getElementById("containerDrinks").appendChild(right);
}

function nextPage(value){

    let left=document.createElement("div");
    left.classList.add("leftDrinks");
    left.classList.add("parent");

    let bottle=document.createElement("div");
    bottle.classList.add("bottle");

    let circle=document.createElement("div");
    circle.classList.add("circleDrink");

    left.appendChild(bottle);
    left.appendChild(circle)        

    let right=document.createElement("div");
    right.classList.add("rightDrinks");

    let nomdrink=document.createElement("div");
    nomdrink.classList.add("nomDrink");

    let prixDrink=document.createElement("div");
    prixDrink.classList.add("prixDrink");

    let descriptiondrink=document.createElement("div");
    descriptiondrink.classList.add("descriptionDrink");

    if(currentPage+1>=drinks[categoryDrink].length && value==1){
        currentPage=0;
    }
    else if(value==1){
        currentPage+=1;
    }
    else if(currentPage==0 && value==-1){
        currentPage=drinks[categoryDrink].length-1
    }
    else{
        currentPage-=1;
    }

    circle.classList.add(drinks[categoryDrink][currentPage][0]);
    
    nomdrink.innerHTML=drinks[categoryDrink][currentPage][1];
    prixDrink.innerHTML=drinks[categoryDrink][currentPage][2];
    descriptiondrink.innerHTML=drinks[categoryDrink][currentPage][3];

    right.appendChild(nomdrink);
    right.appendChild(prixDrink);
    right.appendChild(descriptiondrink);
    bottle.id=drinks[categoryDrink][currentPage][1].replace(/ /g,'');

    document.getElementById("containerDrinks").innerHTML="";
    document.getElementById("containerDrinks").appendChild(left);
    document.getElementById("containerDrinks").appendChild(right);
}

function goTo(link){
    window.open(link, "_self");
}