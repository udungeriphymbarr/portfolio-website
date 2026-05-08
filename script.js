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

  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const images = document.querySelectorAll(".clickable-img");
  const closeBtn = document.querySelector(".close");

  images.forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
    });
  });

  closeBtn.onclick = () => {
    modal.style.display = "none";
  };

  modal.onclick = (e) => {
    if (e.target !== modalImg) {
      modal.style.display = "none";
    }
  };
