setTimeout(function() {

    // TOP HOVERS

  document.querySelector('#navbar-top-right-top').addEventListener('mouseover', function(){
    if (topicSelected != '#navbar-top-right-top') {
      toggleHover('#navbar-top-right-top', 'navbar-top-x-top-color', '#navbar-top-middle-top');
    }
  });

  document.querySelector('#navbar-top-right-top').addEventListener('mouseout', function(){
    if (topicSelected != '#navbar-top-right-top') {
      toggleHover('#navbar-top-right-top', 'navbar-top-x-top-color', '#navbar-top-middle-top');
    }
  });

  document.querySelector('#navbar-top-right-bottom').addEventListener('mouseover', function(){
    if (topicSelected != '#navbar-top-right-bottom') {
      toggleHover('#navbar-top-right-bottom', 'navbar-top-x-bottom-color', '#navbar-top-middle-bottom');
    }
  });

  document.querySelector('#navbar-top-right-bottom').addEventListener('mouseout', function(){
    if (topicSelected != '#navbar-top-right-bottom') {
      toggleHover('#navbar-top-right-bottom', 'navbar-top-x-bottom-color', '#navbar-top-middle-bottom');
    }
  });

        // MIDDLE HOVERS (NO FUNCTION CALL)

  document.querySelector('#navbar-middle-middle').addEventListener('mouseover', function(){
    if (topicSelected != '#navbar-middle-middle') {
      document.querySelector('#navbar-middle-middle').classList.toggle('navbar-middle-x-color')
      document.querySelector('#navbar-middle-left').classList.toggle('zero-opacity');
      document.querySelector('#navbar-middle-right').classList.toggle('zero-opacity');
    }
  });

  document.querySelector('#navbar-middle-middle').addEventListener('mouseout', function(){
    if (topicSelected != '#navbar-middle-middle') {
      document.querySelector('#navbar-middle-left').classList.toggle('zero-opacity');
      document.querySelector('#navbar-middle-right').classList.toggle('zero-opacity');
      document.querySelector('#navbar-middle-middle').classList.toggle('navbar-middle-x-color')
    }
  });

        // BOTTOM HOVERS

  document.querySelector('#navbar-bottom-left-top').addEventListener('mouseover', function(){
    if (topicSelected != '#navbar-bottom-left-top') {
      toggleHover('#navbar-bottom-left-top', 'navbar-bottom-x-top-color', '#navbar-bottom-middle-top');
    }
  });

  document.querySelector('#navbar-bottom-left-top').addEventListener('mouseout', function(){
    if (topicSelected != '#navbar-bottom-left-top') {
      toggleHover('#navbar-bottom-left-top', 'navbar-bottom-x-top-color', '#navbar-bottom-middle-top');
    }
  });

  document.querySelector('#navbar-bottom-left-bottom').addEventListener('mouseover', function(){
    if (topicSelected != '#navbar-bottom-left-bottom') {
      toggleHover('#navbar-bottom-left-bottom', 'navbar-bottom-x-bottom-color', '#navbar-bottom-middle-bottom');
    }
  });

  document.querySelector('#navbar-bottom-left-bottom').addEventListener('mouseout', function(){
    if (topicSelected != '#navbar-bottom-left-bottom') {
      toggleHover('#navbar-bottom-left-bottom', 'navbar-bottom-x-bottom-color', '#navbar-bottom-middle-bottom');
    }
  });

        // TOP CLICKS

  document.querySelector('#navbar-top-right-top').addEventListener('click', function(){
    topicSelected = setTopicSelected('#navbar-top-right-top', topicSelected);

    setTopicSelectedColor('#navbar-text-right-top', 'navbar-top-x-top-color');

    moveContentPanesToRight();

    toggleContentPanesVisibility('.visualart');
  });

  document.querySelector('#navbar-top-right-bottom').addEventListener('click', function(){
    topicSelected = setTopicSelected('#navbar-top-right-bottom', topicSelected);

    setTopicSelectedColor('#navbar-text-right-bottom', 'navbar-top-x-bottom-color');

    moveContentPanesToRight();

    toggleContentPanesVisibility('.tech');
  });

         // MIDDLE CLICK

  document.querySelector('#navbar-middle-middle').addEventListener('click', function(){
    topicSelected = setTopicSelected('#navbar-middle-middle', topicSelected);

    document.querySelector('#navbar-text-left-middle').classList.toggle('navbar-middle-x-color');
    document.querySelector('#navbar-text-right-middle').classList.toggle('navbar-middle-x-color');
    document.querySelector('#navbar-middle-middle').classList.toggle('navbar-middle-line-color');
    document.querySelector('#navbar-middle-middle').classList.toggle('navbar-middle-line-color-clicked');

    const navbar = document.querySelector('#navbar');
    const left = document.querySelector('#left');
    const right = document.querySelector('#right');
    if (navbar.classList.contains('pos-navbar-to-left')) {
      navbar.classList.toggle('pos-navbar-to-left');
      navbar.classList.toggle('pos-original-position');
      left.classList.toggle('pos-screen-left-to-right');
      left.classList.toggle('pos-original-position');
    }
    if (navbar.classList.contains('pos-navbar-to-right')) {
      navbar.classList.toggle('pos-navbar-to-right');
      navbar.classList.toggle('pos-original-position');
      right.classList.toggle('pos-screen-right-to-left');
      right.classList.toggle('pos-original-position');
    }

    toggleContentPanesVisibility('.about-me')
  });

        // BOTTOM CLICKS

  document.querySelector('#navbar-bottom-left-top').addEventListener('click', function(){
    topicSelected = setTopicSelected('#navbar-bottom-left-top', topicSelected);

    setTopicSelectedColor('#navbar-text-left-top', 'navbar-bottom-x-top-color');

    moveContentPanesToLeft();

    toggleContentPanesVisibility('.music')
  });

  document.querySelector('#navbar-bottom-left-bottom').addEventListener('click', function(){
    topicSelected = setTopicSelected('#navbar-bottom-left-bottom', topicSelected);

    setTopicSelectedColor('#navbar-text-left-bottom', 'navbar-bottom-x-bottom-color');

    moveContentPanesToLeft();

    toggleContentPanesVisibility('.fitness');
  });

}, 2500);

