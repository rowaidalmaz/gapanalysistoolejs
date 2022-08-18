

// function handleSubmit () {
//     const partnername = document.getElementById('partnername').value;
//     sessionStorage.setItem("partnername", partnername);
 
//     return;

// }
    
  
      function enableProgram(option){
        console.log(option.value);
        if(option.value== 1){
          document.getElementById('Competencies').classList.remove('d-none');
          document.getElementById('SDP-program').classList.add('d-none');
        }
        if(option.value== 0){
          document.getElementById('SDP-program').classList.remove('d-none');
          document.getElementById('Competencies').classList.add('d-none');

        }
      };


      function getval() {
       var sel2 = document.getElementById('SDP-program');
       if (sel2.value == "STORGE") {
        window.location.href = "/rds"
    
       }

   

  }
