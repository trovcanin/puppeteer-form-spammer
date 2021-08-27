function getPassword(){
	
	let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+?><:{}[]"
	let passwordLength = 14;
	let password = "";

	for (var i=0; i<passwordLength; i++){
		
		//console.log(password);

		let randomNumber = Math.floor(Math.random() * chars.length); 
		password += chars.substring(randomNumber,randomNumber + 1);

	}
    
    return password;
    
};



module.exports = getPassword;