// NAVBAR
// VARIABLE DECLARATIONS
let mainTopicSelected = '';

const mainGridNavbar = document.querySelector('#main-grid-navbar');
const mainGridLeft = document.querySelector('#main-grid-left');
const mainGridRight = document.querySelector('#main-grid-right');

setTimeout(function() {

  // TOP HOVERS
  document.querySelector('#navbar-top-right-top').addEventListener('mouseover', function() {
    if (mainTopicSelected != '#navbar-top-right-top') {
      toggleNavbarTopicHover('#navbar-top-right-top');
    }
  });

  document.querySelector('#navbar-top-right-top').addEventListener('mouseout', function() {
    if (mainTopicSelected != '#navbar-top-right-top') {
      toggleNavbarTopicHover('#navbar-top-right-top');
    }
  });

  document.querySelector('#navbar-top-right-bottom').addEventListener('mouseover', function() {
    if (mainTopicSelected != '#navbar-top-right-bottom') {
      toggleNavbarTopicHover('#navbar-top-right-bottom');
    }
  });

  document.querySelector('#navbar-top-right-bottom').addEventListener('mouseout', function() {
    if (mainTopicSelected != '#navbar-top-right-bottom') {
      toggleNavbarTopicHover('#navbar-top-right-bottom');
    }
  });

  // MIDDLE HOVERS
  document.querySelector('#navbar-middle-middle').addEventListener('mouseover', function() {
    if (mainTopicSelected != '#navbar-middle-middle') {
      toggleNavbarMiddleTopicHover();
    }
  });

  document.querySelector('#navbar-middle-middle').addEventListener('mouseout', function() {
    if (mainTopicSelected != '#navbar-middle-middle') {
      toggleNavbarMiddleTopicHover();
    }
  });

  // BOTTOM HOVERS
  document.querySelector('#navbar-bottom-left-top').addEventListener('mouseover', function() {
    if (mainTopicSelected != '#navbar-bottom-left-top') {
      toggleNavbarTopicHover('#navbar-bottom-left-top');
    }
  });

  document.querySelector('#navbar-bottom-left-top').addEventListener('mouseout', function() {
    if (mainTopicSelected != '#navbar-bottom-left-top') {
      toggleNavbarTopicHover('#navbar-bottom-left-top');
    }
  });

  document.querySelector('#navbar-bottom-left-bottom').addEventListener('mouseover', function() {
    if (mainTopicSelected != '#navbar-bottom-left-bottom') {
      toggleNavbarTopicHover('#navbar-bottom-left-bottom');
    }
  });

  document.querySelector('#navbar-bottom-left-bottom').addEventListener('mouseout', function() {
    if (mainTopicSelected != '#navbar-bottom-left-bottom') {
      toggleNavbarTopicHover('#navbar-bottom-left-bottom');
    }
  });

  // TOP CLICKS
  document.querySelector('#navbar-top-right-top').addEventListener('click', function() {
    mainTopicSelected = setMainTopicSelected('#navbar-top-right-top');
    toggleNavbarTopicTextColor('#navbar-top-right-top');
    moveMainGridItems_ContentOnRight();
    toggleMainSectionsVisibility('#navbar-top-right-top');
  });

  document.querySelector('#navbar-top-right-bottom').addEventListener('click', function() {
    mainTopicSelected = setMainTopicSelected('#navbar-top-right-bottom');
    toggleNavbarTopicTextColor('#navbar-top-right-bottom');
    moveMainGridItems_ContentOnRight();
    toggleMainSectionsVisibility('#navbar-top-right-bottom');
  });

  // MIDDLE CLICK
  document.querySelector('#navbar-middle-middle').addEventListener('click', function() {
    mainTopicSelected = setMainTopicSelected('#navbar-middle-middle');
    toggleNavbarMiddleTopicTextColor();
    removeMainGridItemsPositionClasses();
    moveMainGridItems_ContentCentered();
    toggleMainSectionsVisibility('#navbar-middle-middle');
  });

  // BOTTOM CLICKS
  document.querySelector('#navbar-bottom-left-top').addEventListener('click', function() {
    mainTopicSelected = setMainTopicSelected('#navbar-bottom-left-top');
    toggleNavbarTopicTextColor('#navbar-bottom-left-top');
    moveMainGridItems_ContentOnLeft();
    toggleMainSectionsVisibility('#navbar-bottom-left-top');
  });

  document.querySelector('#navbar-bottom-left-bottom').addEventListener('click', function() {
    mainTopicSelected = setMainTopicSelected('#navbar-bottom-left-bottom');
    toggleNavbarTopicTextColor('#navbar-bottom-left-bottom');
    moveMainGridItems_ContentOnLeft();
    toggleMainSectionsVisibility('#navbar-bottom-left-bottom');
  });

}, 2500);

