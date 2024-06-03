const formData = {
  email: '',
  message: '',
};
const feedbackEl = document.querySelector('.feedback-form');
const btnSubmit = document.querySelector('.btn-submit');
const textareaEL = document.querySelector('.textarea-form');

const loadFormData = () => {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    formData = JSON.parse(savedData);
    feedbackEl.elements.email.value = formData.email || '';
    textareaEL.value = formData.message || '';
  }
};

const saveFormData = () => {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

feedbackEl.addEventListener('input', e => {
  formData[e.target.name] = e.target.value;
  saveFormData();
});

feedbackEl.addEventListener('submit', e => {
  e.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  formData = { email: '', message: '' };
  feedbackEl.reset();
});

loadFormData();
