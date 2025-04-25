


function saveData(event) {
    event.preventDefault();

    var firstName = document.getElementById('stdName').value;
    var lastName = document.getElementById('lastName').value;
    var emailId = document.getElementById('studentEmail').value;
    var phoneNum = document.getElementById('phoneNumber').value;
    const studentAge = document.getElementById('Age').value;
    var studentAdd = document.getElementById('studentAddress').value;
    var studentId = document.getElementById('idNum').value;

    // Show on screen
    document.getElementById('showstdName').textContent = "First Name: " + firstName;
    document.getElementById('showlastName').textContent = "Last Name: " + lastName;
    document.getElementById('showstudentEmail').textContent = "Email: " + emailId;
    document.getElementById('showphoneNumber').textContent = "Phone Number: " + phoneNum;
    document.getElementById('showAge').textContent = "Age: " + studentAge;
    document.getElementById('showstudentAddress').textContent = "Address: " + studentAdd;
    document.getElementById('showidNum').textContent = "ID: " + studentId;


    //to clear all input
    document.getElementById('stdName').value = "";
    document.getElementById('lastName').value = "";
    document.getElementById('studentEmail').value = "";
    document.getElementById('phoneNumber').value = "";
    document.getElementById('Age').value = "";
    document.getElementById('studentAddress').value = "";
    document.getElementById('idNum').value = "";
}
