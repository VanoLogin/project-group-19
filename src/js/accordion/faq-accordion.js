import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
const section = document.querySelector('.container-ac');

const accordion = new Accordion('.container-ac', {
  onOpen: function (target) {
    const currentAnswer = target.querySelector('.answer-faq');

    currentAnswer.classList.remove('is-hidden');
  },
  onClose: function (target) {
    const currentAnswer = target.querySelector('.answer-faq');
    currentAnswer.classList.add('is-hidden');
  },
});

section.addEventListener('click', function (event) {
  if (event.target.classList.contains('ac-trigger')) {
    event.preventDefault();
    const currentAnswer = event.target.parentNode.querySelector('.answer-faq');
    if (currentAnswer.classList.contains('is-hidden')) {
      currentAnswer.classList.remove('is-hidden');
    } else {
      currentAnswer.classList.add('is-hidden');
    }
  }
  var btn = event.target;
  const currentEl = btn;
  if (~btn.className.indexOf(downClass)) {
    btn.classList = currentEl.className.replace(downClass, upClass);
  } else {
    btn.classList = currentEl.className.replace(upClass, downClass);
  }
});
var upClass = 'toggle-up';
var downClass = 'toggle-down';