let topicSelected = '';

function toggleHover(topic, colorClass, middleSection) {
  document.querySelector(middleSection).classList.toggle(colorClass);
  document.querySelector(topic).classList.toggle('zero-opacity');
}

function setTopicSelected(callerTopic, topicSelected) {
  if (topicSelected == '') return callerTopic;
  else if (topicSelected == callerTopic) return '';
  else {
    deselect(topicSelected);
    return callerTopic;
  }
}

function deselect(topic) {
  switch (topic) {
    case '#navbar-top-right-top':
      deselectTopic(topic, '#navbar-text-right-top', 'navbar-top-x-top-color', '#navbar-top-middle-top');
      break;
    case '#navbar-top-right-bottom':
      deselectTopic(topic, '#navbar-text-right-bottom', 'navbar-top-x-bottom-color', '#navbar-top-middle-bottom');
      break;
    // MIDDLE DESELECTION (NO FUNCTION CALL)
    case '#navbar-middle-middle':
      document.querySelector('#navbar-middle-left').classList.toggle('zero-opacity');
      document.querySelector('#navbar-middle-right').classList.toggle('zero-opacity');
      document.querySelector('#navbar-text-left-middle').classList.toggle('navbar-middle-x-color');
      document.querySelector('#navbar-text-right-middle').classList.toggle('navbar-middle-x-color');
      document.querySelector('#navbar-middle-middle').classList.toggle('navbar-middle-x-color');
      document.querySelector('#navbar-middle-middle').classList.toggle('navbar-middle-line-color');
      document.querySelector('#navbar-middle-middle').classList.toggle('navbar-middle-line-color-clicked');
      break;
    case '#navbar-bottom-left-top':
      deselectTopic(topic, '#navbar-text-left-top', 'navbar-bottom-x-top-color', '#navbar-bottom-middle-top');
      break;
    case '#navbar-bottom-left-bottom':
      deselectTopic(topic, '#navbar-text-left-bottom', 'navbar-bottom-x-bottom-color', '#navbar-bottom-middle-bottom');
      break;
    default:
      console.log('BUG');
  }
}

