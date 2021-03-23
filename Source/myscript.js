setTimeout(function() {

  // TOP HOVERS
  document.querySelector('#navbar-top-right-top').addEventListener('mouseover', function() {
    if (mainTopicSelected != '#navbar-top-right-top') {
      toggleNavbarTopicHover('#navbar-top-right-top', 'navbar-top-top-color', '#navbar-top-middle-top');
    }
  });

  document.querySelector('#navbar-top-right-top').addEventListener('mouseout', function() {
    if (mainTopicSelected != '#navbar-top-right-top') {
      toggleNavbarTopicHover('#navbar-top-right-top', 'navbar-top-top-color', '#navbar-top-middle-top');
    }
  });

  document.querySelector('#navbar-top-right-bottom').addEventListener('mouseover', function() {
    if (mainTopicSelected != '#navbar-top-right-bottom') {
      toggleNavbarTopicHover('#navbar-top-right-bottom', 'navbar-top-bottom-color', '#navbar-top-middle-bottom');
    }
  });

  document.querySelector('#navbar-top-right-bottom').addEventListener('mouseout', function() {
    if (mainTopicSelected != '#navbar-top-right-bottom') {
      toggleNavbarTopicHover('#navbar-top-right-bottom', 'navbar-top-bottom-color', '#navbar-top-middle-bottom');
    }
  });

  // MIDDLE HOVERS
  document.querySelector('#navbar-middle-middle').addEventListener('mouseover', function() {
    if (mainTopicSelected != '#navbar-middle-middle') {
      setColor('#navbar-middle-middle', 'navbar-middle-color');
      setOpacity('#navbar-middle-left');
      setOpacity('#navbar-middle-right');
    }
  });

  document.querySelector('#navbar-middle-middle').addEventListener('mouseout', function() {
    if (mainTopicSelected != '#navbar-middle-middle') {
      setOpacity('#navbar-middle-left');
      setOpacity('#navbar-middle-right');
      setColor('#navbar-middle-middle', 'navbar-middle-color');
    }
  });

  // BOTTOM HOVERS
  document.querySelector('#navbar-bottom-left-top').addEventListener('mouseover', function() {
    if (mainTopicSelected != '#navbar-bottom-left-top') {
      toggleNavbarTopicHover('#navbar-bottom-left-top', 'navbar-bottom-top-color', '#navbar-bottom-middle-top');
    }
  });

  document.querySelector('#navbar-bottom-left-top').addEventListener('mouseout', function() {
    if (mainTopicSelected != '#navbar-bottom-left-top') {
      toggleNavbarTopicHover('#navbar-bottom-left-top', 'navbar-bottom-top-color', '#navbar-bottom-middle-top');
    }
  });

  document.querySelector('#navbar-bottom-left-bottom').addEventListener('mouseover', function() {
    if (mainTopicSelected != '#navbar-bottom-left-bottom') {
      toggleNavbarTopicHover('#navbar-bottom-left-bottom', 'navbar-bottom-bottom-color', '#navbar-bottom-middle-bottom');
    }
  });

  document.querySelector('#navbar-bottom-left-bottom').addEventListener('mouseout', function() {
    if (mainTopicSelected != '#navbar-bottom-left-bottom') {
      toggleNavbarTopicHover('#navbar-bottom-left-bottom', 'navbar-bottom-bottom-color', '#navbar-bottom-middle-bottom');
    }
  });

  // TOP CLICKS
  document.querySelector('#navbar-top-right-top').addEventListener('click', function() {
    mainTopicSelected = setMainTopicSelected('#navbar-top-right-top');
    setColor('#navbar-text-top-top', 'navbar-top-top-color');
    moveMainGridItems_ContentOnRight();
    toggleMainSectionsVisibility('.visual-art');
  });

  document.querySelector('#navbar-top-right-bottom').addEventListener('click', function() {
    mainTopicSelected = setMainTopicSelected('#navbar-top-right-bottom');
    setColor('#navbar-text-top-bottom', 'navbar-top-bottom-color');
    moveMainGridItems_ContentOnRight();
    toggleMainSectionsVisibility('.tech');
  });

  // MIDDLE CLICK
  document.querySelector('#navbar-middle-middle').addEventListener('click', function() {
    mainTopicSelected = setMainTopicSelected('#navbar-middle-middle');

    setColor('#navbar-text-middle-left', 'navbar-middle-color');
    setColor('#navbar-text-middle-right', 'navbar-middle-color');
    setColor('#navbar-middle-middle', 'navbar-middle-line-color');
    setColor('#navbar-middle-middle', 'navbar-middle-line-color-clicked');

    if (mainGridNavbar.classList.contains('minus-two-hundred-percent-from-left-position')) {
      mainGridNavbar.classList.toggle('minus-two-hundred-percent-from-left-position');
      mainGridNavbar.classList.toggle('zero-percent-from-left-position');
      mainGridLeft.classList.toggle('fifty-percent-from-left-position');
      mainGridLeft.classList.toggle('zero-percent-from-left-position');
    }
    if (mainGridNavbar.classList.contains('two-hundred-percent-from-left-position')) {
      mainGridNavbar.classList.toggle('two-hundred-percent-from-left-position');
      mainGridNavbar.classList.toggle('zero-percent-from-left-position');
      mainGridRight.classList.toggle('minus-fifty-percent-from-left-position');
      mainGridRight.classList.toggle('zero-percent-from-left-position');
    }

    toggleMainSectionsVisibility('.about-me');
  });

  // BOTTOM CLICKS
  document.querySelector('#navbar-bottom-left-top').addEventListener('click', function() {
    mainTopicSelected = setMainTopicSelected('#navbar-bottom-left-top');
    setColor('#navbar-text-bottom-top', 'navbar-bottom-top-color');
    moveMainGridItems_ContentOnLeft();
    toggleMainSectionsVisibility('.music');
  });

  document.querySelector('#navbar-bottom-left-bottom').addEventListener('click', function() {
    mainTopicSelected = setMainTopicSelected('#navbar-bottom-left-bottom');
    setColor('#navbar-text-bottom-bottom', 'navbar-bottom-bottom-color');
    moveMainGridItems_ContentOnLeft();
    toggleMainSectionsVisibility('.fitness');
  });

}, 2500);

