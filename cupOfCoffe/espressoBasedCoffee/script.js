const menu=[

    {
        id: 1,
        title: "Cappuccino",
        category: "Cappuccinos", 
        img:
          "https://api.sbux.retter.io/3e898s82a/CALL/Image/get/SBUX-19_720x720.png",
        desc: `Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.`,
      },
      {
        id: 2,
        title: "Iced Cappuccino",
        category: "Cappuccinos", 
        img:
          "https://api.sbux.retter.io/3e898s82a/CALL/Image/get/SBUX-20_720x720.png",
        desc: `A delightful meeting of cold milk foam, espresso and sugar syrup added on ice.`,
      },
      {
        id: 3,
        title: "Flat White",
        category: "Lattes", 
        img:
          "https://api.sbux.retter.io/3e898s82a/CALL/Image/get/SBUX-5_720x720.png",
        desc: `Latte with latte art, prepared with extra espresso for a more intense coffee experience.`,
      },
      {
        id: 4,
        title: "Restricted White",
        category: "Lattes", 
        img:
          "https://api.sbux.retter.io/3e898s82a/CALL/Image/get/SBUX-6_720x720.png",
        desc: `An elegant touch with special ristretto espresso and latte art to expertly heated milk.`,
      },
      {
        id: 5,
        title: "Iced Caffe Latte",
        category: "Lattes", 
        img:
          "https://api.sbux.retter.io/3e898s82a/CALL/Image/get/SBUX-4_720x720.png",
        desc: `Rich espresso, cold milk and ice meet with cold coffee lovers.`,
      },
      {
        id: 6,
        title: "Coffee with milk",
        category: "Lattes", 
        img:
          "https://api.sbux.retter.io/3e898s82a/CALL/Image/get/SBUX-3_720x720.png",
        desc: `Balanced blend of rich espresso, steamed velvety milk and milk foam.`,
      },
      {
        id: 7,
        title: "Caramel Macchiato",
        category: "Macchiatos", 
        img:
          "https://api.sbux.retter.io/3e898s82a/CALL/Image/get/SBUX-16_720x720.png",
        desc: `Milk carefully heated with steam on vanilla syrup, milk foam and a touch of espresso are served with a caramel sauce.`,
      },
      {
        id: 8,
        title: "Iced Caramel Macchiato",
        category: "Macchiatos", 
        img:
          "https://api.sbux.retter.io/3e898s82a/CALL/Image/get/SBUX-17_720x720.png",
        desc: `Served with vanilla syrup, cold milk, ice, espresso and caramel sauce.`,
      },
      {
        id: 9,
        title: "Latté",
        category: "Macchiatos", 
        img:
          "https://api.sbux.retter.io/3e898s82a/CALL/Image/get/SBUX-15_720x720.png",
        desc: `An espresso classic that comes out with a balanced combination of steamed velvety milk and the delicious espresso flavor poured slowly over it.`,
      },
      {
        id: 10,
        title: "Iced Caffe Mocha",
        category: "Mochas", 
        img:
          "https://api.sbux.retter.io/3e898s82a/CALL/Image/get/SBUX-12_720x720.png",
        desc: `The flavor, where espresso, mocha sauce (chocolate sauce), cold milk and pieces of ice meet, is completed with cream.`,
      },
      {
        id: 11,
        title: "Mocha coffee",
        category: "Mochas", 
        img:
          "https://api.sbux.retter.io/3e898s82a/CALL/Image/get/SBUX-11_720x720.png",
        desc: `Espresso is served with mocha sauce (chocolate sauce) and steam-heated milk, complete with cream.`,
      },
      {
        id: 12,
        title: "Iced White Chocolate Mocha",
        category: "Mochas", 
        img:
          "https://api.sbux.retter.io/3e898s82a/CALL/Image/get/SBUX-14_720x720.png",
        desc: `Espresso is served with white chocolate sauce, cold milk and ice, garnished with cream.`,
      },
      {
        id: 13,
        title: "White Chocolate Mocha",
        category: "Mochas", 
        img:
          "https://api.sbux.retter.io/3e898s82a/CALL/Image/get/SBUX-13_720x720.png",
        desc: `Espresso, white chocolate sauce and steam-heated milk coffee met for sweet lovers and was decorated with cream.`,
      },
      {
        id: 14,
        title: "Macchiato Espresso",
        category: "Espressos", 
        img:
          "https://api.sbux.retter.io/3e898s82a/CALL/Image/get/SBUX-24_720x720.png",
        desc: `Espresso with a touch of steam-heated milk foam.`,
      },
      {
        id: 15,
        title: "Espresso with cream",
        category: "Espressos", 
        img:
          "https://api.sbux.retter.io/3e898s82a/CALL/Image/get/SBUX-25_720x720.png",
        desc: `Espresso with caramel sweetness garnished with cream.`,
      },
      {
        id: 16,
        title: "Espresso",
        category: "Espressos", 
        img:
          "https://api.sbux.retter.io/3e898s82a/CALL/Image/get/SBUX-23_720x720.png",
        desc: `Espresso with caramel notes and rich flavor.`,
      },
      {
        id: 17,
        title: "Americano Coffe",
        category: "Americanos", 
        img:
          "https://api.sbux.retter.io/3e898s82a/CALL/Image/get/SBUX-21_720x720.png",
        desc: `Intense espresso flavor diluted with hot water.`,
      },
      {
        id: 18,
        title: "Iced Americano Coffe",
        category: "Americanos", 
        img:
          "https://api.sbux.retter.io/3e898s82a/CALL/Image/get/SBUX-22_720x720.png",
        desc: `Iced presentation of intense espresso flavor diluted with water.`,
      }
      
        ];

let btnContainer=document.querySelector(".btn-container");
let drinksMenu = document.querySelector(".section-center");

btnContainer.innerHTML= `
<button id="All" class="btn-item ">All</button>
<button id="Lattes" class="btn-item ">Lattes</button>
<button id="Americanos" class="btn-item ">Americanos</button>
<button id="Macchiatos" class="btn-item ">Macchiatos</button>
<button id="Mochas" class="btn-item ">Mochas</button>
<button id="Cappuccinos" class="btn-item ">Cappuccinos</button>
<button id="Espressos" class="btn-item ">Espressos</button>
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