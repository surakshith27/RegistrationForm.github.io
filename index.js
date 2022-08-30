function validate() {
	let firstNameInput = document.getElementById('first-name').value
	let lastNameInput = document.getElementById('last-name').value
	let emailInput = document.getElementById('email').value
	let phoneInput = document.getElementById('phoneNumber').value
	let batchNoInput = document.getElementById('batchNo').value
	let moduleInput = document.getElementById('module').value
	let tnCInput = document.getElementById('tnC').checked

	let error = false

	if(firstNameInput && firstNameInput.length > 2){
		document.getElementById('first-name-valid').style.display = 'block'
		document.getElementById('first-name-invalid').style.display = 'none'
	} else {
		document.getElementById('first-name-invalid').style.display = 'block'
		document.getElementById('first-name-valid').style.display = 'none'
		error = true
	}

	if(lastNameInput && lastNameInput.length > 2){
		document.getElementById('last-name-valid').style.display = 'block'
		document.getElementById('last-name-invalid').style.display = 'none'
	} else {
		document.getElementById('last-name-invalid').style.display = 'block'
		document.getElementById('last-name-valid').style.display = 'none'
		error = true
	}

	 if (
    emailInput &&
    emailInput.includes("@") &&
    emailInput.includes(".") &&
    emailInput.lastIndexOf(".") <= emailInput.length - 3 &&
		emailInput.indexOf('@') !== 0
     ) {
    document.getElementById("email-valid").style.display = "block";
    document.getElementById("email-invalid").style.display = "none";
     } else {
    document.getElementById("email-invalid").style.display = "block";
    document.getElementById("email-valid").style.display = "none";
		error = true
    }

     if(phoneInput && phoneInput.length > 9 && phoneInput.length < 11){
        document.getElementById("phone-Valid").style.display = 'block'
        document.getElementById("phone-Invalid").style.display = 'none'
     } else {
        document.getElementById("phone-Invalid").style.display = 'block'
        document.getElementById("phone-Valid").style.display = 'none'
    } 

     if(moduleInput !== 'None'){
        document.getElementById('module-valid').style.display = "block";
        document.getElementById('module-invalid').style.display = "none";
     } else {
        document.getElementById('module-invalid').style.display = "block";
        document.getElementById('module-valid').style.display = "none";
        error = true
     }

	if(batchNoInput !== 'None'){
		document.getElementById('batchNo-valid').style.display = "block";
		document.getElementById('batchNo-invalid').style.display = "none";
	} else {
		document.getElementById('batchNo-invalid').style.display = "block";
		document.getElementById('batchNo-valid').style.display = "none";
		error = true
	}

	if(tnCInput) {
		document.getElementById("tnC-invalid").style.display = "none";
	} else {
		document.getElementById("tnC-invalid").style.display = "block";
		error = true
	}

	if(!error) {
		alert('Your details have been saved successfully!')
		document.getElementById('first-name').value = ''
		document.getElementById('last-name').value = ''
		document.getElementById('email').value = ''
		document.getElementById('phoneNumber').value = ''
		document.getElementById('batchNo').value = 'None'
		document.getElementById('module').value = ''
		document.getElementById('tnC').checked = false

		document.getElementById('first-name-valid').style.display = 'none'
		document.getElementById('last-name-valid').style.display = 'none'
		document.getElementById("email-valid").style.display = "none"
		document.getElementById("phone-Valid").style.display = "none"
		document.getElementById("module-valid").style.display = "none";
		document.getElementById('batchNo-valid').style.display = "none";
	}
}

	