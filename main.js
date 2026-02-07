document.addEventListener("DOMContentLoaded", () => {

  // Появление блоков
  const items = document.querySelectorAll(".animate");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {

          // Для секции contact делаем stagger анимацию иконок
          if (entry.target.id === "contact") {
            const links = entry.target.querySelectorAll("a.animate");
            links.forEach((link, i) => {
              setTimeout(() => link.classList.add("show"), i * 300);
            });
          } else {
            entry.target.classList.add("show");
          }

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
  );
  items.forEach(item => observer.observe(item));

  // Плавный скролл меню
  document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

});


