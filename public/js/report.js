
// define the callAPI function that takes a parameters
var callAPI = (remaining1,remaining2,remaining3,remaining4,remaining5,remaining6,remaining7,remaining8)=>{
    // instantiate a headers object
    var myHeaders = new Headers();
    // add content type header to object
    myHeaders.append("Content-Type", "application/json");
    // using built in JSON utility package turn object to string and store in a variable

    // Write about this and how to send data to dynamoDB from API 
    var state1 = JSON.stringify({"remaining1":remaining1,"remaining2":remaining2,"remaining3":remaining3,"remaining4":remaining4,"remaining5":remaining5,
    "remaining6":remaining6,"remaining7":remaining7,"remaining8":remaining8});
 


    // create a JSON object with parameters for API call and store in a variable
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body:state1,
        redirect: 'follow'
    };
    // make API call with parameters and use promises to get response
    fetch("https://x83uru4ey3.execute-api.us-east-1.amazonaws.com/dev", requestOptions)
    .then(response => response.text())
    .then(result => alert(JSON.parse(result).body))
    .catch(error => console.log('error', error));
}






// window.addEventListener('load', () => {


// const partnername = sessionStorage.getItem('partnername');

// document.getElementById("partnername").innerHTML = partnername;



// })





window.addEventListener('load', () => {


const Requirement1 = sessionStorage.getItem('Requirement1');
const Requirement2 = sessionStorage.getItem('Requirement2');
const Requirement3 = sessionStorage.getItem('Requirement3');
const Requirement4 = sessionStorage.getItem('Requirement4');
const Requirement6 = sessionStorage.getItem('Requirement6');
const Requirement7 = sessionStorage.getItem('Requirement7');






//req0
document.getElementById("remaining1").innerHTML = Requirement1;




//req2


if(Requirement2=="Yes"){
document.getElementById("remaining2").innerHTML = Requirement2;
document.getElementById("remaining42").innerHTML = "Microsite url: "+Requirement3;
document.getElementById("nextstep2").innerHTML = '<img src="../img/tick.png"  width="25" height="25">';
}

if(Requirement2=="No"){

document.getElementById("remaining2").innerHTML = Requirement2;
document.getElementById("nextstep2").innerHTML = "The partner must submit the item";
}


//req4



if(Requirement4=="Yes"){
document.getElementById("remaining3").innerHTML = Requirement4;
document.getElementById("nextstep3").innerHTML = '<img src="../img/tick.png"  width="25" height="25">';
}

if(Requirement4=="No"){

document.getElementById("remaining3").innerHTML = Requirement4;
document.getElementById("nextstep3").innerHTML = "The partner must submit the item";
}




//req6 - req7



if(Requirement6=='true'&& Requirement7=='true') {
    
document.getElementById("remaining4").innerHTML = "2";
document.getElementById("nextstep4").innerHTML = '<img src="../img/tick.png"  width="25" height="25">';
document.getElementById("nextstep6").innerHTML = '<img src="../img/tick.png"  width="25" height="25">';


}

else{
document.getElementById("remaining4").innerHTML = "0";
document.getElementById("remaining6").innerHTML = "-";
document.getElementById("nextstep4").innerHTML = '<img src="../img/cross.png"  width="16" height="16">';
document.getElementById("nextstep61").innerHTML = '<img src="../img/cross.png"  width="16" height="16">';


}

if(Requirement6=='true'& Requirement7=='false'){
    document.getElementById("remaining4").innerHTML = "1";
    document.getElementById("remaining6").innerHTML = "case #1";
    document.getElementById("nextstep4").innerHTML = '<img src="../img/cross.png"  width="16" height="16">';
    document.getElementById("nextstep61").innerHTML = '<img src="../img/cross.png"  width="16" height="16">';
    
    
    }





})



// bootbox.dialog({ 
//     title: 'Custom Dialog Example',
//     message: '<p>This dialog demonstrates many of the options available when using the Bootbox library</p>',
//     size: 'large',
//     onEscape: true,
//     backdrop: true,
//     buttons: {
//         fee: {
//             label: 'Fee',
//             className: 'btn-primary',
//             callback: function(){
                            
//             }
//         },
//         fi: {
//             label: 'Fi',
//             className: 'btn-info',
//             callback: function(){
                            
//             }
//         },
//         fo: {
//             label: 'Fo',
//             className: 'btn-success',
//             callback: function(){
                            
//             }
//         },
//         fum: {
//             label: 'Fum',
//             className: 'btn-danger',
//             callback: function(){
                            
//             }
//         }
//     }
// })


