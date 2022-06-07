import "./style.css";
const button = document.getElementById("json-btn");
const area_data = document.getElementById("area-data");
const empty_block = document.getElementsByClassName("block")[0];
button.addEventListener("click", ()=>{
    fetch("http://localhost:3000/contacts").then(response => response.json()).then(json => {
        for (let item of json) {
            let block = empty_block.cloneNode(true);
            block.id = `block-${item.id}`;
            block.classList.remove("empty");
            block.querySelector("#block-name").innerHTML = item.name;
            block.querySelector("#block-email").innerHTML = item.email;
            block.querySelector("#block-phone").innerHTML = item.phone;
            area_data.appendChild(block);
        }
    });
});