function deselectTopic(topic, text, colorClass, middleSection) {
  document.querySelector(topic).classList.toggle('zero-opacity');
  document.querySelector(text).classList.toggle(colorClass);
  document.querySelector(middleSection).classList.toggle(colorClass);
}

function setTopicSelectedColor(topicElement, colorClass) {
  document.querySelector(topicElement).classList.toggle(colorClass);
}

const navbar = document.querySelector('#navbar');
const left = document.querySelector('#left');
const right = document.querySelector('#right');

function moveContentPanesToRight() {
  if (navbar.classList.contains('pos-original-position')) {
    navbar.classList.toggle('pos-original-position');
    navbar.classList.toggle('pos-navbar-to-left');
    left.classList.toggle('pos-original-position');
    left.classList.toggle('pos-screen-left-to-right');
  }
  else if (navbar.classList.contains('pos-navbar-to-right')) {
    navbar.classList.toggle('pos-navbar-to-right');
    navbar.classList.toggle('pos-navbar-to-left');
    right.classList.toggle('pos-screen-right-to-left');
    right.classList.toggle('pos-original-position');
    left.classList.toggle('pos-original-position');
    left.classList.toggle('pos-screen-left-to-right');
  }
  else if (navbar.classList.contains('pos-navbar-to-left') && topicSelected == '') {
    navbar.classList.toggle('pos-navbar-to-left');
    navbar.classList.toggle('pos-original-position');
    left.classList.toggle('pos-screen-left-to-right');
    left.classList.toggle('pos-original-position');
  }
}

function moveContentPanesToLeft() {
  if (navbar.classList.contains('pos-original-position')) {
    navbar.classList.toggle('pos-original-position');
    navbar.classList.toggle('pos-navbar-to-right');
    right.classList.toggle('pos-original-position');
    right.classList.toggle('pos-screen-right-to-left');
  }
  else if (navbar.classList.contains('pos-navbar-to-left')) {
    navbar.classList.toggle('pos-navbar-to-left');
    navbar.classList.toggle('pos-navbar-to-right');
    left.classList.toggle('pos-screen-left-to-right');
    left.classList.toggle('pos-original-position');
    right.classList.toggle('pos-original-position');
    right.classList.toggle('pos-screen-right-to-left');
  }
  else if (navbar.classList.contains('pos-navbar-to-right') && topicSelected == '') {
    navbar.classList.toggle('pos-navbar-to-right');
    navbar.classList.toggle('pos-original-position');
    right.classList.toggle('pos-screen-right-to-left');
    right.classList.toggle('pos-original-position');
  }
}

const contentPanesLeft = document.querySelector('#left').children;
const contentPanesRight = document.querySelector('#right').children;

function toggleContentPanesVisibility(topic) {
  for (i = 0; i < contentPanesLeft.length; i++) {
    if (contentPanesLeft[i].classList.contains('display')) {
      contentPanesLeft[i].classList.toggle('display');
      contentPanesLeft[i].classList.toggle('display-none');
      contentPanesLeft[i].classList.toggle('zero-opacity');
    }
    if (contentPanesRight[i].classList.contains('display')) {
      contentPanesRight[i].classList.toggle('display');
      contentPanesRight[i].classList.toggle('display-none');
      contentPanesRight[i].classList.toggle('zero-opacity');
    }
  }
  if (topicSelected != '') {
    document.querySelectorAll(topic).forEach((sectionPage) => {
      sectionPage.classList.toggle('display-none');
      sectionPage.classList.toggle('display');
      sectionPage.clientWidth;
      sectionPage.classList.toggle('zero-opacity');
    });
  }
}

