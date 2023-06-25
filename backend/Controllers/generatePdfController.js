const PDFDocument = require('pdfkit');
const nodemailer = require('nodemailer');
const fs = require('fs');
const { sendEmail } = require('./sendEmail');

// GENERATE PDF AND SEND PDF FUNCTIONS
exports.generatePdf = (req,res) => {

    let doc = new PDFDocument();
    let timeStamp = new Date() / 1
    const filePath = `./uploads/${timeStamp}.pdf`;
    const fileStream = fs.createWriteStream(filePath);

    doc.pipe(fileStream);
    doc.pipe(res);
    
    // SETUP PDF HEADER
    pdfHeader(doc,req.body)

    let lineCount = 0;
    req.body.selectedProduct.forEach((item, index) => {
        let x = 70;
        let y = 300 + lineCount * 20;
        
        doc.fontSize(19).font('Times-Roman').fillColor('#AFA250').text(`${index+1}. ${item}`,x,y,{height:60});
        lineCount++;

        if (lineCount > 23) {
            doc = doc.addPage();

            // SETUP PDF HEADER
            pdfHeader(doc,req.body)
            lineCount = 0;
        }
    });//gczbbpbqezumudac


    // Finalize the PDF and close the file stream
    doc.end();
    fileStream.on('finish', () => {
        console.log('PDF saved successfully');
        // SEND EMAIL
        sendEmail(timeStamp,req.body)
    });

}

// CREATE PDF HEADER DETAILS
function pdfHeader(doc,obj) {
    doc.fontSize(35).font('Times-Bold').fillColor('#AFA250').text("NM EVENTS",{align:'center',height:0});
    doc.fontSize(15).font('Times-Bold').fillColor('black').text("FEROKE,CALICUT",{align:'center',height:0});
    doc.fontSize(15).font('Times-Bold').fillColor('black').text("PH: +91 8590 525446, +91 9847 271446",{align:'center',height:0});

    doc.fontSize(20).font('Times-Roman').fillColor('black').text();
    doc.fontSize(20).font('Times-Roman').fillColor('black').text(`Name:  ${obj.name}`);
    doc.fontSize(20).font('Times-Roman').fillColor('black').text(`Email:  ${obj.email}`);
    doc.fontSize(20).font('Times-Roman').fillColor('black').text(`Phone:  ${obj.phone}`);
    doc.fontSize(20).font('Times-Roman').fillColor('black').text(`Event Date:  ${obj.date}`);
    doc.fontSize(20).font('Times-Roman').fillColor('black').text(`Address:  ${obj.address}`,{height:100});
    doc.fontSize(15).fillColor('black').font('Helvetica-Bold').fillColor('black').text(`===============================================`);
}

