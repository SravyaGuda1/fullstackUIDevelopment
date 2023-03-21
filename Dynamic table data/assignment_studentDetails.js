class AccountDetails{
    
    constructor(data){
        this.id= data.id;
        this.name = data.name;
        this.age = data.age;
        this.gender = data.gender;
        this.location = data.location;
        this.operation = data.operation;
    }
    showStudentDetails(){
        //idValidation();  
        document.querySelector(".studentData").style.display="block";
    }    
    createNewRecord(id){
        var trow = document.createElement("tr");
        trow.setAttribute("id", "row"+id);
        document.querySelector(".tableRecord").append(trow);
        trow.innerHTML = `
        <td class='.tid'>${id}</td>
        <td class='.tname'>${this.name}</td>
        <td class='.tage'>${this.age}</td>
        <td class='.tgender'>${this.gender}</td>
        <td class='.tlocation'>${this.location}</td>
        <td class='.toperation'>${this.operation}</td>
        `
        // add a td and insert edit and delete buttons in it
        var tdata = document.createElement("td");
        trow.append(tdata);
        tdata.innerHTML=`<input type='button' value='Edit' class='edit id${id} btn'> <input type='button' value='Delete' class='delete id${id} btn'>` 
    }
    editRow(accountsList) {
        //const editbtns = document.querySelectorAll(".edit");
        // for (var i = 0; i < editbtns.length; i++) {
        // //editbtns.forEach((value) => {
        //     editbtns[i].addEventListener("click", function () {                
        //         //disable Register button
        //         console.log(this);
        //         console.log("hi");
        //     });
        // };  
        console.log("hello");
        const editbtns = document.querySelectorAll(".edit");

        for (var i = 0; i < editbtns.length; i++) {
            editbtns[i].addEventListener("click", function () {
                console.log(this);
                console.log("hi");
            });
        }          
    }   
    // saveRecord(currentUserData){
    //     document.querySelector(".save").addEventListener("click", () =>{
    //         document.querySelector(".save").style.display='none';
    //          console.log(currentUserData);     
                
    //     })
    // } 
    editRow1(accountsList){
        console.log("hello");
        const editbtns = document.querySelectorAll(".edit");

        for (var i = 0; i < editbtns.length; i++) {
            editbtns[i].addEventListener("click", function () {
                console.log(this);
                console.log("hi");
            });
        }       
    }    
    deleteRow(){
        var delbtns = document.querySelectorAll(".delete");
        delbtns.forEach((value) =>{
            value.addEventListener("click", function () {
                console.log("DELETE BTN CLICKED");
                document.querySelector("#row"+rowNo).style.display='none';             
            });
        })          
    }     
}   

var accountsList =[];
var count=1;

var readAccDetails = ()=>{ 
    var userData= {};
    userData.id = count++;
    userData.name = document.querySelector(".accName").value;
    userData.age = document.querySelector(".age").value;
    userData.location= document.querySelector(".location").value;
    userData.gender = document.querySelector("input[name=gender]:checked").value;
    userData.operation = document.querySelector("option:checked").getInnerHTML();

    var details = new AccountDetails(userData);
    details.createNewRecord(userData.id);
    details.showStudentDetails();  
    accountsList.push(details); 
    details.deleteRow();
    var currentRecord = details.editRow1(accountsList);
    details.saveRecord(currentRecord);
}


