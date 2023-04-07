window.jsPDF = window.jspdf.jsPDF;
function saveNote() {
  const noteContent = document.getElementById("note-content").value;
  localStorage.setItem("note", noteContent);
  alert("Note saved!");
}

function generatePDF() {
  const noteContent = localStorage.getItem("note");
  if (!noteContent) {
    alert("No note found. Please save a note first.");
    return;
  }

  const doc = new jsPDF();
  doc.text(noteContent, 10, 10);
  doc.save("note.pdf");
}
