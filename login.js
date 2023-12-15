async function login() {
    const nameEl = document.querySelector("#name");
    const password1 = document.querySelector("#password");
    localStorage.setItem("userName", nameEl.value);
    console.log("username: " + nameEl.value);
    
    

    // will add database verification here

    const formData = {
      email: nameEl.value,
      password: password1.value
    };

    

    

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      const data = await response.json();

      localStorage.setItem("token", data.id);



    
      if (data.ok) {
        // Successful login or user creation
        console.log('User ID:', data.id);
        alert('User ID:', data.id)
        // Handle redirect or other actions for successful login
        localStorage.setItem("token", data.id);
      } else {
        // Handle error messages (Unauthorized, Existing user, etc.)
        console.error('Error:', data.msg);
        // Display an error message to the user
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error:', error.message);
      //alert('Error:' +  error.message)
      
      // Handle other types of errors (network, server, etc.)
    }
  }
