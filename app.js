const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('#menu');
const closebtn = document.querySelector('.close-btn');
const menuitems = document.querySelectorAll('.menu-item');
const speakerCards = document.querySelector('.speaker-cards');

hamburger.addEventListener('click', () => {
  menu.style.display = 'flex';
});

closebtn.addEventListener('click', () => {
  menu.style.display = 'none';
});

[...menuitems].forEach((menuitem) => {
  menuitem.addEventListener('click', () => {
    menu.style.display = 'none';
  });
});

const speakers = [
  {
    name: 'Yohai Benkler',
    occupation: 'Professor at Harvard University',
    description: 'Focusing on a collaborative and approach in a networked environment',
    featured_image: 'images/speaker1.png',
  },
  {
    name: 'James Paul',
    occupation: 'Professor at Harvard University',
    description: 'Focusing on a collaborative and approach in a networked environment',
    featured_image: 'images/speaker2.png',
  },
  {
    name: 'Jake Jonathan',
    occupation: 'Professor at Oxford University',
    description: 'Focusing on a collaborative and approach in a networked environment',
    featured_image: 'images/speaker2.png',
  },
  {
    name: 'Alex Stephano',
    occupation: 'Professor at Toronto University',
    description: 'Focusing on a collaborative and approach in a networked environment',
    featured_image: 'images/speaker3.png',
  },
  {
    name: 'Ashraf Stephano',
    occupation: 'Professor at Azhar University',
    description: 'Focusing on a collaborative and approach in a networked environment',
    featured_image: 'images/speaker4.png',
  },
  {
    name: 'Hamza Alex',
    occupation: 'Professor at Calfphonia University',
    description: 'Focusing on a collaborative and approach in a networked environment',
    featured_image: 'images/speaker5.png',
  },
  {
    name: 'Tony James',
    occupation: 'Professor at Calfphonia University',
    description: 'Focusing on a collaborative and approach in a networked environment',
    featured_image: 'images/speaker6.png',
  },
];

const cards = speakers.map((speaker) => (
  `<div class="speakers-event-card more-speaker">
    <div class="program-icon">
        <img src="${speaker.featured_image}" alt="Speaker's Image" class="speaker-img">
        </div>
        <div class="speakers-desc">
        <b class="speakers-item-title">${speaker.name}</b>
        <p  class="speakers-item-sub-title">${speaker.occupation}</p>
        <hr class="speaker-title-hr">
        <p class="speakers-item-desc">${speaker.description}</p>
    </div>
    </div>`
)).join('');

// speakerCards.innerHTML = cards;
