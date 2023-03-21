var EmployeeSalaryDetails = {    
    totalSalaryCalc(){
        var PF= (14 / 100) * this.basicSalary;
        var HRA= (25 / 100) * this.basicSalary;
        var totalSalaryValue= this.basicSalary + PF + HRA;
        return totalSalaryValue;
    },                   
    taxCalculation() {
        var TAX, TaxPercent;
        if (this.employeeGender.toLowerCase() == "male") {
            if (this.totalSalary > 100000) {
                TaxPercent = 15;
            } else if (this.totalSalary > 50000) {
                TaxPercent = 10;
            } else if (this.totalSalary > 25000) {
                TaxPercent = 5;
            } else {
                TaxPercent = 0;
            }
        } else {
            if (this.totalSalary > 100000) {
                TaxPercent = 10;
            } else if (this.totalSalary > 50000) {
                TaxPercent = 5;
            } else {
                TaxPercent = 0;
            }
        }
        TAX = (TaxPercent / 100) * this.totalSalary;
        return TAX;
    },
    displayEmpDetails(){
        document.querySelector(".dname").innerHTML=this.employeeName;
        document.querySelector(".dage").innerHTML=this.employeeAge;
        document.querySelector(".dgender").innerHTML=this.employeeGender;
        document.querySelector(".ddept").innerHTML=this.employeeDepartment;
        document.querySelector(".dbsalary").innerHTML=this.basicSalary;
        document.querySelector(".dtsalary").innerHTML=this.totalSalary;
        document.querySelector(".dtax").innerHTML=this.TaxTotal;
        document.querySelector(".paycheck-generate").style.display="block";
    }
}
var readEmpData = () =>{
    EmployeeSalaryDetails.employeeName= document.querySelector(".ename").value;
    EmployeeSalaryDetails.employeeAge= document.querySelector(".eage").value;
    EmployeeSalaryDetails.employeeGender= document.querySelector(".egender").value;
    EmployeeSalaryDetails.employeeDepartment= document.querySelector(".edept").value;
    EmployeeSalaryDetails.basicSalary= parseInt(document.querySelector(".ebsalary").value);
}
var generatePayCheck = () => {
    readEmpData();
    EmployeeSalaryDetails.totalSalary = EmployeeSalaryDetails.totalSalaryCalc();
    EmployeeSalaryDetails.TaxTotal = EmployeeSalaryDetails.taxCalculation();
    EmployeeSalaryDetails.displayEmpDetails();
}