let aboutMeHeaderSelected = '';

document.querySelector('#about-me-developer-header').addEventListener('mouseover', function(){
  if (aboutMeHeaderSelected != '#about-me-developer-header') {
    toggleHoverAboutMeHeader('#about-me-developer-header');
  }
});

document.querySelector('#about-me-developer-header').addEventListener('mouseout', function(){
  if (aboutMeHeaderSelected != '#about-me-developer-header') {
    toggleHoverAboutMeHeader('#about-me-developer-header');
  }
});

document.querySelector('#about-me-artist-header').addEventListener('mouseover', function(){
  if (aboutMeHeaderSelected != '#about-me-artist-header') {
  toggleHoverAboutMeHeader('#about-me-artist-header');
}
});

document.querySelector('#about-me-artist-header').addEventListener('mouseout', function(){
  if (aboutMeHeaderSelected != '#about-me-artist-header') {
    toggleHoverAboutMeHeader('#about-me-artist-header');
  }
});

document.querySelector('#about-me-fitness-header').addEventListener('mouseover', function(){
  if (aboutMeHeaderSelected != '#about-me-fitness-header') {
    toggleHoverAboutMeHeader('#about-me-fitness-header');
  }
});

document.querySelector('#about-me-fitness-header').addEventListener('mouseout', function(){
  if (aboutMeHeaderSelected != '#about-me-fitness-header') {
    toggleHoverAboutMeHeader('#about-me-fitness-header');
  }
});

document.querySelector('#about-me-developer-header').addEventListener('click', function(){
  aboutMeHeaderSelected = setAboutMeHeaderSelected('#about-me-developer-header', aboutMeHeaderSelected);
  toggleClickAboutMeHeader('#about-me-developer-header');
  moveAboutMeTop();
  toggleAboutMeBottomVisibility('.about-me-developer');
  toggleIconsVisibility('#developer-icons');
});

document.querySelector('#about-me-artist-header').addEventListener('click', function(){
  aboutMeHeaderSelected = setAboutMeHeaderSelected('#about-me-artist-header', aboutMeHeaderSelected);
  toggleClickAboutMeHeader('#about-me-artist-header');
  moveAboutMeTop();
  toggleAboutMeBottomVisibility('.about-me-artist');
  toggleIconsVisibility('#artist-icons');
});

document.querySelector('#about-me-fitness-header').addEventListener('click', function(){
  aboutMeHeaderSelected = setAboutMeHeaderSelected('#about-me-fitness-header', aboutMeHeaderSelected);
  toggleClickAboutMeHeader('#about-me-fitness-header');
  moveAboutMeTop();
  toggleAboutMeBottomVisibility('.about-me-fitness');
  toggleIconsVisibility('#fitness-icons');
});

function toggleHoverAboutMeHeader(header) {
  document.querySelector(header).classList.toggle('about-me-header-underline');
}

function setAboutMeHeaderSelected(callerAboutMeHeader, aboutMeHeaderSelected) {
  if (aboutMeHeaderSelected == '') return callerAboutMeHeader;
  else if (aboutMeHeaderSelected == callerAboutMeHeader) return '';
  else {
    deselectAboutMeHeader(aboutMeHeaderSelected);
    return callerAboutMeHeader;
  }
}

function toggleClickAboutMeHeader(header) {
  document.querySelector(header).classList.toggle('about-me-header-underline-overline');
}

function deselectAboutMeHeader(header) {
  document.querySelector(header).classList.toggle('about-me-header-underline-overline');
  document.querySelector(header).classList.toggle('about-me-header-underline');
}

