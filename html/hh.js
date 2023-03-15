const fn = document.getElementById('fn');
const ln = document.getElementById('ln');
const mail = document.getElementById('mail');
localStorage.getItem("fn",)


function enableSubmit(){
let inputs = document.querySelectorAll('.inp'); // Enter your class name for a required field, this should also be reflected within your form fields.
let btn = document.querySelector('#btn1');
let isValid = true;
for (var i = 0; i < inputs.length; i++){
let changedInput = inputs[i];
if (changedInput.value.trim() === "" || changedInput.value === null){
isValid = false;
break;
}
}
btn.disabled = !isValid;
}


var c=1;
function addData(){
    const tabl = document.getElementById('tble');
     // tabl.innerText="hii";
    // const a =document.createElement('h1').innerHTML="hii"
    // tabl.append("a");
    const row = document.createElement('tr')
    row.setAttribute("id", "rm"+c);
    const c1 = document.createElement('td')
    const c2 = document.createElement('td')
    const c3 = document.createElement('td')
    const c4 = document.createElement('td')

    c1.innerHTML='<button class="btn btn-outline-danger" id="remove'+c+'"'+ ' onclick="removerow(id)">Remove</button>';
    tabl.append(row);
    row.append(c1);

    c2.innerHTML='<input type="text" id="skill">'
    row.append(c2);
    
    c3.innerHTML='<select id="role"><option hidden>Choose an option</option><option>Software Developer</option><option>Business Analyst</option><option>Data Engineer</option><option>Devops Engineer</option></select>'
    row.append(c3);
    
    c4.innerHTML='<input type="text" id="exp">'
    row.append(c4);

    counterUpdate("plus");
}

function counterUpdate(abc){
    if (abc==="plus"){
        c++;
    }
    else if(abc==="minus"){
        c--;
    }
    else{
        console.log("err");
    }
}

function removerow(xyz){
    const num = xyz.match(/\d+/g);
    var idd = num[0];
    var finall= "rm"+idd;
    const a =document.getElementById(finall);
    a.innerHTML="";
    counterUpdate("minus");
    localStorage.clear();
}

// function submitData(){
//     const submit = document.createElement('p');
//     submit.innerHTML = "Data saved successfully";
// }


window.onload = function() {

    // Check for LocalStorage support.
    if (localStorage) {
  
      // Add an event listener for form submissions
      document.getElementById('btn2').addEventListener('click',function() {
        // Get the value of the name field.
        var name = document.getElementById('fn').value;
  
        // Save the name in localStorage.
        localStorage.setItem('firstname', name);

        var name1 = document.getElementById('ln').value;
  
        // Save the name in localStorage.
        localStorage.setItem('lastname', name1);

        var m = document.getElementById('mail').value;
  
        // Save the name in localStorage.
        localStorage.setItem('mail', m);

        var skills = document.getElementById('skill').value;
  
        // Save the name in localStorage.
        localStorage.setItem('skills', skills);

        var r = document.getElementById('role').value;
  
        // Save the name in localStorage.
        localStorage.setItem('role', r);

        var e = document.getElementById('exp').value;
  
        // Save the name in localStorage.
        localStorage.setItem('experience', e);

        alert("Data Saved Sucessfully");
        document.getElementById('fn').innerHTML="";
      });
    }
  }