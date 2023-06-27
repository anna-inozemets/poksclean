AOS.init({
  duration: 1000,
});

function openTab(evt, tabName) {
  const tabcontent = document.querySelectorAll(".main__treatment-description-content");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  const tablinks = document.querySelectorAll(".main__treatment-description-button");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

const accordionItems = document.querySelectorAll('.main__answer-accordion-item');

for (let i = 0; i < accordionItems.length; i++) {
  accordionItems[i].addEventListener('click', toggleAccordion);
}

function toggleAccordion() {
  const accordionContent = this.querySelector('.main__answer-accordion-content');
  const isOpen = accordionContent.classList.contains('active');
  const accordionButton = this.querySelector('.main__answer-accordion-button')

  if (isOpen) {
    accordionContent.style.maxHeight = null;
  } else {
    accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
  }

  accordionContent.classList.toggle('active');
  accordionButton.classList.toggle('active');
}

const burgerMenuButton = document.querySelector('.header__burger-menu-button');
const menu = document.querySelector('.header__burger-menu-list');

burgerMenuButton.addEventListener('click', () => {
  burgerMenuButton.classList.toggle('active');
  menu.classList.toggle('active');
});

const moreContentButton = document.querySelector('.more_button-article');
const moreContentWrapper = document.querySelector('.main__descrtption-paragraph-wrapper')

moreContentButton.addEventListener('click', () => {
  if (!moreContentWrapper.classList.contains('visible')) {
    moreContentButton.innerHTML = 'Менше';
    moreContentWrapper.classList.add('visible');
    moreContentWrapper.style.maxHeight = `${moreContentWrapper.scrollHeight}px`;
  } else {
    moreContentButton.innerHTML = 'Читати далі';
    moreContentWrapper.classList.remove('visible');
    moreContentWrapper.style.maxHeight = '';
  }
});