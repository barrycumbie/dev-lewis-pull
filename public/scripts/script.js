$(document).ready(function(){
    console.log('ready');
  
  // Submit Button
    document.getElementById("displayBtn").onclick = function() {  
      displayInput()  
      };  
    
    function displayInput() {
      $('#pg1').append(
        'Thanks you, ' + $('#fname').val() + ' ' + $('#lname').val() + ', for submiting an appointment request. We will get back to you through your email, ' 
        + $('#email').val() + ', or your phone number, ' + $('#phone').val() + ', as soon as possible.'
     );
    };
    
// click the update... /upate send the form... l
    document.getElementById("fnameBtn").onclick = function() {
      sendData()
    };

    function sendData() {
      
    }

    // Load Data Button
    document.getElementById("loadBtn").onclick = function() {
      loadData()
    };
  
    // function loadData() {
    //   document.getElementById('fname').value = 'Jacob'
    //   document.getElementById('lname').value = 'Parry'
    //   document.getElementById('email').value = 'jparry@una.edu'
    //   document.getElementById('street').value = '3025 Sandy Flat Rd'
    //   document.getElementById('city').value = 'Selmer'
    //   document.getElementById('state').value = 'Tennessee'
    //   document.getElementById('zip').value = '38375'
    //   document.getElementById('physican').value = 'Dr. Jamie'
    //   document.getElementById('insurance').value = 'Aetna'
    //   document.getElementById('phone').value = '453-5580'
    // };
  
    // Dependent input 
    $("input[type=radio][name=relationship]").on("change", function () {
      let addy = $("input[name=relationship]:checked").val();
      console.log(addy)
  
      if(addy === 'other') {
        $('#otherrelationship').show();
      } else {
        $("#otherrelationship").hide();
      }
      });
  
    });