const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-header nav');
if (toggle && nav) toggle.addEventListener('click', () => nav.classList.toggle('open'));
const form = document.querySelector('#contactForm');
if (form) form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const subject = encodeURIComponent('Website enquiry from ' + data.get('name'));
  const body = encodeURIComponent('Name: ' + data.get('name') + '\nEmail: ' + data.get('email') + '\nService: ' + data.get('service') + '\n\nMessage:\n' + data.get('message'));
  document.querySelector('#formHint').textContent = 'Opening your email app… If it does not open, email roshanshamil54@gmail.com directly.';
  window.location.href = 'mailto:roshanshamil54@gmail.com?subject=' + subject + '&body=' + body;
});
