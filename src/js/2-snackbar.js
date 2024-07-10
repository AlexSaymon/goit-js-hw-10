import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const elements = {
  delay: document.querySelector(`input[name="delay"]`),
  fulfilled: document.querySelector(`input[value="fulfilled"]`),
  rejected: document.querySelector(`input[value="rejected"]`),
  sbmtBtn: document.querySelector(`button[type="submit"]`),
};

const showToast = message => iziToast.show({ message });

elements.sbmtBtn.addEventListener(`click`, event => {
  event.preventDefault();

  const delay = elements.delay.value;
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (elements.fulfilled.checked) {
        resolve(`✅ Fulfilled promise in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise in ${delay}ms`);
      }
    }, delay);
  })

    .then(showToast)
    .catch(showToast);
});
