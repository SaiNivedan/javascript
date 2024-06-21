let password = "Secure3P@ss";
let passwordLength = password.length;
let strength;

if (passwordLength < 6) {
    strength = "Weak";
} else if (passwordLength <= 10) {
    strength = "Medium";
} else {
    strength = "Strong";
}

console.log("Password strength is: ", strength);
