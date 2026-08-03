const slides = [
  {
    src: "assets/6015028769963314653.jpg",
    width: 678,
    height: 949,
    alt: "تنسيق باب بالورد والقماش الأبيض",
    category: "لمسات الاستقبال",
    title: "ترحيب أنيق من أول خطوة",
    description: "تفاصيل من القماش الأبيض والورد تضيف لمسة دافئة إلى مدخل المنزل.",
  },
  {
    src: "assets/6015028769963314654.jpg",
    width: 589,
    height: 1280,
    alt: "تنسيق وترتيب مفروشات داخل الدولاب",
    category: "ترتيب المفروشات",
    title: "لكل قطعة مكانها",
    description: "ترتيب منسّق يحافظ على المفروشات ويجعل الوصول إليها أسهل في كل وقت.",
  },
  {
    src: "assets/6015028769963314655.jpg",
    width: 589,
    height: 1280,
    alt: "مفروشات مرتبة بعناية على رفوف الدولاب",
    category: "تنظيم المساحات",
    title: "أناقة تمتد إلى الداخل",
    description: "استغلال متوازن للرفوف مع طيّات مرتبة وتوزيع بصري مريح.",
  },
  {
    src: "assets/6015028769963314656.jpg",
    width: 720,
    height: 1280,
    alt: "دولاب ملابس منظم مع مفروشات مرتبة",
    category: "ترتيب الدولاب",
    title: "ترتيب عملي كل يوم",
    description: "مساحة واضحة ومنظمة تجمع الملابس والمفروشات من دون ازدحام بصري.",
  },
  {
    src: "assets/6015028769963314657.jpg",
    width: 720,
    height: 1280,
    alt: "مفروشات ملونة مطوية ومنظمة داخل الدولاب",
    category: "تنسيق المفروشات",
    title: "ألوان مرتبة بتناغم",
    description: "تنسيق الألوان والأحجام يمنح الدولاب شكلًا أجمل واستخدامًا أكثر راحة.",
  },
  {
    src: "assets/6015028769963314658.jpg",
    width: 720,
    height: 1280,
    alt: "أطقم مفروشات منظمة بلمسات وردية",
    category: "تفاصيل ناعمة",
    title: "لمسات تُبهج العين",
    description: "طريقة عرض رقيقة تجعل كل طقم واضحًا وجاهزًا للاستخدام.",
  },
  {
    src: "assets/6015028769963314659.jpg",
    width: 720,
    height: 1280,
    alt: "مفروشات وأغطية مرتبة في دولاب خشبي",
    category: "استغلال المساحة",
    title: "كل مساحة لها حل",
    description: "ترتيب مدروس يستفيد من ارتفاع الرفوف ويحافظ على سهولة الوصول.",
  },
  {
    src: "assets/6015028769963314660.jpg",
    width: 720,
    height: 1280,
    alt: "غرفة نوم بيضاء منسقة ببتلات ورد حمراء",
    category: "تنسيق المناسبات",
    title: "مشهد يليق بلحظة خاصة",
    description: "أبيض هادئ وبتلات ورد بتكوين بسيط يصنعان ذكرى جميلة.",
  },
  {
    src: "assets/6015028769963314661.jpg",
    width: 720,
    height: 1280,
    alt: "تنسيق سرير أبيض مع قلوب من الورد الأحمر",
    category: "لمسات المناسبات",
    title: "تفاصيل تحكي فرحتكِ",
    description: "تكوين رومانسي ناعم يضيف للمكان روحًا دافئة من دون مبالغة.",
  },
  {
    src: "assets/6015028769963314662.jpg",
    width: 720,
    height: 1280,
    alt: "تنسيق مفروشات سرير بيضاء ولمسات ورد حمراء",
    category: "تجهيز الغرفة",
    title: "هدوء الأبيض ودفء الورد",
    description: "تنسيق متوازن يجمع بين النقاء والدفء في صورة واحدة.",
  },
  {
    src: "assets/6015028769963314663.jpg",
    width: 720,
    height: 1280,
    alt: "دولاب مرتب بمفروشات ملونة وملابس منظمة",
    category: "تنظيم متكامل",
    title: "صورة مرتبة من كل زاوية",
    description: "تناغم بين الملابس والمفروشات ليبقى الدولاب عمليًا وأنيقًا معًا.",
  },
];