let mainTopicSelected = '';

const mainGridNavbar = document.querySelector('#main-grid-navbar');
const mainGridLeft = document.querySelector('#main-grid-left');
const mainGridRight = document.querySelector('#main-grid-right');

const mainSectionsLeft = document.querySelector('#main-grid-left').children;
const mainSectionsRight = document.querySelector('#main-grid-right').children;

function toggleNavbarTopicHover(navbarTopic, colorClass, navbarMiddlePart) {
  setColor(navbarMiddlePart, colorClass);
  setOpacity(navbarTopic);
}

function setMainTopicSelected(callerNavbarTopic) {
  if (mainTopicSelected == '') return callerNavbarTopic;
  else if (mainTopicSelected == callerNavbarTopic) return '';
  else {
    deselect(mainTopicSelected);
    return callerNavbarTopic;
  }
}

function deselect(navbarTopic) {
  switch (navbarTopic) {
    case '#navbar-top-right-top':
      deselectTopic(navbarTopic, '#navbar-text-top-top', 'navbar-top-top-color', '#navbar-top-middle-top');
      break;
    case '#navbar-top-right-bottom':
      deselectTopic(navbarTopic, '#navbar-text-top-bottom', 'navbar-top-bottom-color', '#navbar-top-middle-bottom');
      break;
    // MIDDLE DESELECTION
    case '#navbar-middle-middle':
      setOpacity('#navbar-middle-left');
      setOpacity('#navbar-middle-right');
      setColor('#navbar-text-middle-left', 'navbar-middle-color');
      setColor('#navbar-text-middle-right', 'navbar-middle-color');
      setColor('#navbar-middle-middle', 'navbar-middle-color');
      setColor('#navbar-middle-middle', 'navbar-middle-line-color');
      setColor('#navbar-middle-middle', 'navbar-middle-line-color-clicked');
      break;
    case '#navbar-bottom-left-top':
      deselectTopic(navbarTopic, '#navbar-text-bottom-top', 'navbar-bottom-top-color', '#navbar-bottom-middle-top');
      break;
    case '#navbar-bottom-left-bottom':
      deselectTopic(navbarTopic, '#navbar-text-bottom-bottom', 'navbar-bottom-bottom-color', '#navbar-bottom-middle-bottom');
      break;
    default:
      console.log('BUG');
  }
}

