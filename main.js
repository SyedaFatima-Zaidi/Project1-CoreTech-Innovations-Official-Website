/* main.js — small interactive helpers (nav toggle, contact form fallback) */

/* NAV TOGGLE for small screens */
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('nav-toggle');
  const navList = document.getElementById('nav-list');

  if (toggle && navList) {
    toggle.addEventListener('click', () => {
      navList.style.display = (navList.style.display === 'flex') ? 'none' : 'flex';
      navList.style.flexDirection = 'column';
    });

    // close nav when clicking a link (mobile)
    navList.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        if (window.innerWidth < 680) navList.style.display = 'none';
      });
    });
  }
});

/* CONTACT FORM: basic client-side validation + mailto fallback */
function formSubmit(event) {
  // If called from contact.html onsubmit
  if (!event) return true;
  event.preventDefault();

  const form = event.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    alert('Please fill all fields.');
    return false;
  }

  // Create mailto link (simple fallback)
  const subject = encodeURIComponent('Website Contact from ' + name);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  const mailto = `mailto:info@coretech.com?subject=${subject}&body=${body}`;

  // open user's email client
  window.location.href = mailto;
  return false;
}

/* Make formSubmit accessible as global (used in contact.html inline onsubmit) */
window.formSubmit = formSubmit;
