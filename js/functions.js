
function loginvalidateform()
{  
	alert( document.loginform.email.value );
	var email=document.loginform.email.value;  
	var password=document.loginform.password.value;  
	
	
	if (email==null || email=="")
	{  
	  alert( "Please provide your Email!" );
	  document.loginform.email.focus() ;
	  return false;
	}
	else if (password==null || password=="")
	{  
	  alert("Please provide your password");  
	  return false;  
	} 
	else if(password.length<6)
	{  
	  alert("Password must be at least 6 characters long.");  
	  return false;  
	} 
	
	
} 
function createAccountValidateForm()
{  
	var email=document.createAccountForm.email.value;  
	var password=document.createAccountForm.password.value;  
	var firstname=document.createAccountForm.firstname.value;  
	var lastname=document.createAccountForm.lastname.value;  
	var passwordconfirm=document.createAccountForm.passwordconfirm.value;  
	
	
	
	if (firstname==null || firstname=="")
	{  
	  alert("Please provide your First name");  
	  return false;  
	}
	else if (lastname==null || lastname=="")
	{  
	  alert("Please provide your Lastname");  
	  return false;  
	}
	else if (email==null || email=="")
	{  
	  alert( "Please provide your Email!" );
	  document.createAccountForm.email.focus() ;
	  return false;
	}
	else if (password==null || password=="")
	{  
	  alert("Please provide your password");  
	  return false;  
	} 
	else if(password.length<6)
	{  
	  alert("Password must be at least 6 characters long.");  
	  return false;  
	}
	else if (passwordconfirm==null || passwordconfirm=="")
	{  
	  alert("Please Confirm your password");  
	  return false;  
	}
	else if (password!=passwordconfirm)
	{  
	  alert("Password does not match");  
	  return false;  
	}
	
}   