// HOVER FUNCTIONS
function toggleNavbarTopicHover(navbarTopic) {
  setColor(getNavbarTopicMiddlePart(navbarTopic), getNavbarTopicColorClass(navbarTopic));
  toggleOpacity(navbarTopic);
}

function toggleNavbarMiddleTopicHover() {
  setColor('#navbar-middle-middle', 'navbar-middle-color');
  toggleOpacity('#navbar-middle-left');
  toggleOpacity('#navbar-middle-right');
}

// CLICK FUNCTIONS
function setMainTopicSelected(callerNavbarTopic) {
  if (mainTopicSelected == '') return callerNavbarTopic;
  else if (mainTopicSelected == callerNavbarTopic) return '';
  else {
    deselect(mainTopicSelected);
    return callerNavbarTopic;
  }
}

function toggleNavbarTopicTextColor(navbarTopic) {
  setColor(getNavbarTopicText(navbarTopic), getNavbarTopicColorClass(navbarTopic));
}

function toggleNavbarMiddleTopicTextColor() {
  setColor('#navbar-text-middle-left', 'navbar-middle-color');
  setColor('#navbar-text-middle-right', 'navbar-middle-color');
  setColor('#navbar-middle-middle', 'navbar-middle-line-color');
  setColor('#navbar-middle-middle', 'navbar-middle-line-color-clicked');
}

function moveMainGridItems_ContentOnRight() {
  removeMainGridItemsPositionClasses();
  if (mainTopicSelected != '') {
    mainGridNavbar.classList.toggle('minus-two-hundred-percent-from-left-position');
    mainGridLeft.classList.toggle('fifty-percent-from-left-position');
    mainGridRight.classList.toggle('zero-percent-from-left-position');
  }
  else moveMainGridItems_ContentCentered();
}

function moveMainGridItems_ContentOnLeft() {
  removeMainGridItemsPositionClasses();
  if (mainTopicSelected != '') {
    mainGridNavbar.classList.toggle('two-hundred-percent-from-left-position');
    mainGridRight.classList.toggle('minus-fifty-percent-from-left-position');
    mainGridLeft.classList.toggle('zero-percent-from-left-position');
  }
  else moveMainGridItems_ContentCentered();
}

function moveMainGridItems_ContentCentered() {
  mainGridNavbar.classList.toggle('zero-percent-from-left-position');
  mainGridLeft.classList.toggle('zero-percent-from-left-position');
  mainGridRight.classList.toggle('zero-percent-from-left-position');
}

function toggleMainSectionsVisibility(navbarTopic) {
  document.querySelectorAll('.main-section.display-grid').forEach((mainSection, i) => {
    mainSection.classList.toggle('display-grid');
    mainSection.classList.toggle('display-none');
    mainSection.classList.toggle('opacity-zero');
  });
  if (navbarTopic != '#navbar-middle-middle') navbarTopic = getMainSectionName(getNavbarTopicText(navbarTopic));
  else navbarTopic = '.about-me';
  if (mainTopicSelected != '') {
    document.querySelectorAll(navbarTopic).forEach((mainSection) => {
      mainSection.classList.toggle('display-none');
      mainSection.classList.toggle('display-grid');
      mainSection.clientWidth;
      mainSection.classList.toggle('opacity-zero');
    });
  }
}

