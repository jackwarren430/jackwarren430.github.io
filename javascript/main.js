

var arrow_image = document.querySelector('.arrow-img');
arrow_image.addEventListener('click', function() {
  window.scrollTo(0, 800);
});


const slideInElements = document.querySelectorAll('.text-block');

const slideInOptions = {
  threshold: 0.5,
  rootMargin: '-50px 0px -50px 0px'
};

const slideInObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, slideInOptions);

slideInElements.forEach(element => {
  slideInObserver.observe(element);
});
