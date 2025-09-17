window.addEventListener('DOMContentLoaded', () => {
  if (document.documentElement.classList.contains('dark')) {
    for (let i = 0; i < 30; i++) {
      const firefly = document.createElement('div');
      firefly.className = 'firefly';
      document.body.appendChild(firefly);
    }
  }
});