// SUB FUNCTIONS
function setColor(element, colorClass) {
  document.querySelector(element).classList.toggle(colorClass);
}

function toggleOpacity(element) {
  document.querySelector(element).classList.toggle('opacity-zero');
}

function getNavbarTopicMiddlePart(navbarTopic) {
  let navbarTopicArray = navbarTopic.split('-');
  let navbarTopicMiddlePart = '';
  navbarTopicArray.forEach((part, i) => {
    if (i != 2) {
      navbarTopicMiddlePart += part;
      if (i != navbarTopicArray.length - 1) navbarTopicMiddlePart += '-';
    }
    else navbarTopicMiddlePart += 'middle-';
  });
  return navbarTopicMiddlePart;
}

function getNavbarTopicColorClass(navbarTopic) {
  let navbarTopicArray = navbarTopic.split('-');
  let navbarTopicColorClass = '';
  navbarTopicArray.forEach((part, i) => {
    if (i != 2) {
      navbarTopicColorClass += part;
      if (i != navbarTopicArray.length - 1) navbarTopicColorClass += '-';
    }
  });
  navbarTopicColorClass += '-color';
  return navbarTopicColorClass.slice(1);
}

function getNavbarTopicText(navbarTopic) {
  let navbarTopicArray = navbarTopic.split('-');
  let navbarTopicText = '';
  navbarTopicArray.forEach((part, i) => {
    if (i != 2) {
      navbarTopicText += part;
      if (i != navbarTopicArray.length - 1) navbarTopicText += '-';
    }
    if (i == 0) {
      navbarTopicText += 'text-';
    }
  });
  return navbarTopicText;
}

function deselect(navbarTopic) {
  if (navbarTopic == '#navbar-middle-middle') {
    toggleNavbarMiddleTopicTextColor();
    toggleNavbarMiddleTopicHover();
  }
  else {
    toggleNavbarTopicTextColor(navbarTopic);
    toggleNavbarTopicHover(navbarTopic);
  }
}

function removeMainGridItemsPositionClasses() {
  document.querySelectorAll('[class*=main-grid-item][class*=position]').forEach((mainGridItem, i) => {
    mainGridItem.classList.forEach((classValue, i) => {
      if (/position$/.test(classValue)) mainGridItem.classList.remove(classValue);
    });
  });
}

function getMainSectionName(navbarTopicText) {
  return '.' + document.querySelector(navbarTopicText).innerText.toLowerCase().replace(' ', '-');
}

// ABOUT ME LEFT
// VARIABLE DECLARATIONS
let aboutMeHeaderSelected = '';

const aboutMeLeftTopRight = document.querySelector('#about-me-left-top-right');
const aboutMeLeftTopLeft = document.querySelector('#about-me-left-top-left');

// HOVERS
document.querySelector('#about-me-developer-header').addEventListener('mouseover', function() {
  if (aboutMeHeaderSelected != '#about-me-developer-header') {
    toggleAboutMeHeaderHover('#about-me-developer-header');
  }
});

document.querySelector('#about-me-developer-header').addEventListener('mouseout', function() {
  if (aboutMeHeaderSelected != '#about-me-developer-header') {
    toggleAboutMeHeaderHover('#about-me-developer-header');
  }
});

document.querySelector('#about-me-artist-header').addEventListener('mouseover', function() {
  if (aboutMeHeaderSelected != '#about-me-artist-header') {
  toggleAboutMeHeaderHover('#about-me-artist-header');
}
});

document.querySelector('#about-me-artist-header').addEventListener('mouseout', function() {
  if (aboutMeHeaderSelected != '#about-me-artist-header') {
    toggleAboutMeHeaderHover('#about-me-artist-header');
  }
});

