class Card {
    constructor(id,imgUrl,clickd){
        this.id = id;
        this.imgUrl = imgUrl;
        this.clickd = clickd;
        
    }
}

let newcardtoshowperzi = new Card("","","");

let cardsarr = [];
for ( let i = 0; i < 11; i++){
    cardsarr[i] = new Card (document.getElementById("card"+i),"",false);
    //cardsarr[i] = document.getElementById("card"+i);
}


// let cards = document.getElementsByClassName("card");
// for(var i =0;i < cards.length;i++){
//     cards[i].id = "card"+i;
//     cards[i] = document.getElementById("card"+i);
    
// }
// let card0 = document.getElementById("card0");



// for(var i =0;i < cards.length;i++){
// cards[i].addEventListener('click',switch_card);
// }
// function switch_card(){
//     this.classList.add("flip");
//     let a = switch_card_back.bind(this);
//     setTimeout(a,1000);
// }
// function switch_card_back(){
//     this.classList.remove("flip");
//      }
 





