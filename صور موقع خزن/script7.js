const wrapper = document.getElementById("wrapper");
const fullImg = document.getElementById("fullimg");
const galleryImages = document.querySelectorAll(".img-gallery img");
const closeBtn = document.querySelector(".imagewrapper span");
const header = document.querySelector(".main-header");

// فتح الصورة
galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    wrapper.style.display = "flex";
    fullImg.src = img.src;
    header.style.display = "none"; // إخفاء الهيدر
  });
});

// إغلاق الصورة
closeBtn.addEventListener("click", () => {
  wrapper.style.display = "none";
  header.style.display = "block"; // إظهار الهيدر
});