function deselectTopic(navbarTopic, navbarTopicText, colorClass, navbarMiddlePart) {
  setOpacity(navbarTopic);
  setColor(navbarTopicText, colorClass);
  setColor(navbarMiddlePart, colorClass);
}

function setColor(element, colorClass) {
  document.querySelector(element).classList.toggle(colorClass);
}

function setOpacity(element) {
  document.querySelector(element).classList.toggle('opacity-zero');
}

function moveMainGridItems_ContentOnRight() {
  if (mainGridNavbar.classList.contains('zero-percent-from-left-position')) {
    mainGridNavbar.classList.toggle('zero-percent-from-left-position');
    mainGridNavbar.classList.toggle('minus-two-hundred-percent-from-left-position');
    mainGridLeft.classList.toggle('zero-percent-from-left-position');
    mainGridLeft.classList.toggle('fifty-percent-from-left-position');
  }
  else if (mainGridNavbar.classList.contains('two-hundred-percent-from-left-position')) {
    mainGridNavbar.classList.toggle('two-hundred-percent-from-left-position');
    mainGridNavbar.classList.toggle('minus-two-hundred-percent-from-left-position');
    mainGridRight.classList.toggle('minus-fifty-percent-from-left-position');
    mainGridRight.classList.toggle('zero-percent-from-left-position');
    mainGridLeft.classList.toggle('zero-percent-from-left-position');
    mainGridLeft.classList.toggle('fifty-percent-from-left-position');
  }
  else if (mainGridNavbar.classList.contains('minus-two-hundred-percent-from-left-position') && mainTopicSelected == '') {
    mainGridNavbar.classList.toggle('minus-two-hundred-percent-from-left-position');
    mainGridNavbar.classList.toggle('zero-percent-from-left-position');
    mainGridLeft.classList.toggle('fifty-percent-from-left-position');
    mainGridLeft.classList.toggle('zero-percent-from-left-position');
  }
}

function moveMainGridItems_ContentOnLeft() {
  if (mainGridNavbar.classList.contains('zero-percent-from-left-position')) {
    mainGridNavbar.classList.toggle('zero-percent-from-left-position');
    mainGridNavbar.classList.toggle('two-hundred-percent-from-left-position');
    mainGridRight.classList.toggle('zero-percent-from-left-position');
    mainGridRight.classList.toggle('minus-fifty-percent-from-left-position');
  }
  else if (mainGridNavbar.classList.contains('minus-two-hundred-percent-from-left-position')) {
    mainGridNavbar.classList.toggle('minus-two-hundred-percent-from-left-position');
    mainGridNavbar.classList.toggle('two-hundred-percent-from-left-position');
    mainGridLeft.classList.toggle('fifty-percent-from-left-position');
    mainGridLeft.classList.toggle('zero-percent-from-left-position');
    mainGridRight.classList.toggle('zero-percent-from-left-position');
    mainGridRight.classList.toggle('minus-fifty-percent-from-left-position');
  }
  else if (mainGridNavbar.classList.contains('two-hundred-percent-from-left-position') && mainTopicSelected == '') {
    mainGridNavbar.classList.toggle('two-hundred-percent-from-left-position');
    mainGridNavbar.classList.toggle('zero-percent-from-left-position');
    mainGridRight.classList.toggle('minus-fifty-percent-from-left-position');
    mainGridRight.classList.toggle('zero-percent-from-left-position');
  }
}

