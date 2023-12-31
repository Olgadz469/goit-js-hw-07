 import { galleryItems } from './gallery-items.js';
// Change code below this line
 console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");
galleryRef.insertAdjacentHTML('beforeend', createMarkup(galleryItems));
console.log(galleryRef);

function createMarkup(galleryItems) {
       return galleryItems 
       .map(
         ({ preview, original, description }) => 
   
`<li class="gallery__item">
   <a class="gallery__link" href="${original}">
     <img
       class="gallery__image"
       src="${preview}"
       data-source="${original}"
       alt="${description}"
     />
   </a>
 </li>`
         )
       .join('');
};

galleryRef.addEventListener("click", onClickImg);

function onClickImg(event) {
  event.preventDefault();

  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  const onPressedImg = event.target.dataset.source;

  const instance = basicLightbox.create(
         `<img src="${onPressedImg}" width="1280" height="auto"/> `,
         {
          onShow: (instance) => {
             window.addEventListener('keydown', onEscKeyPress);
          },
           onClose: (instance) => {
            window.removeEventListener('keydown', onEscKeyPress);
           },
         }
       );
       instance.show();

function onEscKeyPress(event) {

 if (event.code === "Escape") {
  instance.close(() => console.log('lightbox not visible anymore'))
    }
  }
}


// Створення і рендер розмітки на підставі масиву даних galleryItems
//  і наданого шаблону елемента галереї.
// Реалізація делегування на ul.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox.
//  Використовуй CDN сервіс jsdelivr і додай у проект посилання на 
//  мініфіковані (.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. Для цього
//  ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента <img> в модальному вікні перед 
// відкриттям. Використовуй готову розмітку модального вікна із зображенням
//  з прикладів бібліотеки basicLightbox.

// Розмітка елемента галереї
// Посилання на оригінальне зображення повинно зберігатися в data-атрибуті
//  source на елементі <img>, і вказуватися в href посилання. Не додавай 
//  інші HTML теги або CSS класи, крім тих, що містяться в цьому шаблоні.

// <li class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </li>

// Зверни увагу на те, що зображення обгорнуте посиланням, отже по кліку за
//  замовчуванням користувач буде перенаправлений на іншу сторінку. Заборони
//   цю поведінку за замовчуванням.

// Закриття з клавіатури
// УВАГА
// Наступний функціонал не обов'язковий для здавання завдання, але буде 
// хорошою додатковою практикою.

// Додай закриття модального вікна після натискання клавіші Escape.
//  Зроби так, щоб прослуховування клавіатури було тільки доти, 
//  доки відкрите модальне вікно. Бібліотека basicLightbox містить 
//  метод для програмного закриття модального вікна.
