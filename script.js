document.getElementById('Reg_Form').addEventListener('submit', function (event) {

    event.preventDefault();

    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var num = document.getElementById('num').value;
    console.log('First Name:', fname);
    console.log('Last Name:', lname);
    console.log('Email:', email);
    console.log('Number:', num);

    document.getElementById('1').innerHTML= fname;
    document.getElementById('2').innerHTML= lname;
    document.getElementById('3').innerHTML= email;
    document.getElementById('4').innerHTML= num;

});