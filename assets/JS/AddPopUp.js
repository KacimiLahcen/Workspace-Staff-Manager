function openPopup(){
  let open = document.getElementById("overlay");
  open.style.display = "flex";
}

function closePopup(){
  let close = document.getElementById("overlay");
  close.style.display = "none";
}



let expCount = 1;

function addExperience(){
  const box = document.createElement("div");
  box.className = "exp-box";
  box.innerHTML = `
    <span class="remove-exp" onclick="this.parentNode.remove()">×</span>
    <strong>Expérience ${expCount++}</strong><br>
    <input placeholder="Entreprise">
    <input placeholder="Poste">
    <input placeholder="Durée : (exemple: 2022-2024)">
  `;
  document.getElementById("expContainer").appendChild(box);
}