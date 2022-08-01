var totalYears;
var startYear;
let endYear;
var difference;
var newCarsBox;
var txtNewInputBox;
var divTag;
var inputOfCars = [];
var index = 0;
var values;
let dataToBeSend;
var names;
var checkedValues;
var namesofcheck;
var totalSteel = [];

function createNewElement() {
    
    // totalYears=difference;
    startYear = parseInt(document.getElementById('Starting_Year').value);
    endYear = parseInt(document.getElementById('Ending_Year').value);
    difference = parseInt(endYear) - parseInt(startYear);
    console.log("Starting Year is"+startYear);
    console.log("Ending Year is"+endYear);

    if(startYear<2020 || endYear<2020) {
        alert('Start year and End Year should not be less than 2020')
    }

    if(startYear == endYear){
        alert('Start year and End Year should not be same')
    }

    if( endYear  <  startYear ) {
        alert("You Have Not Entered Valid Year");
    } else {
    console.log("Total Number of Column is"+difference);
     totalYears = difference;
    if(difference>10) { 
        alert('The difference of year must not be greater than 10');
    }   
    else{
    for(var i=0;i<difference;i++) {

    divTag = document.createElement('div');
  
    console.log("Total NO Of Years is "+totalYears);
    
    $('#data').append('<input type="number"  placeholder=" Enter No Of Vehicle Here "  name="value'+ i +'"   pattern="[1-9]{1}[0-9]{7}"  id="carinput'+ i +'" />  ');
   
    document.getElementById("data").appendChild(divTag);
   
    }
}
}
}

function TotalYears() {
    for(var i=0;i<difference;i++  ){
        values = 'carinput' + i;
        inputOfCars[i] = parseInt(document.getElementById(values).value);
    }
    for(var j=0;j<i;j++) {
    console.log(inputOfCars[j]);
    }
}

function  checkingValues() {
    var checkboxSteel = document.getElementById("materialSteel")
    var checkboxPlastic = document.getElementById("materialPlastic")
    var checkboxIron  = document.getElementById("materialIron")
    var checkboxRubber = document.getElementById("materialRubber")
    var checkboxAluminium = document.getElementById("materialAluminium")
    var checkboxCopper = document.getElementById("materialCopper")
    var checkboxGlass = document.getElementById("materialGlass")

    var sch1 = document.getElementById("steelColHead")
    var pch1 = document.getElementById("plasticColHead")
    var ich1 = document.getElementById("ironColHead")
    var rch1 = document.getElementById("rubberColHead")
    var ach1 = document.getElementById("aluminiumColHead")
    var gch1 = document.getElementById("glassColHead")
    var cch1 = document.getElementById("copperColHead")

    var sch2 = document.getElementById("steelCol")
    var pch2 = document.getElementById("plasticCol")
    var ich2 = document.getElementById("ironCol")
    var rch2 = document.getElementById("rubberCol")
    var ach2 = document.getElementById("aluminiumCol")
    var gch2 = document.getElementById("glassCol")
    var cch2 = document.getElementById("copperCol")

    // steel
    if(checkboxSteel.checked == true) {
        sch1.style.display = "table-cell";
        sch2.style.display = "table-cell";
        sch2.style.width = "85px";
    } else {
        sch1.style.display = "none";
        sch2.style.display = "none";
    }

    if(checkboxPlastic.checked == true) {
        pch1.style.display = "table-cell";
        pch2.style.display = "table-cell" ;
        pch2.style.width = "85px";    
    } else {
        pch1.style.display = "none";
        pch2.style.display = "none";
    }


    // iron
    if(checkboxIron.checked == true) {
        ich1.style.display = "table-cell";
        ich2.style.display = "table-cell";
        ich2.style.width = "85px";
    } else {
        ich1.style.display = "none";
        ich2.style.display = "none";
    }
    
    // rubber
    if(checkboxRubber.checked == true) {
        rch1.style.display = "table-cell";
        rch2.style.display = "table-cell";
        rch2.style.width = "85px";
    } else {
        rch1.style.display = "none";
        rch2.style.display = "none";
    }

    // aluminium
    if(checkboxAluminium.checked == true) {
        ach1.style.display = "table-cell";
        ach2.style.display = "table-cell";
        ach2.style.width = "85px";
    } else {
        ach1.style.display = "none";
        ach2.style.display = "none";
    }
    
    // glass
    if(checkboxGlass.checked == true) {
        gch1.style.display = "table-cell";
        gch2.style.display = "table-cell";
        gch2.style.width = "85px";
    } else {
        gch1.style.display = "none";
        gch2.style.display = "none";
    }
    
    // copper
    if(checkboxCopper.checked == true) {
        cch1.style.display = "table-cell";
        cch2.style.display = "table-cell";
        cch2.style.width = "85px";
    } else {
        cch1.style.display = "none";
        cch2.style.display = "none";
    }

}
