const tabButtons = document.querySelectorAll('[data-button]');
const forms = document.querySelectorAll('[data-form]');

const toggleForm = (data) => {
  const formTarget = document.querySelector(`[data-form='${data}']`);

  forms.forEach((form) => form.classList.add('d-none'));
  formTarget.classList.remove('d-none');
};

const toggleButton = (element) => {
  tabButtons.forEach((button) => button.classList.remove('active'));
  element.classList.add('active');
};

tabButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const data = e.target.getAttribute('data-button');
    toggleButton(e.target);
    toggleForm(data);
  });
});
