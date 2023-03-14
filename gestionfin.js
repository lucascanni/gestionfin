function validate(elem, compareCbk) {
    if (!compareCbk(elem.value)) {
        elem.classList.add("invalid");
        return false;
    } 
    elem.classList.remove("invalid");
    return true;
}

function validateDate() {
    let elemDate = document.querySelector("#date");
    return validate(elemDate, (value) => value !== "");
}

function validateMontant() {
    let elemMontant = document.querySelector("#montant");
    return validate(elemMontant, (value) => +value !== 0);
}

function validateType() {
    let elemType = document.querySelector("#type");
    return validate(elemType, (value) => value !== "");
}

function initData() {
    const data = localStorage.getItem("data");
    if (!data) {
        localStorage.setItem("data", JSON.stringify([]));
    }
    afficheData();
    return JSON.parse(data);
}

function afficheData() {
    const data = JSON.parse(localStorage.getItem("data"));
    const tBodyElem = document.querySelector("#depenses > tbody");
    tBodyElem.innerHTML = "";
    console.log(data);
    data.forEach((depense, index) => {
        tBodyElem.appendChild(rowFrom(depense, index)); 
        
    });
}

function rowFrom(depense, index) {
    const rowElem = document.createElement("tr");
    const idCell = document.createElement("td");
    const dateCell = document.createElement("td");
    const typeCell = document.createElement("td");
    const montantCell = document.createElement("td");
    const deleteCell = document.createElement("td");

    idCell.innerText = index;
    dateCell.innerText = depense.date;
    typeCell.innerText = depense.type;
    montantCell.innerText = depense.montant;
    deleteCell.appendChild(deleteButton(index));

    rowElem.appendChild(idCell);
    rowElem.appendChild(dateCell);
    rowElem.appendChild(typeCell);
    rowElem.appendChild(montantCell);
    rowElem.appendChild(deleteCell);

    return rowElem;
}

function deleteButton(index){
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Supprimer";
    deleteBtn.addEventListener("click", () => deleteData(index));
    return deleteBtn;
}

function deleteData(index){
    const data = JSON.parse(localStorage.getItem("data"));
    data.splice(index, 1);
    localStorage.setItem("data", JSON.stringify(data));
    afficheData();
}

function saveData(){
    const data = initData();

    const type = document.querySelector("#type").selectedOptions[0].value;
    const montant = +document.querySelector("#montant").value;
    const date = document.querySelector("#date").value;

    if(validateType() && validateMontant() && validateDate()) {
        data.push({
            date,
            type,
            montant
        });
    
        localStorage.setItem("data", JSON.stringify(data));
        console.log(localStorage.getItem("data"));
    }
    afficheData();
    
}