document.querySelector('#about-me-fitness-header').addEventListener('mouseover', function() {
  if (aboutMeHeaderSelected != '#about-me-fitness-header') {
    toggleAboutMeHeaderHover('#about-me-fitness-header');
  }
});

document.querySelector('#about-me-fitness-header').addEventListener('mouseout', function() {
  if (aboutMeHeaderSelected != '#about-me-fitness-header') {
    toggleAboutMeHeaderHover('#about-me-fitness-header');
  }
});

// CLICKS
document.querySelector('#about-me-developer-header').addEventListener('click', function() {
  aboutMeHeaderSelected = setAboutMeHeaderSelected('#about-me-developer-header');
  toggleAnimatedTopBorder('#about-me-developer-header');
  moveAboutMeLeftTop();
  toggleAboutMeBottomVisibility('#about-me-developer-header');
  toggleIconsVisibility('#about-me-developer-header');
});

document.querySelector('#about-me-artist-header').addEventListener('click', function() {
  aboutMeHeaderSelected = setAboutMeHeaderSelected('#about-me-artist-header');
  toggleAnimatedTopBorder('#about-me-artist-header');
  moveAboutMeLeftTop();
  toggleAboutMeBottomVisibility('#about-me-artist-header');
  toggleIconsVisibility('#about-me-artist-header');
});

document.querySelector('#about-me-fitness-header').addEventListener('click', function() {
  aboutMeHeaderSelected = setAboutMeHeaderSelected('#about-me-fitness-header');
  toggleAnimatedTopBorder('#about-me-fitness-header');
  moveAboutMeLeftTop();
  toggleAboutMeBottomVisibility('#about-me-fitness-header');
  toggleIconsVisibility('#about-me-fitness-header');
});

// HOVER FUNCTION
function toggleAboutMeHeaderHover(aboutMeHeader) {
  document.querySelector(aboutMeHeader).classList.toggle('about-me-header-hovered');
}

// CLICK FUNCTIONS
function setAboutMeHeaderSelected(callerAboutMeHeader) {
  if (aboutMeHeaderSelected == '') return callerAboutMeHeader;
  else if (aboutMeHeaderSelected == callerAboutMeHeader) return '';
  else {
    deselectAboutMeHeader(aboutMeHeaderSelected);
    return callerAboutMeHeader;
  }
}

function toggleAnimatedTopBorder(aboutMeHeader) {
  document.querySelector(aboutMeHeader + '-top').classList.toggle('animated-top-border-clicked');
}

function moveAboutMeLeftTop() {
  if ((aboutMeLeftTopRight.classList.contains('fifty-percent-from-top-position')) ||
  (aboutMeLeftTopRight.classList.contains('zero-percent-from-top-position') && aboutMeHeaderSelected == '')) {
    aboutMeLeftTopRight.classList.toggle('fifty-percent-from-top-position');
    aboutMeLeftTopLeft.classList.toggle('fifty-percent-from-top-position');
    aboutMeLeftTopRight.classList.toggle('zero-percent-from-top-position');
    aboutMeLeftTopLeft.classList.toggle('zero-percent-from-top-position');
  }
}

function toggleAboutMeBottomVisibility(aboutMeHeader) {
  document.querySelectorAll('.about-me-sub-image.display-block, .about-me-text.display-block').forEach((aboutMeBottomSide, i) => {
    aboutMeBottomSide.classList.toggle('display-block');
    aboutMeBottomSide.classList.toggle('display-none');
    aboutMeBottomSide.classList.toggle('opacity-zero');
  });
  if (aboutMeHeaderSelected != '') {
    document.querySelectorAll(aboutMeHeader.replace('header', 'section').replace('#', '.')).forEach((aboutMeBottomSide) => {
      aboutMeBottomSide.classList.toggle('display-none');
      aboutMeBottomSide.classList.toggle('display-block');
      aboutMeBottomSide.clientWidth;
      aboutMeBottomSide.classList.toggle('opacity-zero');
    });
  }
}