const aboutMeTopRight = document.querySelector('#about-me-left-top-right');
const aboutMeTopLeft = document.querySelector('#about-me-left-top-left');

function moveAboutMeTop() {
  if ((aboutMeTopRight.classList.contains('about-me-left-top-original-pos')) ||
  (aboutMeTopRight.classList.contains('about-me-clicked-pos') && aboutMeHeaderSelected == '')) {
    aboutMeTopRight.classList.toggle('about-me-left-top-original-pos');
    aboutMeTopLeft.classList.toggle('about-me-left-top-original-pos');
    aboutMeTopRight.classList.toggle('about-me-clicked-pos');
    aboutMeTopLeft.classList.toggle('about-me-clicked-pos');
  }
}

const aboutMeImages = document.querySelector('#about-me-left-bottom-left').children;
const aboutMeTexts = document.querySelector('#about-me-left-bottom-right').children;

function toggleAboutMeBottomVisibility(header) {
  for (i = 0; i < aboutMeImages.length; i++) {
    if (aboutMeImages[i].classList.contains('display-block')) {
      aboutMeImages[i].classList.toggle('display-block');
      aboutMeImages[i].classList.toggle('display-none');
      aboutMeImages[i].classList.toggle('zero-opacity');
    }
    if (aboutMeTexts[i].classList.contains('display-block')) {
      aboutMeTexts[i].classList.toggle('display-block');
      aboutMeTexts[i].classList.toggle('display-none');
      aboutMeTexts[i].classList.toggle('zero-opacity');
    }
  }
  if (aboutMeHeaderSelected != '') {
    document.querySelectorAll(header).forEach((headerSide) => {
      headerSide.classList.toggle('display-none');
      headerSide.classList.toggle('display-block');
      headerSide.clientWidth;
      headerSide.classList.toggle('zero-opacity');
    });
  }
}

const iconTopics = document.querySelectorAll('.icons')

function toggleIconsVisibility(icons) {
  for (i = 0; i < iconTopics.length; i++) {
    if (iconTopics[i].classList.contains('icons-clicked-pos')) {
      iconTopics[i].classList.toggle('icons-clicked-pos');
      iconTopics[i].classList.toggle('icons-original-pos');
      iconTopics[i].classList.toggle('zero-opacity');
    }
  }
  if (aboutMeHeaderSelected != '') {
    document.querySelector(icons).classList.toggle('zero-opacity');
    document.querySelector(icons).classList.toggle('icons-original-pos');
    document.querySelector(icons).classList.toggle('icons-clicked-pos');
  }
}

let contactMeSelected = false;

document.querySelector('#about-me-right-top').addEventListener('mouseover', function(){
  if (!contactMeSelected) {
    toggleHoverContactMeHeader();
  }
});

document.querySelector('#about-me-right-top').addEventListener('mouseout', function(){
  if (!contactMeSelected) {
    toggleHoverContactMeHeader();
  }
});

document.querySelector('#about-me-right-top').addEventListener('click', function(){
  contactMeSelected = !contactMeSelected;
  toggleClickContactMeHeader();
  toggleContactFormVisibility();
  moveContactMe();
});

function toggleHoverContactMeHeader() {
  document.querySelector('#about-me-intro').classList.toggle('display-none');
  document.querySelector('#about-me-contact-me').classList.toggle('display-none');
}

function toggleClickContactMeHeader() {
  document.querySelector('#about-me-contact-me').classList.toggle('about-me-header-underline-overline');
}

function toggleContactFormVisibility() {
  document.querySelector('#about-me-right-middle').classList.toggle('zero-opacity');
}

function moveContactMe() {
  document.querySelector('#about-me-right-top').classList.toggle('about-me-right-top-original-pos');
  document.querySelector('#about-me-right-top').classList.toggle('about-me-clicked-pos');
}
