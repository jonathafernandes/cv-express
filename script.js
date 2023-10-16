let pdfmakeLoaded = false;

function checkPdfMakeLoaded() {
    if (typeof pdfMake !== 'undefined') {
    pdfmakeLoaded = true;
    console.log('pdfmake carregado com sucesso');
    } else {
    console.error('Erro ao carregar pdfmake.');
    }
}

function generatePDF() {
    if (!pdfmakeLoaded) {
    console.error('[Error] pdfmake não está carregado corretamente');
    return;
    }

    const fullName = document.getElementById('fullName').value;
    const location = document.getElementById('location').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const email = document.getElementById('email').value;
    const careerObjective = document.getElementById('careerObjective').value;
    const aboutYou = document.getElementById('aboutYou').value;
    const schooling = document.getElementById('schooling').value;
    const role = document.getElementById('role').value;
    const role2 = document.getElementById('role2').value;
    const role3 = document.getElementById('role3').value;
    const role4 = document.getElementById('role4').value;
    const company = document.getElementById('company').value;
    const company2 = document.getElementById('company2').value;
    const company3 = document.getElementById('company3').value;
    const company4 = document.getElementById('company4').value;
    const workingTime = document.getElementById('workingTime').value;
    const workingTime2 = document.getElementById('workingTime2').value;
    const workingTime3 = document.getElementById('workingTime3').value;
    const workingTime4 = document.getElementById('workingTime4').value;
    const description = document.getElementById('description').value;
    const description2 = document.getElementById('description2').value;
    const description3 = document.getElementById('description3').value;
    const description4 = document.getElementById('description4').value;

    const documentDefinition = {
    content: [
        {
            text: `${fullName}`, margin: [ 0, 0, 0, 10 ], 
            style: 'header'
        },
        {
            text: `${location}`,
            style: 'subheader'
        },
        {
            text: `${phoneNumber}`,
            style: 'subheader'
        },
        {
            text: `${email}`,
            style: 'subheader'
        },
        {
            text: 'OBJETIVO PROFISSIONAL\n______________________________________________________',
            style: 'title'
        },
        {
            text: `${careerObjective}`,
            style: 'main'
        },
        {
            text: 'SOBRE MIN\n______________________________________________________',
            style: 'title'
        },
        {
            text: `${aboutYou}`,
            style: 'main'
        },
        {
            text: 'ESCOLARIDADE\n______________________________________________________',
            style: 'title'
        },
        {
            text: `${schooling}`,
            style: 'main'
        },
        {
            text: 'EXPERIÊNCIA\n______________________________________________________',
            style: 'title'
        },
        {
            text: `${role}`,
            style: 'subtitle'
        },
        {
            text: `${company}`,
            style: 'others'
        },
        {
            text: `${workingTime}`,
            style: 'date'
        },
        {
            text: `${description}`, margin: [0, 10, 0, 10],
            style: 'main'
        },
        {
            text: `${role2}`,
            style: 'subtitle'
        },
        {
            text: `${company2}`,
            style: 'others'
        },
        {
            text: `${workingTime2}`,
            style: 'date'
        },
        {
            text: `${description2}`, margin: [0, 10, 0, 10],
            style: 'main'
        },
        {
            text: `${role3}`,
            style: 'subtitle'
        },
        {
            text: `${company3}`,
            style: 'others'
        },
        {
            text: `${workingTime3}`,
            style: 'date'
        },
        {
            text: `${description3}`, margin: [0, 10, 0, 10],
            style: 'main'
        },
        {
            text: `${role4}`,
            style: 'subtitle'
        },
        {
            text: `${company4}`,
            style: 'others'
        },
        {
            text: `${workingTime4}`,
            style: 'date'
        },
        {
            text: `${description4}`, margin: [0, 10, 0, 10],
            style: 'main'
        },
        ],
        styles: {
            header: {
                fontSize: 20,
                bold: true,
            },
            subheader: {
                fontSize: 13,
                color: '#333333',
                margin: [ 0, 0, 0, 2 ]
            },
            title: {
                fontSize: 13,
                bold: true,
                margin: [ 0, 20, 0, 0 ]
            },
            subtitle: {
                bold: true,
                fontSize: 13,
            },
            main: {
                fontSize: 12,
                bold: false,
                color: '#333333'
            },
            date: {
                italics: true,
                fontSize: 10
            },
            others: {
                fontSize: 11
            }
        }
    };

    pdfMake.createPdf(documentDefinition).download('documento.pdf');
}

checkPdfMakeLoaded();

const generateButton = document.getElementById('generateButton');
if (generateButton) {
    generateButton.addEventListener('click', generatePDF);
}