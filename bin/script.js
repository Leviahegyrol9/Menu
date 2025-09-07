const lsSoup = localStorage.getItem("soup");
const lsMain = localStorage.getItem("main");
const lsDessert = localStorage.getItem("dessert");

const soupRow = document.getElementById("soup");
const mainRow = document.getElementById("main");
const dessertRow = document.getElementById("dessert");

if (lsSoup && lsMain && lsDessert) {
    soupRow.innerHTML = lsSoup;
    mainRow.innerHTML = lsMain;
    dessertRow.innerHTML = lsDessert;
}
else Generate();

function Generate(option) {
    fetch("https://leviahegyrol9.github.io/Menu/data/menu.json")
    .then(response => response.json())
    .then(data => {
    
    switch (parseInt(option)){
        case 1:
            var soup = data.levesek[Math.floor(Math.random() * data.levesek.length)];
            soupRow.innerHTML = `<b>Leves:</b> ${soup}`;
            Save(1);
            break;
        case 2:
            var main = data.foetelek[Math.floor(Math.random() * data.foetelek.length)];
            mainRow.innerHTML = `<b>Főétel:</b> ${main}`;
            Save(2);
            break;
        case 3:
            var dessert = data.desszertek[Math.floor(Math.random() * data.desszertek.length)];
            dessertRow.innerHTML = `<b>Desszert:</b> ${dessert}`;
            Save(3);
            break;
        default:
            var soup = data.levesek[Math.floor(Math.random() * data.levesek.length)];
            var main = data.foetelek[Math.floor(Math.random() * data.foetelek.length)];
            var dessert = data.desszertek[Math.floor(Math.random() * data.desszertek.length)];

            soupRow.innerHTML = `<b>Leves:</b> ${soup}`;
            mainRow.innerHTML = `<b>Főétel:</b> ${main}`;
            dessertRow.innerHTML = `<b>Desszert:</b> ${dessert}`;

            Save();
    }
    })
    .catch(error => alert(`Hiba történt: ${error}`));
}

function Save(food){
    switch (parseInt(food)){
        case 1:
            localStorage.setItem("soup", soupRow.innerHTML);
            break;
        case 2:
            localStorage.setItem("main", mainRow.innerHTML);
            break;
        case 3:
            localStorage.setItem("dessert", dessertRow.innerHTML);
            break;
        default:
            localStorage.setItem("soup", soupRow.innerHTML);
            localStorage.setItem("main", mainRow.innerHTML);
            localStorage.setItem("dessert", dessertRow.innerHTML);
    }
}