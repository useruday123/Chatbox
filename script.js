let username = "";
   
   function openRegistrationForm() {
       document.getElementById("registrationform").style.display = "block";
   }

   function registerUser() {
       username = document.getElementById("username").value;
       let email= document.getElementById("email").value;
       let paasword= document.getElementById("password").value;
       localStorage.setItem("username", username);
       localStorage.setItem("email", email);
       localStorage.setItem("password", paasword);
       document.getElementById("message").disabled = false;
       document.getElementById("registrationform").style.display = "none";
       document.getElementById("login-btn").disabled=true;
       document.getElementById("send-btn").removeAttribute("disabled");
   }

   function sendMessage() {
       let message = document.getElementById("message").value;
       let storedUsername = localStorage.getItem("username");
       let storedEmail = localStorage.getItem("email");
       let storepassword = localStorage.getItem("password");
       document.getElementById("chat-box").innerHTML += `<p>${storedUsername}: ${message}</p>`;
       var messageText=document.getElementById("message").value = ""; 
      
    var chatArea = document.getElementById("chat-box");
    var messageDiv = document.createElement("div");
    messageDiv.textContent = messageText;
    messageDiv.classList.add("message", "sent");
    chatArea.appendChild(messageDiv);

    document.getElementById("message").value = "";
    chatArea.scrollTop = chatArea.scrollHeight;
   }
