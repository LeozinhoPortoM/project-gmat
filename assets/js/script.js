const fields = document.querySelectorAll("[required]");

function ValidateField(field) {
  function verifyErrors() {
    let foundError = false;

    for (const error in field.validity) {
      if (field.validity[error] && !field.validity.valid) {
        foundError = true;
      }
    }
    return foundError;
  }
  function setCustomMessage(message) {
    const spanError = field.parentNode.querySelector("span.error");

    if (message) {
      spanError.innerHTML = message;
    } else {
      spanError.innerHTML = "";
    }
  }
  return function () {
    if (verifyErrors()) {
      field.style.borderColor = "red";
      setCustomMessage("Campo obrigatório");
    } else {
      field.style.borderColor = "#2094f3";
      setCustomMessage();
    }
  };
}

function customValidation(e) {
  const field = e.target;

  const validation = ValidateField(field);
  validation();
}

for (const field of fields) {
  field.addEventListener("invalid", (e) => {
    e.preventDefault();
    customValidation(e);
  });
  field.addEventListener("blur", customValidation);
}

document.querySelector("#form-register").addEventListener("submit", (e) => {
  e.preventDefault();
});

const cellphoneBrMask = (value) => {
  if (value.length < 3) {
    return value.replace(/\D/g, "").replace(/(\d{2})(\d)/, "($1) $2");
  } else {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)(\d)/, "($1) $2 $3")
      .replace(/(\d{4})(\d)/, "$1-$2")
      .replace(/(-\d{4})\d+?$/, "$1");
  }
};

const cpfMask = (value) => {
  return value
    .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
};

function maskPhone() {
  document.querySelectorAll(".phone").forEach((input) => {
    input.addEventListener(
      "input",
      (e) => {
        e.target.value = cellphoneBrMask(e.target.value);
      },
      false
    );
  });
}

function maskCpf() {
  document.querySelectorAll(".cpf").forEach((input) => {
    input.addEventListener(
      "input",
      (e) => {
        e.target.value = cpfMask(e.target.value);
      },
      false
    );
  });
}
