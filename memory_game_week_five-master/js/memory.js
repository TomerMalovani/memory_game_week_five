class Card {
    constructor(id,backid, imgUrl, clickd) {
        this.id = id;
        this.imgUrl = imgUrl;
        this.clickd = clickd;
        this.backid = backid;

    }

    flipcard() {


        this.id.addEventListener('click', function () {
            
                    this.classList.add("flip");
                    // let a = switch_card_back.bind(this);
                    // setTimeout(a,1000);

        });

    }
    //  switch_card_back(){
    //     this.classList.remove("flip");
    //      }

    rand_img(imgarraycheck){
        let imgarray = ["ca1","ca2","ca3","ca4","ca5","ca6","ca1","ca2","ca3","ca4","ca5","ca6"];
        
        let rand = Math.floor(Math.random() * 12);
        if (imgarraycheck[rand]){
            this.imgUrl = imgarray[rand];
            this.put_img(rand,imgarray);
            imgarraycheck[rand] = false;
        }
        else{
            this.rand_img(imgarraycheck);
        }
    }

    put_img(rand,imgarray){
        this.backid.style.backgroundImage =`url("./img/${imgarray[rand]}.jpg")`;
    }
    
}

let imgarraycheck = [true,true,true,true,true,true,true,true,true,true,true,true,true];    

let cardsarr = [];
for (let i = 0; i <= 11; i++) {
    cardsarr[i] = new Card(document.getElementById("card" + i),document.getElementById("backcard" + i), "", false);
    cardsarr[i].flipcard();
    cardsarr[i].rand_img(imgarraycheck);

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
// 
// }
// function switch_card_back(){
//     this.classList.remove("flip");
//      }






