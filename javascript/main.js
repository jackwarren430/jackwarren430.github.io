var image = document.querySelector('.arrow-img');


image.addEventListener('click', function() {
  window.scrollTo(0, 800);
});

const header = document.getElementById("header");
const subheader = document.getElementById("subheader");
const text = "This is CB Media:";
let index = 0;

function type() {
  header.innerHTML += text[index];
  index++;
  if (index == text.length) {
    header.innerHTML = text;
    setTimeout(function() {
      subheader.style.display = "block";
      subheader.innerHTML = "";
      typeSubheader();
    }, 500);
  } else {
    setTimeout(type, 100);
  }
}

function typeSubheader() {
  const subtext = "We make you seen on the internet.";
  let subIndex = 0;

  function subType() {
    subheader.innerHTML += subtext[subIndex];
    subIndex++;
    if (subIndex == subtext.length) {
      subheader.innerHTML = subtext;
    } else {
      setTimeout(subType, 50);
    }
  }
  header.classList.add('filler');
  subType();
}

type();


const slideInElements = document.querySelectorAll('.block');

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
