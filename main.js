document.addEventListener('invalid', (function(){
    return function(e) {
      e.preventDefault();
      var email = document.getElementById("ip1");
      var x1 = document.getElementById("errorAlert1");
      var x2 = document.getElementById("errorAlert2");
      var color;
      x1.style.display = "none";
      x2.style.display = "none";
      color = "#ff0000";
      if (email.value == "")                                   
      { 
          
          x1.style.display = "block";
          email.style.borderColor = color; 
          return false; 
      } 
     
      if (email.value.indexOf("@", 0) < 0)                 
      { 
          x2.style.display = "block";
          email.style.borderColor = color; 
          return false; 
      } 
     
      if (email.value.indexOf(".", 0) < 0)                 
      { 
          x2.style.display = "block";
          email.style.borderColor = color; 
          return false; 
      } 
    };
})(), true);
