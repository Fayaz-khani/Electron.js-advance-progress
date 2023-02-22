

document.addEventListener('DOMContentLoaded', async()=>{
    let names = window.api.getNames();

    let divNames = document.getElementById("names");
    let nameString = names.map((elem) => {
    return elem.id;
    }).join("<br />");
    divNames.innerHTML = nameString;
})