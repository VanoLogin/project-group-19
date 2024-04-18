import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';
// Default options
new Accordion('.accordion-container');

// User options
new Accordion('.ac', {
  duration: 400,
  showMultiple: true,
});
