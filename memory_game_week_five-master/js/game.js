class Card {
    constructor(imgurl, id, backid, idplace) {
        this.isclicked = false;
        this.isdone = false;
        this.imgurl = imgurl;
        this.id = id;
        this.idplace = idplace;
        this.backid = backid;
    }

    rand_img(imgarraycheck) {
        let imgarray = ["ca1", "ca2", "ca3", "ca4", "ca5", "ca6", "ca1", "ca2", "ca3", "ca4", "ca5", "ca6"];

        let rand = Math.floor(Math.random() * 12);
        if (imgarraycheck[rand]) {
            this.imgurl = imgarray[rand];
            this.put_img(rand, imgarray);
            imgarraycheck[rand] = false;
        }
        else {
            this.rand_img(imgarraycheck);
        }
    }

    put_img(rand, imgarray) {
        this.backid.style.backgroundImage = `url("./img/${imgarray[rand]}.jpg")`;
    }
}
class Board {
    constructor(cards) {
        this.cards = cards;
    }
}
`   `


class Game {
    constructor(countwin) {
        this.countwin = 0;
    }
    flipcard(card) {
        card.classList.add("flip");
    }

    Cardclick(event) {
        console.log()
        if (!event.currentTarget.classList.contains("flip")){
        if (isFirst) {
            game.flipcard(event.currentTarget);
            card1 = event.currentTarget;
            console.log(event.currentTarget.children[1].style.backgroundImage);
            cardcheckarr[0] = event.currentTarget.children[1].style.backgroundImage;
            console.log(this);
          
        }
        else {
            game.flipcard(event.currentTarget);
            card2 = event.currentTarget;
            console.log(event.currentTarget.children[1].style.backgroundImage);
            cardcheckarr[1] = event.currentTarget.children[1].style.backgroundImage;
        }
        if ((cardcheckarr[0] !== "") && (cardcheckarr[1] !== "")) {
            game.paircheck(cardcheckarr, card1, card2)
        }
        console.log(cardcheckarr);
        isFirst = !isFirst;
}
    }




    flipcardback(card) {
        card.classList.remove("flip");

    }

    paircheck(cardsarr, card1, card2) {
        cardcheckarr = ["", ""];
        if (cardsarr[0] === cardsarr[1]) {
            console.log("heyyy");
            
            game.countwin++;
            if (game.countwin >= 6){
               let won =  document.getElementById("won")
               won.style.display="block";
               btn.removeEventListener('click',hint)
            }

        }
        else {

            setTimeout(function () {

                game.flipcardback(card1);
                game.flipcardback(card2);


            }, 1000);
            return false;
        }

    }


}
let game = new Game();
let imgarraycheck = [true, true, true, true, true, true, true, true, true, true, true, true, true];
let isFirst = true;
let cards_array = [];
var cardcheckarr = ["", ""];
var card1;
var card2;
let btn = document.getElementById("btn");
for (let i = 0; i <= 11; i++) {
    cards_array[i] = new Card("", document.getElementById("card" + i), document.getElementById("backcard" + i), "card" + i);
    cards_array[i].rand_img(imgarraycheck);
}

 btn.addEventListener('click',hint);
  


function hint (){
    for (let i = 0; i <= 11; i++){
        game.flipcard(cards_array[i].id);
        setTimeout(() => {
            game.flipcardback(cards_array[i].id);
        }, 2000);
    }
}

let winBtn = document.getElementById("winbutton");
winBtn.addEventListener('click',function(){
    location.reload();

});

let board = new Board(cards_array);

let imgarray = ["ca1", "ca2", "ca3", "ca4", "ca5", "ca6", "ca1", "ca2", "ca3", "ca4", "ca5", "ca6"];
$(".card").click(game.Cardclick);





