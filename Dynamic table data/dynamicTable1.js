var createNewRecord = (userData) => {
    var trow = document.createElement("tr");
    trow.setAttribute("id", "row" + userData.id);
    document.querySelector(".tableRecord").append(trow);
    trow.innerHTML = `
        <td class='.tid'>${userData.id}</td>
        <td class='.tname'>${userData.name}</td>
        <td class='.tage'>${userData.age}</td>
        <td class='.tgender'>${userData.gender}</td>
        <td class='.tlocation'>${userData.location}</td>
        <td class='.toperation'>${userData.operation}</td>
        `
    // add a td and insert edit and delete buttons in it
    var tdata = document.createElement("td");
    trow.append(tdata);
    tdata.innerHTML = `<input type='button' value='Edit' class='edit id${userData.id} btn'> <input type='button' value='Delete' class='delete id${userData.id} btn'>`
}
var showStudentDetails = () => {
    //idValidation();  
    document.querySelector(".studentData").style.display = "block";
    document.querySelector(".age").addEventListener("click", function () {
        console.log("Age clicked");
    });
}
// window.addEventListener('DOMContentLoaded', (event) => {
//     document.querySelector(".edit").addEventListener("click", function () {
//         console.log("HI");
//         console.log("Hello");
//     });
// });

   

var accountsList = [];
var stdId = 1;

var readAccDetails = () => {
    alert("hello");
    var userData = {};
    userData.id = stdId++;
    userData.name = document.querySelector(".accName").value;
    userData.age = document.querySelector(".age").value;
    userData.location = document.querySelector(".location").value;
    userData.gender = document.querySelector("input[name=gender]:checked").value;
    userData.operation = document.querySelector("option:checked").getInnerHTML();

    createNewRecord(userData);
    showStudentDetails();
    accountsList.push(userData);
}