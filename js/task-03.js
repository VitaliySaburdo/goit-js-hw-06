const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

/**
 * Решение задачи №3
 */

const galleryContainerEl = document.querySelector("ul.gallery");

function createGallery(images) {
  return images
    .map((image) => {
      return `<li class="list__gallery"><img src=${image.url} alt=${image.alt}\><li\> `;
    })
    .join("");
}

galleryContainerEl.insertAdjacentHTML("afterbegin", createGallery(images));

/**
 * Альтернативное решение задачи №3
 */

// const galleryContainerEl = document.querySelector("ul.gallery");
// console.log(galleryContainerEl);

// function createGallery(images) {
//   return images.map((image) => {
//     const listEl = document.createElement("li");
//     listEl.classList.add("gallery__item");

//     const imgEl = document.createElement("img");
//     imgEl.src = image.url;
//     imgEl.alt = image.alt;
//     imgEl.width = 480;
//     listEl.insertAdjacentHTML(imgEl);
//     return listEl;
//   });
// }

// const elements = createGallery(images);
// galleryContainerEl.append(...elements);
