


  
  $(document).ready(function() {
      var max_fields = 6;
      var wrapper = $(".container2");
      var add_button = $(".add_form_field2");
  
      var x = 1;
      nextID = 0;
      $(add_button).click(function(e) {
        var id = ++nextID;
          e.preventDefault();
          if (x < max_fields) {
              x++;
              $(wrapper).append('<div class=RDSoption><select id="RDS'+id+'"><option value="Amazon RDS for MySQL">Amazon RDS for MySQL</option><option value="Amazon RDS for PostgreSQL">Amazon RDS for PostgreSQL</option><option value="Microsoft SQL Server"> Microsoft SQL Server</option><option value="Amazon RDS for MariaDB">Amazon RDS for MariaDB</option><option value="Amazon RDS for Oracle">Amazon RDS for Oracle</option> <option value="Amazon Aurora MySQL">Amazon Aurora MySQL</option><option value="Aurora PostgreSQL">Amazon Aurora PostgreSQL</option><br></select><br><input type="checkbox" name="case"  value="case#1  id="Requirement8'+id+'"/>Customer Case Studie #1</div>'); //add input box
          } 
      });
  
  
  });
  
  


  function handleSubmit () {
  
  
  const Requirement1 = document.getElementById('Requirement1').value;
  const Requirement3 = document.getElementById('Requirement3').value;

  // const Requirement8 = document.getElementById('RDS1').value;
  // sessionStorage.setItem("Requirement8", Requirement8);


  
   
   
//req 5



//req 6-7 
var Requirement6 = document.getElementById('Requirement6').checked;
if(Requirement6 == true){
  sessionStorage.setItem("Requirement6", Requirement6);
}
else{
  sessionStorage.setItem("Requirement6", Requirement6)=null;
}



var Requirement7 = document.getElementById('Requirement7').checked;
if(Requirement7 == true){
  sessionStorage.setItem("Requirement7", Requirement7);
}
else{
  sessionStorage.setItem("Requirement7", Requirement7)=null;
}





  //req2
  const radioButtons = document.querySelectorAll('input[name="opation1"]');
  var Requirement2;
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      Requirement2 = radioButton.value;
      sessionStorage.setItem("Requirement2", Requirement2);
  
    }
  }
  
  //re4
  const radioButtons1 = document.querySelectorAll('input[name="opation2"]');
  var Requirement4;
  for (const radioButton1 of radioButtons1) {
    if (radioButton1.checked) {
      Requirement4 = radioButton1.value;
      sessionStorage.setItem("Requirement4", Requirement4);
  
    }
  }








  
      sessionStorage.setItem("Requirement1", Requirement1);
      sessionStorage.setItem("Requirement3", Requirement3);

     
  
  
      
  
  
      return;
  
  }
  
  
  // window.addEventListener('load', () => {
  
  
  // const partnername = sessionStorage.getItem('partnername');
  
  // document.getElementById("partnername").innerHTML = partnername;
  
  
  
  // })
      
  
