function printMenus(menu) {
    printAllMenusList(menu);
    printAllVegMenusList(menu);
    printAllNonVegMenusList(menu);
}

// All Menus List
function printAllMenusList(menu) {
    const allmenusElement = document.getElementById("allmenus");
    menu.forEach(menuObj => {
        frameMenuList(allmenusElement, menuObj)
    });
}

// Veg Menus
function printAllVegMenusList(menu) {
    const vegMenuElement = document.getElementById("vegmenus");
    const vegOptions = menu.filter(option => option.isVeg === true);
    vegOptions.forEach(vegOption => {
        frameMenuList(vegMenuElement, vegOption)
    });
}

// Non Veg Menus
function printAllNonVegMenusList(menu) {
    const nonVegMenuElement = document.getElementById("nonvegmenus");
    const nonVegOptions = menu.filter((option) => {
        return option.isVeg === false;
    });
    nonVegOptions.forEach(nonVegOption => {
        frameMenuList(nonVegMenuElement, nonVegOption)
    });
}

function frameMenuList(menuElement, option) {
    let dish = document.createElement("li");
    dish.textContent = option.name;
    menuElement.appendChild(dish);
}

const menu = [
    {
        name: "paneer tikka",
        isVeg: true
    },
    {
        name: "chicken masala",
        isVeg: false
    },
    {
        name: "mushroom kurma",
        isVeg: true
    }
];

printMenus(menu);