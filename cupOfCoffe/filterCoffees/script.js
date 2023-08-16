const menu=[

    {
        id: 1,
        title: "Mixed coffee",
        img:
          "https://api.sbux.retter.io/3e898s82a/CALL/Image/get/SBUX-28_720x720.png",
        desc: `Brewed, balanced, dense filter coffee and milk.`,
      },
      {
        id: 2,
        title: "Filter coffee",
        img:
          "https://api.sbux.retter.io/3e898s82a/CALL/Image/get/SBUX-27_720x720.png",
        desc: `Brewed, balanced, intense filter coffee.`,
      },
      {
        id: 3,
        title: "Cold Brew",
        img:
          "https://api.sbux.retter.io/3e898s82a/CALL/Image/get/SBUX-29_720x720.png",
        desc: ` Cold coffee prepared by steeping coarsely ground coffee beans in cold water for 20 hours.`,
      },
      {
        id: 4,
        title: "Cold Brew Latte",
        img:
          "https://api.sbux.retter.io/3e898s82a/CALL/Image/get/SBUX-30_720x720.png",
        desc: `The meeting of cold coffee with milk, prepared by steeping coarsely ground coffee beans in cold water for 20 hours.`,
      }
    ]
   
    let drinksMenu = document.querySelector(".section-center");


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
    pick();
    
    function pick(drink) {
        
    drinksMenu.innerHTML = "";
    menu.forEach((element) => {
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

  