function toggleMainSectionsVisibility(navbarTopic) {
  for (i = 0; i < mainSectionsLeft.length; i++) {
    if (mainSectionsLeft[i].classList.contains('display-grid')) {
      mainSectionsLeft[i].classList.toggle('display-grid');
      mainSectionsLeft[i].classList.toggle('display-none');
      mainSectionsLeft[i].classList.toggle('opacity-zero');
    }
    if (mainSectionsRight[i].classList.contains('display-grid')) {
      mainSectionsRight[i].classList.toggle('display-grid');
      mainSectionsRight[i].classList.toggle('display-none');
      mainSectionsRight[i].classList.toggle('opacity-zero');
    }
  }
  if (mainTopicSelected != '') {
    document.querySelectorAll(navbarTopic).forEach((mainSection) => {
      mainSection.classList.toggle('display-none');
      mainSection.classList.toggle('display-grid');
      mainSection.clientWidth;
      mainSection.classList.toggle('opacity-zero');
    });
  }
}

let aboutMeHeaderSelected = '';

const aboutMeLeftTopRight = document.querySelector('#about-me-left-top-right');
const aboutMeLeftTopLeft = document.querySelector('#about-me-left-top-left');

const aboutMeSubImages = document.querySelector('#about-me-left-bottom-left').children;
const aboutMeSubTexts = document.querySelector('#about-me-left-bottom-right').children;

const iconSets = document.querySelectorAll('.icons');

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

document.querySelector('#about-me-developer-header').addEventListener('click', function() {
  aboutMeHeaderSelected = setAboutMeHeaderSelected('#about-me-developer-header');
  toggleAnimatedTopBorder('#about-me-developer-header-top');
  moveAboutMeLeftTop();
  toggleAboutMeBottomVisibility('.about-me-developer-section');
  toggleIconsVisibility('#developer-icons');
});

document.querySelector('#about-me-artist-header').addEventListener('click', function() {
  aboutMeHeaderSelected = setAboutMeHeaderSelected('#about-me-artist-header');
  toggleAnimatedTopBorder('#about-me-artist-header-top');
  moveAboutMeLeftTop();
  toggleAboutMeBottomVisibility('.about-me-artist-section');
  toggleIconsVisibility('#artist-icons');
});

document.querySelector('#about-me-fitness-header').addEventListener('click', function() {
  aboutMeHeaderSelected = setAboutMeHeaderSelected('#about-me-fitness-header');
  toggleAnimatedTopBorder('#about-me-fitness-header-top');
  moveAboutMeLeftTop();
  toggleAboutMeBottomVisibility('.about-me-fitness-section');
  toggleIconsVisibility('#fitness-icons');
});

function toggleAboutMeHeaderHover(aboutMeHeader) {
  document.querySelector(aboutMeHeader).classList.toggle('about-me-header-hovered');
}

function setAboutMeHeaderSelected(callerAboutMeHeader) {
  if (aboutMeHeaderSelected == '') return callerAboutMeHeader;
  else if (aboutMeHeaderSelected == callerAboutMeHeader) return '';
  else {
    deselectAboutMeHeader(aboutMeHeaderSelected);
    return callerAboutMeHeader;
  }
}

function deselectAboutMeHeader(aboutMeHeader) {
  toggleAnimatedTopBorder(aboutMeHeader + '-top');
  toggleAboutMeHeaderHover(aboutMeHeader);
}

