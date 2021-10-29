const reviews = [
    {
        id: 1,
        name: "decoration design",
        job: "My Decor",
        img: "Decor 5 (2).png",
        text: "A designer knows when he has reached perfecion not when there is nothing left to add but when there is nothing left to take away. Your even never looked better than with us."
    },
    {
        id: 2,
        name: "MakeUp/MakeOver",
        job: "A Make Up artist",
        img: "Make-Up Image2.jpg",
        text: "Beneath the makeup and behind the smile, I am just a girl who wishes for the world. Come, let's bring out the beauty in you."
    },
    {
        id: 3,
        name: "Hair style",
        job: "hair dressing",
        img: "Braid.jpg",
        text: "Invest in your hair. It is the crown you never take off.  Let's make your hair more beautiful than it ever can be"
    },
    {
        id: 4,
        name: "Leather Sandals",
        job: "Leather Works",
        img: "Leather Work.jpg",
        text: "It's easier to put on a pair of shoes than to wrap the earth in leather. Come, let's beautify ur legs with our hand-made leather."
    },
];
//select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//set starting item
let currentItem = 0;

//load initial item
window.addEventListener("DOMContentLoaded", function() {
    showPerson();
});

//show person based on item

function showPerson(person) {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
    }

    //show next person

    nextBtn.addEventListener("click", function() {
       currentItem++;
       if(currentItem > reviews.length - 1){
           currentItem = 0;
       }
       showPerson(currentItem);
    });

    //show prev person
    prevBtn.addEventListener("click", function() {
        currentItem--;
        if(currentItem < 0) {
            currentItem = reviews.length -1;
        }
        showPerson(currentItem);
     });

     //show random person
     randomBtn.addEventListener("click", function() {
         currentItem = Math.floor(Math.random() * reviews.length);
         showPerson();
     });
