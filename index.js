const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "1234567890";
const dataSymbols = "$^*ù!:;,&\"'(-è_ç)";
const rangeValue = document.getElementById('password-length');
const passwordOutput = document.getElementById('password-output');


function generatePassword() {
    let data = [];
    let password = "";

    lowercase.checked ? data.push(...dataLowercase) : null;
    uppercase.checked ? data.push(...dataUppercase) : null;
    numbers.checked ? data.push(...dataNumbers) : null;
    symbols.checked ? data.push(...dataSymbols) : null;

    if (data.length === 0) {
        alert('Veuillez sélectionner des critères');
        return;
    }
    
    for (i = 0; i < rangeValue.value; i++){

        password += data[Math.floor(Math.random() * data.length)];
        console.log(password);
    }

    passwordOutput.value = password;

    passwordOutput.select();
    document.execCommand('copy');

    generateButton.textContent = "Copié !";
    setTimeout(() => {
        generateButton.textContent = "Générer mot de passe"
    }, 2000)
};

generateButton.addEventListener("click", generatePassword);
