 const form = document.querySelector('form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { 'Accept': 'application/json' }
    });
    if (response.ok) {
      alert('Message sent successfully!');
      form.reset();
    } else {
      alert('Oops! Something went wrong.');
    }
  });

  const toggleBtn = document.getElementById('theme-toggle');

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');

       if (document.body.classList.contains('dark')) {
        toggleBtn.textContent = 'Dark Mode';
    } else {
        toggleBtn.textContent = 'Light Mode';
    }
  });
