const handleSubmit = () => {
  console.log("Aqui");
};

const handleRegister = (e) => {
  e.preventDefault();
  console.log("aqui");
  console.log(e.target.value);
};

const maskPhone = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d{4})(\d)/, "$1-$2");
};
