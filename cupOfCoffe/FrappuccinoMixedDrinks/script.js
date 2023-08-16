const menu=[

    {
        id: 1,
        title: "Chocolate Cream Frappuccino",
        category: "Cream-Based", 
        img:
          "https://api.sbux.retter.io/3e898s82a/CALL/Image/get/SBUX-58_720x720.png",
        desc: `Served with milk, chocolate sauce and snow-formed ice, garnished with cream and chocolate sauce.`,
      },
      {
        id: 2,
        title: "Strawberries & Cream Frappuccino",
        category: "Cream-Based", 
        img:
          "https://api.sbux.retter.io/3e898s82a/CALL/Image/get/SBUX-176_720x720.png",
        desc: `Served with milk, strawberry sauce and snow-made ice, complete with cream.`,
      },
      {
        id: 3,
        title: "Chai Cream Frappuccino",
        category: "Cream-Based", 
        img:
          "https://api.sbux.retter.io/3e898s82a/CALL/Image/get/SBUX-60_720x720.png",
        desc: ` Chai tea concentrate containing a mixture of milk, spices and black tea and ice cubes made into snow meet, completed with cream.`,
      },
      {
        id: 4,
        title: "Caramel Cream Frappuccino",
        category: "Cream-Based", 
        img:
          "https://api.sbux.retter.io/3e898s82a/CALL/Image/get/SBUX-55_720x720.png",
        desc: `It is prepared by garnishing with milk, caramel syrup and snow made ice, cream and caramel sauce.`,
      },
      {
        id: 5,
        title: "Java Chip Chocolate Cream Frappuccino",
        category: "Cream-Based", 
        img:
          "https://api.sbux.retter.io/3e898s82a/CALL/Image/get/SBUX-59_720x720.png",
        desc: `The harmony of milk, chocolate sauce, Frappuccino® flakes and ice made into snow with cream and chocolate sauce`,
      },
      {
        id: 6,
        title: "Vanilla Cream Frappuccino",
        category: "Cream-Based", 
        img:
          "https://api.sbux.retter.io/3e898s82a/CALL/Image/get/SBUX-57_720x720.png",
        desc: `The harmony of milk, vanilla syrup and ice with cream flavor`,
      },
      {
        id: 7,
        title: "White Chocolate Mocha Frappuccino",
        category: "Coffee-Based", 
        img:
          "https://api.sbux.retter.io/3e898s82a/CALL/Image/get/SBUX-52_720x720.png",
        desc: ` The harmony of coffee, milk, white chocolate sauce and ice made into snow with cream.`,
      },
      {
        id: 8,
        title: "Mocha Frappuccino",
        category: "Coffee-Based", 
        img:
          "https://api.sbux.retter.io/3e898s82a/CALL/Image/get/SBUX-50_720x720.png",
        desc: `The harmony of coffee, milk, mocha sauce and snow made ice with cream.`,
      },
      {
        id: 9,
        title: "Coffee Frappuccino",
        category: "Coffee-Based", 
        img:
          "https://api.sbux.retter.io/3e898s82a/CALL/Image/get/SBUX-48_720x720.png",
        desc: `Served with a pleasant meeting of coffee and milk with ice turned into snow, decorated with cream.`,
      },
      {
        id: 10,
        title: "Caramel Frappuccino",
        category: "Coffee-Based", 
        img:
          "https://api.sbux.retter.io/3e898s82a/CALL/Image/get/SBUX-47_720x720.png",
        desc: ` It is prepared by garnishing with coffee, milk, caramel syrup and snow made ice, cream and caramel sauce.`,
      },
      {
        id: 11,
        title: "Java Chip Frappuccino",
        category: "Coffee-Based", 
        img:
          "https://api.sbux.retter.io/3e898s82a/CALL/Image/get/SBUX-51_720x720.png",
        desc: `The harmony of coffee, milk, mocha sauce, Frappuccino® flakes and snow made ice with cream and chocolate sauce`,
      },
      {
        id: 12,
        title: "Espresso Frappuccino",
        category: "Coffee-Based", 
        img:
          "https://api.sbux.retter.io/3e898s82a/CALL/Image/get/SBUX-49_720x720.png",
        desc: `Coffee, espresso and milk meet with snow made ice, giving you vitality with every sip.`,
      }
      
    ]

    let btnContainer=document.querySelector(".btn-container");
let drinksMenu = document.querySelector(".section-center");

btnContainer.innerHTML= `
<button id="All" class="btn-item ">All</button>
<button id="Coffee-Based" class="btn-item ">Coffee-Based</button>
<button id="Cream-Based" class="btn-item ">Cream-Based</button>

`
let buttons =document.querySelectorAll("button");
menu.forEach(element => {

    drinksMenu.innerHTML=`
    <div class="menu-items col-lg-6 col-sm-12">
        <img src=${element.img} class="photo">
    <div class="menu-info">
    <div class="menu-title">
      <h4>${element.title}</h4>
    </div>
    <div class="menu-text">${element.desc}</div>

    </div>
    </div>`
});     


function pick(drink) {
    id = drink.target.id;

    let result;
    if (id === "All") {
        result = menu;
    } else {
        result = menu.filter((element) => element.category === id);
    }

    drinksMenu.innerHTML = "";
    result.forEach((element) => {
        drinksMenu.innerHTML += `
        <div class="menu-items col-lg-6 col-sm-12">
            <img src=${element.img} class="photo">
            <div class="menu-info">
                <div class="menu-title">
                    <h4>${element.title}</h4>
                </div>
                <div class="menu-text">
                    ${element.desc}
                </div>
            </div>
        </div>`;
    });
}
  pick({ target: { id: "All" } });
  buttons.forEach(element => element.addEventListener("click", pick))