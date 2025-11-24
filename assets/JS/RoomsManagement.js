// zone access rules
const zoneAccess = {
    conference: "all",
    reception: ["Réceptionniste", "Manager","Nettoyage"],
    serveurs: ["Technicien-IT", "Manager","Nettoyage"],
    securite: ["Agent-sécurité", "Manager","Nettoyage"],
    personnel: "all",
    // archives: "all_except_Nettoyage"
    archives: "only_manager"
};


// Check access
function canEnter(worker, zone) {
    const rule = zoneAccess[zone];

    if (rule === "all") return true;
    // if (rule === "all_except_Nettoyage") return worker.role !== "Nettoyage";
    if (rule === "only_manager") return worker.role === "Manager";
    if (Array.isArray(rule)) return rule.includes(worker.role);

    return false;
}


// Open selector popup
let selectedZone = null;

document.querySelectorAll(".zone-add").forEach(btn => {
    btn.addEventListener("click", (e) => {
        selectedZone = e.target.dataset.zoneTarget;
        openAssignPopup(selectedZone);
    });
});


function openAssignPopup(zone) {
    const overlay = document.getElementById("assignOverlay");
    const listDiv = document.getElementById("workerList");
    listDiv.innerHTML = "";

    // Get workers who are unassigned + allowed
    const available = allWorkers.filter(workerX =>
        workerX.zone === null && canEnter(workerX, zone)
    );

    if (available.length === 0) {
        listDiv.innerHTML = `<p style="color:red;">Aucun employé disponible</p>`;
    }

    available.forEach(worker => {
        const item = document.createElement("div");
        item.className = "worker-item";

        item.innerHTML = `
            <span>${worker.name} → ${worker.role}</span>
            <button onclick="assignWorker(${worker.id}, '${zone}')" style="color:white; background-color:green; font-weight:10px;">✔</button>
        `;

        listDiv.appendChild(item);
    });

    overlay.style.display = "flex";
}


function closeAssignPopup() {
    document.getElementById("assignOverlay").style.display = "none";
}


// Assign worker to zone
function assignWorker(id, zone) {
    const worker = allWorkers.find(workerX => workerX.id === id);
    if (!worker) return;

    // set zone
    worker.zone = zone;

    // create UI card inside zone
    const list = document.querySelector(`[data-zone-list="${zone}"]`);

    const li = document.createElement("li");
    li.className = "zone-worker";
    li.setAttribute("data-worker-id", id);

    li.innerHTML = `
    <div style="padding : 5px; width:fit-content; background-color: white;  border: 4px solid yellow; display:flex; flex-direction:row; margin-bottom: 10px;"> 
            <img src="${worker.photo}" style="width: 48px; height: 48px; border-radius: 50%;">
    
            <p> ${worker.name}   </p>

            <span class="remove-worker" style="color : red; background-color: white;  cursor: pointer;" onclick="removeWorker(${id}, '${zone}')">✖</span>
       </div>
       `;

    list.appendChild(li);

    closeAssignPopup();
}



// Remove worker from zone
function removeWorker(id, zone) {
    const worker = allWorkers.find(workerX => workerX.id === id);
    if (!worker) return;

    worker.zone = null; // unassign

    // remove from UI
    const li = document.querySelector(`[data-zone-list="${zone}"] li[data-worker-id="${id}"]`);
    if (li) li.remove();
}
