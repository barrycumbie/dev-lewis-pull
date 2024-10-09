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

    // Load Data Button
    document.getElementById("loadBtn").onclick = function() {
      loadData()
    };
  
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
