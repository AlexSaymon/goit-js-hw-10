import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector(`.form`);
const delayInput = document.querySelector(`input[name="delay"]`);
const radioFul = document.querySelector(`input[value="fulfilled"]`);
const radioRej = document.querySelector(`input[value="rejected"]`);

function formSubmit(event) {
  event.preventDefault();
  const DelayInputValue = delayInput.value;
  const radioFulValue = radioFul.checked;
  const radioRejValue = radioRej.checked;

  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (radioFulValue) {
        resolve(`✅ Fulfilled promise in ${DelayInputValue} ms`);
      } else {
        reject(`❌ Rejected promise in ${DelayInputValue} ms`);
      }
    }, Number(DelayInputValue));
  });
  myPromise
    .then(message => {
      iziToast.success({
        title: 'Success',
        message: message,
        position: 'topRight',
      });
    })
    .catch(message => {
      iziToast.error({
        title: 'Error',
        message: message,
        position: 'topRight',
      });
    });
}

form.addEventListener(`submit`, formSubmit);