function toggleIconsVisibility(aboutMeHeader) {
  document.querySelectorAll('.icons.zero-percent-from-left-position').forEach((iconSet, i) => {
    iconSet.classList.toggle('zero-percent-from-left-position');
    iconSet.classList.toggle('minus-seventy-five-percent-from-left-position');
    iconSet.classList.toggle('opacity-zero');
  });
  if (aboutMeHeaderSelected != '') {
    iconSetName = aboutMeHeader.replace('about-me-', '').replace('header', 'icons');
    toggleOpacity(iconSetName);
    document.querySelector(iconSetName).classList.toggle('minus-seventy-five-percent-from-left-position');
    document.querySelector(iconSetName).classList.toggle('zero-percent-from-left-position');
  }
}

// SUB FUNCTIONS
function deselectAboutMeHeader(aboutMeHeader) {
  toggleAnimatedTopBorder(aboutMeHeader);
  toggleAboutMeHeaderHover(aboutMeHeader);
}

// ABOUT ME RIGHT - CONTACT ME HEADER
// VARIABLE DECLARATIONS
let contactMeHeaderSelected = false;

// HOVERS
document.querySelector('#about-me-contact-me-header').addEventListener('mouseover', function() {
  if (!contactMeHeaderSelected) {
    toggleAboutMeHeaderHover('#about-me-contact-me-header');
  }
});

document.querySelector('#about-me-contact-me-header').addEventListener('mouseout', function() {
  if (!contactMeHeaderSelected) {
    toggleAboutMeHeaderHover('#about-me-contact-me-header');
  }
});

// CLICK
document.querySelector('#about-me-contact-me-header').addEventListener('click', function() {
  contactMeHeaderSelected = !contactMeHeaderSelected;
  toggleAnimatedTopBorder('#about-me-contact-me-header');
  toggleOpacity('#about-me-right-middle');
  moveAboutMeRightTop();
});

// CLICK FUNCTION
function moveAboutMeRightTop() {
  document.querySelector('#about-me-right-top').classList.toggle('hundred-percent-from-top-position');
  document.querySelector('#about-me-right-top').classList.toggle('zero-percent-from-top-position');
}

// ABOUT ME RIGHT - FORMS
// CLICKS
document.querySelector('#topic-form-next-button').addEventListener('click', function() {
  if (validateInput('#topic-form')) {
    toggleFormVisibility('#topic-form');
    toggleFormVisibility('#message-form');
    toggleProgressBar('#progress-bar-one');
  }
  else displayAlert('#topic-form-next-button');
});

document.querySelector('#message-form-back-button').addEventListener('click', function() {
  toggleFormVisibility('#message-form');
  toggleFormVisibility('#topic-form');
  toggleProgressBar('#progress-bar-one');
});

document.querySelector('#message-form-next-button').addEventListener('click', function() {
  if (validateInput('#message-form')) {
    toggleFormVisibility('#message-form');
    toggleFormVisibility('#details-form');
    toggleProgressBar('#progress-bar-two');
  }
  else displayAlert('#message-form-next-button');
});

document.querySelector('#details-form-back-button').addEventListener('click', function() {
  toggleFormVisibility('#details-form');
  toggleFormVisibility('#message-form');
  toggleProgressBar('#progress-bar-two');
});

document.querySelector('#details-form-submit-button').addEventListener('click', function() {
  if (validateInput('#details-form')) {
    if (validateEmail('#details-form-email')) {
      toggleFormVisibility('#details-form');
      toggleFormVisibility('#submitted-page');
      toggleProgressBar('#progress-bar-three');
      resetAllInputValues();
      setTimeout(function() {
        toggleFormVisibility('#submitted-page');
        toggleFormVisibility('#topic-form');
        toggleProgressBar('#progress-bar-three');
        toggleProgressBar('#progress-bar-two');
        toggleProgressBar('#progress-bar-one');
      }, 3000);
    }
    else displayAlert('#details-form-submit-button');
  }
  else displayAlert('#details-form-submit-button');
});

