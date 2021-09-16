console.clear();

const app = (() => {
  let body;
  let menu;
  let menuItems;

  const init = () => {
    toggle = document.querySelector('#nav-toggle');
    menu = document.querySelector('.menu-hamburger');
    nav = document.querySelector('#nav');
    body = document.querySelector('body');
    // hide = document.querySelector('#hide');

    applyListeners();
  };

  const applyListeners = () => {
    menu.addEventListener('click', () => toggleClass(toggle, 'nav-active'));
    menu.addEventListener('click', () => toggleClass(body, 'nav-active'));
    // menu.addEventListener('click', () => toggleClasshide(hide, 'hide', 1000));
  };

  const toggleClass = (element, stringClass) => {
    $("#logged-user-options-container").removeClass("isActivated");
    if (element.classList.contains(stringClass)) {
      var timeout;
      element.classList.remove(stringClass);
      toggle.classList.remove(stringClass);
  
      timeout = setTimeout(function () {
        nav.classList.add('nav-hide');
      }, 1300);
    }
    else {
      clearTimeout(timeout);
      nav.classList.remove('nav-hide');
      setTimeout(function () {
        toggle.classList.add(stringClass);
        element.classList.add(stringClass);
      }, 50);
    }

  };

  const toggleClasshide = (element, stringClass, timeout) => {
    if (element.classList.contains(stringClass)) {

      setTimeout(function () {
        element.classList.remove(stringClass);
        element.classList.add('no-hide-anim');
      }, 150);
    }
    else {
      setTimeout(hideFunction, timeout);
      function hideFunction() {
        element.classList.add(stringClass);
        element.classList.remove('no-hide');
      }
    }

  };

  init();
})();