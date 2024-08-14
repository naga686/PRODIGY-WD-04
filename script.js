``javascript
// Add event listener to nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Add event listener to project images
document.querySelectorAll('.project img').forEach(image => {
    image.addEventListener('click', event => {
        // Open project details in a modal window
        const modal = document.createElement('div');
        modal.innerHTML = `
          <h2>${image.alt}</h2>
          <p>${image.title}</p>
          <img src="${image.src}" alt="${image.alt}">
        `;
        document.body.appendChild(modal);
        modal.style.position = 'fixed';
        modal.style.top = '50%';
        modal.style.left = '50%';
        modal.style.transform = 'translate(-50%, -50%)';
        modal.style.background = 'rgba(0, 
        0, 0, 0.5)';
    modal.style.padding = '20px';
    modal.style.borderRadius = '10px';
    modal.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
  });
});