// CLICK FUNCTIONS
function validateInput(form) {
  let counter = true;
  document.querySelector(form).querySelectorAll('.validatable').forEach((input) => {
    if (input.value == '') {
      counter = false;
      return counter;
    }
  });
  return counter;
}

function toggleFormVisibility(form) {
  toggleDisplayNone(form);
  document.querySelector(form).clientWidth;
  toggleOpacity(form);
}

function toggleProgressBar(progressBarPart) {
  document.querySelector(progressBarPart).classList.toggle('form-progress-bar-complete');
}

function displayAlert(buttonID) {
  const button = document.querySelector(buttonID);
  const originalValue = button.value;
  button.disabled = true;
  button.classList.toggle('text-decoration-none');
  button.value = 'Please complete all fields!';
  setTimeout(function() {
    button.value = originalValue;
    button.classList.toggle('text-decoration-none');
    button.disabled = false;
  }, 1500);
}

function validateEmail(emailInput) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(document.querySelector(emailInput).value);
}

function resetAllInputValues() {
  document.querySelector('#form-container').querySelectorAll('.validatable').forEach((input) => {
    input.value = '';
  });
}

// SUB FUNCTIONS
function toggleDisplayNone(element) {
  document.querySelector(element).classList.toggle('display-none');
}

// ABOUT ME RIGHT - CONTACT ME DIRECT
// HOVERS
document.querySelector('#contact-me-email-container').addEventListener('mouseover', function() {
  toggleContactMeDirectHover('#contact-me-email-container');
});

document.querySelector('#contact-me-email-container').addEventListener('mouseout', function() {
  toggleContactMeDirectHover('#contact-me-email-container');
});

document.querySelector('#contact-me-phone-container').addEventListener('mouseover', function() {
  toggleContactMeDirectHover('#contact-me-phone-container');
});

document.querySelector('#contact-me-phone-container').addEventListener('mouseout', function() {
  toggleContactMeDirectHover('#contact-me-phone-container');
});

document.querySelector('#contact-me-location-container').addEventListener('mouseover', function() {
  toggleContactMeDirectHover('#contact-me-location-container');
});

document.querySelector('#contact-me-location-container').addEventListener('mouseout', function() {
  toggleContactMeDirectHover('#contact-me-location-container');
});

// CLICKS
document.querySelector('#contact-me-email-container').addEventListener('click', function() {
  window.location.href = 'mailto:nishant.parshurampuria@gmail.com';
});

document.querySelector('#contact-me-phone-container').addEventListener('click', function() {
  copyText('#contact-me-phone-container');
  showCopiedAlert('#contact-me-phone-container');
});

document.querySelector('#contact-me-location-container').addEventListener('click', function() {
  copyText('#contact-me-location-container');
  showCopiedAlert('#contact-me-location-container');
});

// HOVER FUNCTION
function toggleContactMeDirectHover(contactMeDirectDetail) {
  Array.from(document.querySelector(contactMeDirectDetail).children).forEach((element) => {
    element.classList.toggle('contact-me-direct-hovered');
  });
}

// CLICK FUNCTIONS
function copyText(contactMeDirectDetail) {
  const textArea = document.createElement('textarea');
  textArea.value = document.querySelector(contactMeDirectDetail.replace('container', 'text')).innerText;
  document.body.append(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
}

function showCopiedAlert(contactMeDirectDetail) {
  const textElement = document.querySelector(contactMeDirectDetail.replace('container', 'text'));
  const originalText = textElement.innerText;
  textElement.innerText = 'Copied!';
  setTimeout(function() {
    textElement.innerText = originalText;
  }, 1000);
}
