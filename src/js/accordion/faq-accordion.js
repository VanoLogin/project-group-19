import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
// Default options
new Accordion('.accordion-container');

// User options
new Accordion('.ac', {
  duration: 400,
  showMultiple: true,
});

// section.addEventListener('click', function (event) {
//   // if (event.target.classList.contains('ac-trigger')) {
//   //   event.preventDefault();
//   //   const currentAnswer = event.target.parentNode.querySelector('.answer-faq');
//   //   if (currentAnswer.classList.contains('is-hidden')) {
//   //     currentAnswer.classList.remove('is-hidden');
//   //   } else {
//   //     currentAnswer.classList.add('is-hidden');
//   //   }
//   // }
//   var btn = event.target;
//   var upClass = 'toggle-up';
//   var downClass = 'toggle-down';
//   const currentEl = btn;
//   if (~btn.className.includes(downClass)) {
//     btn.classList = currentEl.className.replace(downClass, upClass);
//   } else {
//     btn.classList = currentEl.className.replace(upClass, downClass);
//   }
// });
