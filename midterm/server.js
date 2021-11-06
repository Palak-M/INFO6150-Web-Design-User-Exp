const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));
//app.use(express.static(path.join(__dirname, 'css')));

//app.post('/form', (req, res) => {
// const fields = req.body;
// console.log('server received:');
// console.log(fields);
// res.redirect('/form.html');
//});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/website.html'));
});

app.get('/about/approach', (req, res) => {
  res.sendFile(path.join(__dirname + '/approach.html'));
});

app.get('/about/missionVision', (req, res) => {
  res.sendFile(path.join(__dirname + '/missionVision.html'));
});

app.get('/mental-health/about-mental-health', (req, res) => {
  res.sendFile(path.join(__dirname + '/mentalhealth.html'));
});

app.get('/mental-health/myths-and-facts', (req, res) => {
  res.sendFile(path.join(__dirname + '/mythFacts.html'));
});

app.get('/mental-health/diagnosis-and-Treatment', (req, res) => {
  res.sendFile(path.join(__dirname + '/diagnosisTreatment.html'));
});

app.get('/contact-us/contact-details', (req, res) => {
  res.sendFile(path.join(__dirname + '/contactInfo.html'));
});

app.get('/contact-us/general-enquiry', (req, res) => {
  res.sendFile(path.join(__dirname + '/enquiryForm.html'));
});

app.post('/form', (req, res) => {
  res.sendFile(path.join(__dirname + '/form.html'));
});

app.use(express.static('public'));

app.listen(PORT, () => console.log(`http://localhost:${PORT}/`));