function toggleAnimatedTopBorder(aboutMeHeaderTop) {
  document.querySelector(aboutMeHeaderTop).classList.toggle('animated-top-border-clicked');
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

function toggleAboutMeBottomVisibility(aboutMeHeaderSection) {
  for (i = 0; i < aboutMeSubImages.length; i++) {
    if (aboutMeSubImages[i].classList.contains('display-block')) {
      aboutMeSubImages[i].classList.toggle('display-block');
      aboutMeSubImages[i].classList.toggle('display-none');
      aboutMeSubImages[i].classList.toggle('opacity-zero');
    }
    if (aboutMeSubTexts[i].classList.contains('display-block')) {
      aboutMeSubTexts[i].classList.toggle('display-block');
      aboutMeSubTexts[i].classList.toggle('display-none');
      aboutMeSubTexts[i].classList.toggle('opacity-zero');
    }
  }
  if (aboutMeHeaderSelected != '') {
    document.querySelectorAll(aboutMeHeaderSection).forEach((aboutMeBottomSide) => {
      aboutMeBottomSide.classList.toggle('display-none');
      aboutMeBottomSide.classList.toggle('display-block');
      aboutMeBottomSide.clientWidth;
      aboutMeBottomSide.classList.toggle('opacity-zero');
    });
  }
}

function toggleIconsVisibility(iconSet) {
  for (i = 0; i < iconSets.length; i++) {
    if (iconSets[i].classList.contains('zero-percent-from-left-position')) {
      iconSets[i].classList.toggle('zero-percent-from-left-position');
      iconSets[i].classList.toggle('minus-twenty-vw-from-left-position');
      iconSets[i].classList.toggle('opacity-zero');
    }
  }
  if (aboutMeHeaderSelected != '') {
    setOpacity(iconSet);
    document.querySelector(iconSet).classList.toggle('minus-twenty-vw-from-left-position');
    document.querySelector(iconSet).classList.toggle('zero-percent-from-left-position');
  }
}

let contactMeHeaderSelected = false;

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

document.querySelector('#about-me-contact-me-header').addEventListener('click', function() {
  contactMeHeaderSelected = !contactMeHeaderSelected;
  toggleAnimatedTopBorder('#about-me-contact-me-header-top');
  setOpacity('#about-me-right-middle');
  moveAboutMeRightTop();
});

function moveAboutMeRightTop() {
  document.querySelector('#about-me-right-top').classList.toggle('hundred-percent-from-top-position');
  document.querySelector('#about-me-right-top').classList.toggle('zero-percent-from-top-position');
}

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

function validateEmail(emailInput) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(document.querySelector(emailInput).value);
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

function resetAllInputValues() {
  document.querySelector('#form-container').querySelectorAll('.validatable').forEach((input) => {
    input.value = '';
  });
}

function toggleFormVisibility(form) {
  setDisplayNone(form);
  document.querySelector(form).clientWidth;
  setOpacity(form);
}

function toggleProgressBar(progressBarPart) {
  document.querySelector(progressBarPart).classList.toggle('form-progress-bar-complete');
}

function setDisplayNone(element) {
  document.querySelector(element).classList.toggle('display-none');
}

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

document.querySelector('#contact-me-email-container').addEventListener('click', function() {
  window.location.href = 'mailto:nishant.parshurampuria@gmail.com';
});

document.querySelector('#contact-me-phone-container').addEventListener('click', function() {
  copyText('#contact-me-phone-text');
  showCopiedAlert('#contact-me-phone-text');
});

document.querySelector('#contact-me-location-container').addEventListener('click', function() {
  copyText('#contact-me-location-text');
  showCopiedAlert('#contact-me-location-text');
});

function toggleContactMeDirectHover(contactMeDirectDetail) {
  Array.from(document.querySelector(contactMeDirectDetail).children).forEach((element) => {
    element.classList.toggle('contact-me-direct-hovered');
  });
}

function copyText(contactMeDirectDetailText) {
  const textArea = document.createElement('textarea');
  textArea.value = document.querySelector(contactMeDirectDetailText).innerText;
  document.body.append(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
}

function showCopiedAlert(contactMeDirectDetailText) {
  const textElement = document.querySelector(contactMeDirectDetailText);
  const originalText = textElement.innerText;
  textElement.innerText = 'Copied!';
  setTimeout(function() {
    textElement.innerText = originalText;
  }, 1000);
}
