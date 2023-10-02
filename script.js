function generatePDF() {
    const inputValue = document.getElementById('inputValue').value;
    const doc = new jsPDF();
    doc.text(`O valor inserido é: ${inputValue}`, 10, 10);
    doc.save('documento.pdf');
}