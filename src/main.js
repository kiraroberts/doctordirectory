import { doctorDirectory } from './doctordirectory';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function() {
  $('#inputForm').submit(function(event) {
    event.preventDefault();
    let name = $('#inputName').val();
    let illness = $('#inputIllness').val();
    $('#inputName').val("");
    $('#inputIllness').val("");

    let doctorDirectory = new doctorDirectory();
    let promise = doctorDirectory.getDoctor(name, illness);

    promise.then(function(response) {
      let body = JSON.parse(response);
      if(body.data.length === 0) {
        $('#noMatch').text("Your search returned no results. Refine your search.")
        body.data.forEach() {
          $('#getDoctorNameOutput').text(`Name: ${body.data[i].profile.first_name} ${body.data[i].profile.last_name}`)
          $('#getDoctorPhoneOutput').text(`Phone Number: ${body.data[i].practices[0].phones[0].number}`)
        }
      } else {
        function(error) {
          $('#errorOutput').text(`${error.message}`);
        }
      }
    });
  });
});
