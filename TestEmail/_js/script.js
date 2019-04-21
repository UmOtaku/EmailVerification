var arroba = false; //Create a constante with value of @
var dot = false; //Create a constante with value of .
var isValid = false;

function validate(email) {
  console.log(email);

  for (i = 0; i < email.toString().length; i++) {
    console.log(email[i]);
    if (email[i] == "@") {
      arroba = true;
    }
    if (email[i] == ".") {
      dot = true;
    }
    if (arroba && dot) {
      isValid = true;
    }
  }

  if (email == "@" || email == "." || email == "@." || email == ".@" || email == "") {
    isValid = false;
  }
  if (!isValid) {
    alert("E-mail invalido!");
    window.location.reload();
  } else {
    alert("Funcionou");
  }

  console.log(email);
  document.location.reload();
}
