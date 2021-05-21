const addNew = document.querySelector("#new-note");
// If some notes already exists
const notes = JSON.parse(localStorage.getItem("present"));
if (notes) {
    notes.forEach(function (note) {
        addNewNote(note);
    });
}

// When we click on Add New +
addNew.addEventListener("click", () => {
    addNewNote();
});
function addNewNote(text = "") {
    const box = document.querySelector(".container");
    const note = document.createElement("div");
    note.classList.add("notes");
    note.innerHTML = `
            <div class="tool">
                <button class="delete"><i class="fas fa-trash-alt fa-2x"></i></button>
            </div>
            <textarea></textarea>
        `;
    box.appendChild(note);
    const textArea = note.querySelector("textarea");
    textArea.value = text;
    const delBtn = note.querySelector(".delete");
    delBtn.addEventListener("click", function () {
        note.remove();
        updateStorage();
    });
    textArea.addEventListener("input", function () {
        updateStorage();
    });
}

// Updating the local Storage when needed
function updateStorage() {
    const allNotes = document.querySelectorAll("textarea");
    let currNotes = [];
    allNotes.forEach(function (note) {
        currNotes.push(note.value);
    });
    localStorage.setItem("present", JSON.stringify(currNotes));
}