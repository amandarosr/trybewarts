const inputEmail = document.getElementById('getEmail');
const inputSenha = document.getElementById('getPassword');
const buttonLogin = document.getElementById('loginButton');
const buttonSubmit = document.getElementById('submit-btn');
const checkAgree = document.getElementById('agreement');
const comment = document.getElementById('textarea');
const counter = document.getElementById('counter');
const form = document.getElementById('evaluation-form');
const formData = document.getElementById('form-data');

buttonLogin.addEventListener('click', () => {
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

checkAgree.addEventListener('click', () => {
  if (checkAgree.checked === true) {
    buttonSubmit.disabled = false;
  } else {
    buttonSubmit.disabled = true;
  }
});

comment.addEventListener('input', () => {
  counter.innerText = 500 - comment.value.length;
});

const nome = document.getElementById('input-name');
const sobrenome = document.getElementById('input-lastname');
const email = document.getElementById('input-email');
const casas = document.getElementById('house');
const family = document.querySelector('.bloco-familia').children;
const familias = [family[1], family[2], family[4], family[5], family[7], family[8]];
const rating = document.querySelector('.bloco-avaliacao').children;

const getNameValue = () => {
  document.getElementById('log1').innerHTML = `<strong>Nome:</strong> 
  ${nome.value} ${sobrenome.value}`;
};

const getEmailValue = () => {
  document.getElementById('log2').innerHTML = `<strong>Email:</strong> ${email.value}`;
};

const getHouseSelected = () => {
  document.getElementById('log3').innerHTML = `<strong>Casa:</strong> ${casas.value}`;
};

const getFamilySelected = () => {
  for (let index = 0; index < familias.length; index += 2) {
    if (familias[index].checked === true) {
      document.getElementById('log4').innerHTML = `<strong>Família:</strong> 
      ${familias[index + 1].innerHTML}`;
    }
  }
};

const getSubjectsChecked = () => {
  const allSubjects = document.querySelectorAll('input[type="checkbox"]');
  const labels = [];
  for (let index2 = 0; index2 < (allSubjects.length - 1); index2 += 1) {
    if (allSubjects[index2].checked === true) {
      labels.push(allSubjects[index2].value);
    }
  }
  const finalSubjects = labels.join(', ');
  document.getElementById('log5').innerHTML = `<strong>Matérias:</strong> ${finalSubjects}`;
};

const getRatingSelected = () => {
  for (let index3 = 1; index3 < rating.length; index3 += 2) {
    if (rating[index3].checked === true) {
      document.getElementById('log6').innerHTML = `<strong>Avaliação:</strong> 
      ${rating[index3 + 1].innerHTML}`;
    }
  }
};

const getComment = () => {
  document.getElementById('log7').innerHTML = `<strong>Observações:</strong> ${comment.value}`;
};

const showFormData = (event) => {
  event.preventDefault();
  form.style.display = 'none';
  formData.style.display = 'inline-block';
};

buttonSubmit.addEventListener('click', showFormData);
buttonSubmit.addEventListener('click', getNameValue);
buttonSubmit.addEventListener('click', getEmailValue);
buttonSubmit.addEventListener('click', getHouseSelected);
buttonSubmit.addEventListener('click', getFamilySelected);
buttonSubmit.addEventListener('click', getSubjectsChecked);
buttonSubmit.addEventListener('click', getRatingSelected);
buttonSubmit.addEventListener('click', getComment);
