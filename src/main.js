import { DoctorDirectory } from './doctordirectory';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


$(document).ready(function() {
  $('#inputForm').submit(function(event) {
    event.preventDefault();
    let name = $('#inputName').val();
    let ailment = $('#inputIllness').val();
    $('#inputName').val("");
    $('#inputIllness').val("");

    let doctorDirectory = new DoctorDirectory();
    let promise = doctorDirectory.getDoctor(name, ailment);

    promise.then(function(response) {
      let body = JSON.parse(response);
      if (body.data.length === 0) {
        $('#outputCard').text("Your search returned no results. Refine your search.")
      }

      for (let i = 0; i <body.data.length; i++) {
        $('#getDoctorNameOutput').append(`Name: ${body.data[i].profile.first_name} ${body.data[i].profile.last_name}<br>Phone Number: ${body.data[i].practices[0].phones[0].number}<br>Address: ${body.data[i].practices[0].visit_address.street}<br>Available: ${body.data[i].practices[0].accepts_new_patients}<br>About: ${body.data[i].profile.bio}<br><br><br>`)
      }
    });
  });
});
