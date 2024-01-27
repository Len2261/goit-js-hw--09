const feedbackForm = document.querySelector('.feedback-form');
const emailForm = document.querySelector('[name="email"]');
const messageForm = document.querySelector('[name="message"]');

feedbackForm.addEventListener('input', event => {
  const email = emailForm.value;
  const message = messageForm.value;

  const myObject = {
    email: email,
    message: message,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(myObject));
});

const saveFeedback = localStorage.getItem('feedback-form-state');
if (saveFeedback !== null) {
  const parseFeedback = JSON.parse(saveFeedback);
  emailForm.value = parseFeedback.email;
  messageForm.value = parseFeedback.message;
}

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();

  const submitEmail = emailForm.value;
  const submitMessage = messageForm.value;

  if (submitEmail.trim() !== '' && submitMessage.trim() !== '') {
    console.log({
      email: submitEmail,
      message: submitMessage,
    });
  }

  emailForm.value = '';
  messageForm.value = '';
});
