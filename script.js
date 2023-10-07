function generatePDF() {
    const fullName = document.getElementById('fullName').value;
    const location = document.getElementById('location').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const email = document.getElementById('email').value;
    const careerObjective = document.getElementById('careerObjective').value;
    const aboutYou = document.getElementById('aboutYou').value;
    const schooling = document.getElementById('schooling').value;
    const professionalExperience = document.getElementById('professionalExperience').value;

    const doc = new jsPDF();
    doc.setFont('courier', 'normal');
    doc.setFontSize(11);

    // Adiciona o texto com quebras de linha
    const splitName = doc.splitTextToSize(fullName, 190); // Largura máxima para quebra de linha
    doc.text(splitName, 10, 10);

    const splitPhoneLocation = doc.splitTextToSize(location, 190);
    doc.text(splitPhoneLocation, 150, 10)

    const splitPhoneNumber = doc.splitTextToSize(phoneNumber, 190);
    doc.text(splitPhoneNumber, 150, 15)

    const splitEmail = doc.splitTextToSize(email, 190);
    doc.text(splitEmail, 150, 20)

    const splitCareerObjective = doc.splitTextToSize(`OBJETIVO PROFISSIONAL\n__________________________________________________________________________\n${careerObjective}`, 190);
    doc.setFont('courier', 'bold');
    doc.text(splitCareerObjective, 10, 40);
    doc.setFont('courier', 'normal');

    const splitAboutYou = doc.splitTextToSize(`SOBRE MIM\n__________________________________________________________________________\n${aboutYou}`, 190);
    doc.text(splitAboutYou, 10, 65);

    const splitSchooling = doc.splitTextToSize(`ESCOLARIDADE\n__________________________________________________________________________\n${schooling}`, 190);
    doc.text(splitSchooling, 10, 100);

    const splitProfessionalExperience = doc.splitTextToSize(`EXPERIÊNCIA PROFSSIONAL\n__________________________________________________________________________\n${professionalExperience}`, 190);
    doc.text(splitProfessionalExperience, 10, 130);

    doc.save('documento.pdf');
}
