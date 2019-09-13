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
      console.log(body);
      if (body.data.length === 0) {
        $('#outputCard').text("Your search returned no results. Refine your search.")
      }
    });
  });
});
