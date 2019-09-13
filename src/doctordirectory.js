export class doctorDirectory {
  getDoctor() {
    return new Promise(function(resolve,reject) {
      let request = new XHMLttpRequest();
      const url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${inputName}query=${inputIllness}&&location=or-portland&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}