const carousel = document.querySelector("#carousel");
const galleryStage = document.querySelector("#galleryStage");
const gallerySlides = document.querySelector("#gallerySlides");
let galleryImage = document.querySelector("#galleryImage");
const galleryCategory = document.querySelector("#galleryCategory");
const galleryCaption = document.querySelector("#galleryCaption");
const galleryDescription = document.querySelector("#galleryDescription");
const currentSlide = document.querySelector("#currentSlide");
const totalSlides = document.querySelector("#totalSlides");
const thumbnailTrack = document.querySelector("#thumbnailTrack");
const previousSlide = document.querySelector("#previousSlide");
const nextSlide = document.querySelector("#nextSlide");
const autoplayToggle = document.querySelector("#autoplayToggle");
const progress = document.querySelector("#sliderProgress");

let activeIndex = 0;
let autoplayTimer;
let transitionTimer;
let isPaused = false;
let pointerStartX = null;
let pointerStartY = null;

const formatNumber = (number) => String(number).padStart(2, "0");

function createThumbnails() {
  const fragment = document.createDocumentFragment();

  slides.forEach((slide, index) => {
    const button = document.createElement("button");
    const image = document.createElement("img");

    button.type = "button";
    button.className = "thumbnail";
    button.dataset.slide = index;
    button.setAttribute("aria-label", `عرض الصورة ${index + 1}: ${slide.title}`);

    image.src = slide.src;
    image.width = slide.width;
    image.height = slide.height;
    image.alt = "";
    image.loading = "lazy";

    button.append(image);
    fragment.append(button);
  });

  thumbnailTrack.append(fragment);
}

function restartProgress() {
  progress.classList.remove("running");
  void progress.offsetWidth;
  if (!isPaused && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    progress.classList.add("running");
  }
}

function keepActiveThumbnailVisible(thumbnail) {
  const trackRect = thumbnailTrack.getBoundingClientRect();
  const thumbnailRect = thumbnail.getBoundingClientRect();
  let horizontalOffset = 0;
  let verticalOffset = 0;

  if (thumbnailRect.left < trackRect.left) {
    horizontalOffset = thumbnailRect.left - trackRect.left - 8;
  } else if (thumbnailRect.right > trackRect.right) {
    horizontalOffset = thumbnailRect.right - trackRect.right + 8;
  }

  if (thumbnailRect.top < trackRect.top) {
    verticalOffset = thumbnailRect.top - trackRect.top - 8;
  } else if (thumbnailRect.bottom > trackRect.bottom) {
    verticalOffset = thumbnailRect.bottom - trackRect.bottom + 8;
  }

  if (horizontalOffset || verticalOffset) {
    thumbnailTrack.scrollBy({
      left: horizontalOffset,
      top: verticalOffset,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  }
}

function scheduleAutoplay() {
  window.clearTimeout(autoplayTimer);
  restartProgress();

  if (!isPaused && !document.hidden) {
    autoplayTimer = window.setTimeout(() => showSlide(activeIndex + 1), 5000);
  }
}

function applySlideToImage(image, slide) {
  image.src = slide.src;
  image.width = slide.width;
  image.height = slide.height;
  image.alt = slide.alt;
}

function updateSlideDetails(index) {
  const slide = slides[index];

  galleryStage.style.backgroundImage = `url("${slide.src}")`;
  galleryCategory.textContent = slide.category;
  galleryCaption.textContent = slide.title;
  galleryDescription.textContent = slide.description;
  currentSlide.textContent = formatNumber(index + 1);

  document.querySelectorAll(".thumbnail").forEach((thumbnail, thumbnailIndex) => {
    const isActive = thumbnailIndex === index;
    thumbnail.classList.toggle("active", isActive);
    thumbnail.setAttribute("aria-current", isActive ? "true" : "false");

    if (isActive) {
      keepActiveThumbnailVisible(thumbnail);
    }
  });
}

function finishImageTransition() {
  window.clearTimeout(transitionTimer);
  galleryImage.className = "gallery-slide is-active";
  gallerySlides.replaceChildren(galleryImage);
}

function updateSlideContent(index) {
  applySlideToImage(galleryImage, slides[index]);
  updateSlideDetails(index);
}

function showSlide(index, animate = true, directionHint) {
  const nextIndex = (index + slides.length) % slides.length;

  if (nextIndex === activeIndex && animate) {
    scheduleAutoplay();
    return;
  }

  const direction = directionHint || (index >= activeIndex ? "next" : "previous");
  finishImageTransition();
  activeIndex = nextIndex;

  if (!animate || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    updateSlideContent(activeIndex);
    scheduleAutoplay();
    return;
  }

  const outgoingImage = galleryImage;
  const incomingImage = document.createElement("img");

  applySlideToImage(incomingImage, slides[activeIndex]);
  incomingImage.className = `gallery-slide slide-enter-${direction}`;
  gallerySlides.append(incomingImage);
  updateSlideDetails(activeIndex);

  void incomingImage.offsetWidth;
  outgoingImage.classList.remove("is-active");
  outgoingImage.classList.add(`slide-exit-${direction}`);
  incomingImage.classList.add("is-active");
  galleryImage = incomingImage;

  transitionTimer = window.setTimeout(finishImageTransition, 380);
  scheduleAutoplay();
}

function setPaused(paused) {
  isPaused = paused;
  autoplayToggle.setAttribute("aria-pressed", String(paused));
  autoplayToggle.querySelector("span").textContent = paused ? "تشغيل العرض" : "إيقاف العرض";
  autoplayToggle.setAttribute("aria-label", paused ? "تشغيل العرض التلقائي" : "إيقاف العرض التلقائي");
  scheduleAutoplay();
}

createThumbnails();
totalSlides.textContent = formatNumber(slides.length);
showSlide(0, false);

previousSlide.addEventListener("click", () => showSlide(activeIndex - 1, true, "previous"));
nextSlide.addEventListener("click", () => showSlide(activeIndex + 1, true, "next"));
autoplayToggle.addEventListener("click", () => setPaused(!isPaused));

thumbnailTrack.addEventListener("click", (event) => {
  const thumbnail = event.target.closest(".thumbnail");
  if (thumbnail) showSlide(Number(thumbnail.dataset.slide));
});

carousel.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    event.preventDefault();
    showSlide(activeIndex - 1, true, "previous");
  }
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    showSlide(activeIndex + 1, true, "next");
  }
});

