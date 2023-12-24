/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const closeIcon = document.getElementById("nav-close");
const navLink = document.querySelectorAll(".nav__link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    navMenu.classList.add("hidden");
  })
);

closeIcon.addEventListener("click", () => {
  navMenu.classList.add("hidden");
});

hamburger.addEventListener("click", () => {
  navMenu.classList.remove("hidden");
});

/*~~~~~~~~~~~~~~~ Tabs ~~~~~~~~~~~~~~~*/

const tabsContainer = document.querySelector(".tabs-container");
    const tabsList = tabsContainer.querySelector("ul");
    const tabButtons = tabsList.querySelectorAll("a");
    const tabPanels = tabsContainer.querySelectorAll(".tabs__panels > div");

    tabsList.setAttribute("role", "tablist");

    tabsList.querySelectorAll("li").forEach((listitem) => {
      listitem.setAttribute("role", "presentation");
    });

    tabButtons.forEach((tab, index) => {
      tab.setAttribute("role", "tab");
      if (index === 0) {
        tab.setAttribute("aria-selected", "true");
        // we'll add something here
      } else {
        tab.setAttribute("tabindex", "-1");
        tabPanels[index].setAttribute("hidden", "");
      }
    });

    tabPanels.forEach((panel) => {
      panel.setAttribute("role", "tabpanel");
      panel.setAttribute("tabindex", "0");
    });

    tabsContainer.addEventListener("click", (e) => {
      const clickedTab = e.target.closest("a");
      if (!clickedTab) return;
      e.preventDefault();

      switchTab(clickedTab);
    });

    tabsContainer.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "ArrowLeft":
          moveLeft();
          break;
        case "ArrowRight":
          moveRight();
          break;
        case "Home":
          e.preventDefault();
          switchTab(tabButtons[0]);
          break;
        case "End":
          e.preventDefault();
          switchTab(tabButtons[tabButtons.length - 1]);
          break;
      }
    });

    function moveLeft() {
      const currentTab = document.activeElement;
      if (!currentTab.parentElement.previousElementSibling) {
        switchTab(tabButtons[tabButtons.length - 1]);
      } else {
        switchTab(
          currentTab.parentElement.previousElementSibling.querySelector("a")
        );
      }
    }

    function moveRight() {
      const currentTab = document.activeElement;
      if (!currentTab.parentElement.nextElementSibling) {
        switchTab(tabButtons[0]);
      } else {
        switchTab(currentTab.parentElement.nextElementSibling.querySelector("a"));
      }
    }

    function switchTab(newTab) {
      const activePanelId = newTab.getAttribute("href");
      const activePanel = tabsContainer.querySelector(activePanelId);

      tabButtons.forEach((button) => {
        button.setAttribute("aria-selected", false);
        button.setAttribute("tabindex", "-1");
      });

      tabPanels.forEach((panel) => {
        panel.setAttribute("hidden", true);
      });

      activePanel.removeAttribute("hidden", false);

      newTab.setAttribute("aria-selected", true);
      newTab.setAttribute("tabindex", "0");
      newTab.focus();
    }

/*~~~~~~~~~~~~~~~ DARK LIGHT THEME ~~~~~~~~~~~~~~~*/
const html = document.querySelector("html");
const themeBtn = document.getElementById("theme-toggle");

if (localStorage.getItem("mode") == "dark") {
  darkMode();
} else {
  lightMode();
}

themeBtn.addEventListener("click", (e) => {
  if (localStorage.getItem("mode") == "light") {
    darkMode();
  } else {
    lightMode();
  }
});

function darkMode() {
  html.classList.add("dark");
  themeBtn.classList.replace("fa-moon-o", "fa-sun-o");
  localStorage.setItem("mode", "dark");
}

function lightMode() {
  html.classList.remove("dark");
  themeBtn.classList.replace("fa-sun-o", "fa-moon-o");
  localStorage.setItem("mode", "light");
}

/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/
const scrollUp = () => {
  const scrollUpBtn = document.getElementById("scroll-up");

  if (this.scrollY >= 250) {
    scrollUpBtn.classList.remove("-bottom-1/2");
    scrollUpBtn.classList.add("bottom-4");
  } else {
    scrollUpBtn.classList.add("-bottom-1/2");
    scrollUpBtn.classList.remove("bottom-4");
  }
};
window.addEventListener("scroll", scrollUp);

/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/
const scrollHeader = () => {
  const header = document.getElementById("header");

  if (this.scrollY >= 50) {
    header.classList.add("border-b", "bg-white");
  } else {
    header.classList.remove("border-b", "bg-white");
  }
};
window.addEventListener("scroll", scrollHeader);

/*~~~~~~~~~~~~~~~ Sliders ~~~~~~~~~~~~~~~*/
// main-silder-swiper
const swiper = new Swiper('.category-slider', {
  speed: 400,
  slidesPerView: 2,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 6,
    }
  }
});

// testimonla-silder-swiper
const swiper2 = new Swiper('.swiper_two', {
  speed: 400,
  spaceBetween: 50,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
});

// Popular slider
var swiper3 = new Swiper(".popular-slider", {
  spaceBetween: 10,
  loop: true,
  slidesPerView: 1.2,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    460: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3.3,
      spaceBetween: 40,
    },
  }
});
