let pdfmakeLoaded = false;

function checkPdfMakeLoaded() {
    if (typeof pdfMake !== 'undefined') {
    pdfmakeLoaded = true;
    console.log('pdfmake carregado com sucesso.');
    } else {
    console.error('Erro ao carregar pdfmake.');
    }
}

function generatePDF() {
    if (!pdfmakeLoaded) {
    console.error('pdfmake não está carregado corretamente.');
    return;
    }

    const fullName = document.getElementById('fullName').value;
    const location = document.getElementById('location').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const email = document.getElementById('email').value;
    const careerObjective = document.getElementById('careerObjective').value;
    const aboutYou = document.getElementById('aboutYou').value;
    const schooling = document.getElementById('schooling').value;
    const role = document.querySelector('role').value;
    const company = document.querySelector('company').value;
    const workingTime = document.querySelector('workingTime').value;
    const description = document.querySelector('description').value;
    

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
            text: `${role}, ${company} ${workingTime} ${description}`,
            style: 'main'
        }
        ],
        styles: {
            header: {
                fontSize: 20,
                bold: true,
            },
            subheader: {
                fontSize: 14,
                margin: [ 0, 0, 0, 2 ]
            },
            title: {
                fontSize: 16,
                bold: true,
                margin: [ 0, 20, 0, 0 ]
            },
            main: {
                fontSize: 14
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