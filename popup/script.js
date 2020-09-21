
document.getElementById("generate").addEventListener("click", function(){
    generate();
}, false)

document.getElementById("clipboard").addEventListener("click", function(){
    copyToClipboard();
}, false)

function generate() {
    charset = ""
    document.getElementById("outputbox").innerHTML = charset
    if(document.getElementById("capital").checked){
        charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    if(document.getElementById("lowercase").checked){
        charset += "abcdefghijklmnopqrstuvwxyz"
    }
    if(document.getElementById("numbers").checked){
        charset += "0123456789"
    }
    if(document.getElementById("symbols").checked){
        charset += "!$&*-=?@~";
    }
    if(charset == ""){
        charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!$&*-=?@~"
    }
    document.getElementById("outputbox").innerHTML = generatePassword(charset)
    document.getElementById("clipboard").style.visibility = 'visible';
}
function generatePassword(charset){
    length  = Math.floor((Math.random() * 10) + 15)
    pwd = ""
    for (i=0; i <= length; i++){
        randomcspos = Math.floor((Math.random() * charset.length))
        pwd += charset.charAt(randomcspos)
    }
    return pwd
}
function copyToClipboard(){
    const texttocopy = document.getElementById("outputbox");
    texttocopy.select();
    document.execCommand('copy'); 
    texttocopy.blur();
}