galleryStage.addEventListener("pointerdown", (event) => {
  pointerStartX = event.clientX;
  pointerStartY = event.clientY;
});

galleryStage.addEventListener("pointerup", (event) => {
  if (pointerStartX === null || pointerStartY === null) return;

  const deltaX = event.clientX - pointerStartX;
  const deltaY = event.clientY - pointerStartY;

  if (Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY)) {
    const isNext = deltaX > 0;
    showSlide(activeIndex + (isNext ? 1 : -1), true, isNext ? "next" : "previous");
  }

  pointerStartX = null;
  pointerStartY = null;
});

document.addEventListener("visibilitychange", scheduleAutoplay);

const siteHeader = document.querySelector("#siteHeader");
const menuToggle = document.querySelector("#menuToggle");
const mainNav = document.querySelector("#mainNav");

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "فتح قائمة التنقل");
  mainNav.classList.remove("open");
  document.body.classList.remove("menu-open");
}

menuToggle.addEventListener("click", () => {
  const willOpen = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(willOpen));
  menuToggle.setAttribute("aria-label", willOpen ? "إغلاق قائمة التنقل" : "فتح قائمة التنقل");
  mainNav.classList.toggle("open", willOpen);
  document.body.classList.toggle("menu-open", willOpen);
});

mainNav.addEventListener("click", (event) => {
  if (event.target.matches("a")) closeMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".main-nav a")];

function updateHeaderAndNavigation() {
  siteHeader.classList.toggle("scrolled", window.scrollY > 20);

  let currentSection = "home";
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 180) currentSection = section.id;
  });

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.hash === `#${currentSection}`);
  });
}

window.addEventListener("scroll", updateHeaderAndNavigation, { passive: true });
window.addEventListener("resize", () => {
  if (window.innerWidth > 820) closeMenu();
});
updateHeaderAndNavigation();

document.querySelector("#currentYear").textContent = new Date().getFullYear();
