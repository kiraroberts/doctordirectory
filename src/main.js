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
  });
});
