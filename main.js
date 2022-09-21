/* eslint-disable no-undef */
const mobileMenu = document.getElementById('mobile-menu');
const body = document.querySelector('.body');
const menuItemZero = document.querySelector('.mobile-menu-item-0');
const menuItemOne = document.querySelector('.mobile-menu-item-1');
const menuItemTwo = document.querySelector('.mobile-menu-item-2');
const menuItemThree = document.querySelector('.mobile-menu-item-3');
const meunuIcon = document.querySelector('.menu-container');
const viewMoreOrLess = document.querySelector('.view-more');
const viewMoreOrLessText = document.querySelector('.view-more-content');
const viewMoreOrLessIcon = document.querySelector('.view-more-icon');

// eslint-disable-next-line no-unused-vars
function toggleMenu(x) {
  x.classList.toggle('change');
  mobileMenu.classList.toggle('mobile-menu');
  mobileMenu.classList.toggle('displayNone');
  body.classList.toggle('overflow-hidden');
}

function revertChanges() {
  meunuIcon.classList.remove('change');
  mobileMenu.classList.remove('mobile-menu');
  mobileMenu.classList.add('displayNone');
  body.classList.remove('overflow-hidden');
}

menuItemZero.onclick = (() => {
  revertChanges();
  return true;
});

menuItemOne.onclick = (() => {
  revertChanges();
  return true;
});

menuItemTwo.onclick = (() => {
  revertChanges();
  return true;
});

menuItemThree.onclick = (() => {
  revertChanges();
  return true;
});

let speakers = [
  {
    name: 'Yochai Benkler',
    image: 'images/speaker1.jpeg',
    title: 'Front-end Software Engineer at safaricom PLC',
    bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
  },
  {
    name: 'Yochai Benkler',
    image: 'images/speaker2.jpeg',
    title: 'Front-end Software Engineer at safaricom PLC',
    bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
  },
  {
    name: 'Yochai Benkler',
    image: 'images/speaker3.jpeg',
    title: 'Front-end Software Engineer at safaricom PLC',
    bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
  },
  {
    name: 'Yochai Benkler',
    image: 'images/speaker4.jpeg',
    title: 'Front-end Software Engineer at safaricom PLC',
    bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
  },
  {
    name: 'Yochai Benkler',
    image: 'images/speaker5.jpeg',
    title: 'Front-end Software Engineer at safaricom PLC',
    bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
  },
  {
    name: 'Yochai Benkler',
    image: 'images/speaker6.jpeg',
    title: 'Front-end Software Engineer at safaricom PLC',
    bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
  },
];

const filteredSpeakers = speakers;
let speakerList = '';

function createFeaturedSpeakers(speakers) {
  speakers.forEach((speaker) => {
    speakerList += `
      <li class="speaker">
        <div class="speaker-image"><img src="${speaker.image}" alt="speaker image"></div>
        <div class="speaker-content">
          <h1 class="speaker-name">${speaker.name}</h1>
          <p class="speaker-title">${speaker.title}</p>
          <div class="speaker-line"></div>
          <p class="speaker-bio">${speaker.bio}</p>
        </div>
      </li>
   `;
  });

  const speakersSection = document.querySelector('.speakers');
  speakersSection.innerHTML = speakerList;
}

speakers = speakers.slice(0, 2);

viewMoreOrLess.onclick = (() => {
  viewMoreOrLessIcon.classList.toggle('rotateImage');
  if (speakers.length > 2) {
    speakers = speakers.slice(0, 2);
    speakerList = '';
    createFeaturedSpeakers(speakers);
    viewMoreOrLessText.textContent = 'MORE';
    return;
  }
  if (speakers.length === 2) {
    speakerList = '';
    createFeaturedSpeakers(filteredSpeakers);
    speakers = filteredSpeakers;
    viewMoreOrLessText.textContent = 'LESS';
  }
});

window.addEventListener('resize', () => {
  const screenWidth = window.innerWidth || document.documentElement.clientWidth
    || document.body.clientWidth;
  if (screenWidth >= 768) {
    speakerList = '';
    createFeaturedSpeakers(filteredSpeakers);
  } else {
    speakerList = '';
    createFeaturedSpeakers(speakers);
  }
});

window.addEventListener('load', () => {
  const screenWidth = window.innerWidth || document.documentElement.clientWidth
    || document.body.clientWidth;
  if (screenWidth > 768) {
    speakerList = '';
    createFeaturedSpeakers(filteredSpeakers);
  } else {
    speakerList = '';
    createFeaturedSpeakers(speakers);
  }
});
