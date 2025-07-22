const aboutbtn=document.getElementById('aboutbtn');
const triangle=document.getElementById('triangle');
const allcarts=document.getElementById('allcarts');
aboutbtn.addEventListener('click',function(){
    if(allcarts.style.display==='flex'){
        allcarts.style.display='none';
        triangle.style.transform='rotate(0deg)';
    }
    else{
        allcarts.style.display='flex';
        triangle.style.transform='rotate(180deg)';
        
    }
})






let feedbacks = [
{
    "feedback":"Кофе здесь — как утренний ритуал. Особенно люблю их капучино с  корицей: <br> идеальная пенка и баланс вкуса. А круассаны просто божественные —  <br>хрустящие снаружи и мягкие внутри. Уже рекомендовала друзьям!",
    "name":"Анна, 28 лет"
},  
{
    "feedback":"Заказывал раф с ванилью — бариста Максим сделал его с идеальной <br>  текстурой, даже показал, как правильно взбивать сливки. Видно, что  ребята <br> знают толк в кофе и любят своё дело. Теперь только сюда!",
    "name":"Артём, 32 года"
},   
{
    "feedback":"Прихожу с ноутбуком работать — тихая музыка, удобные диваны и  розетки у  <br> каждого стола. А ещё тут подают кофе в керамических чашках,  что редкость  <br> сейчас. Чувствуется уют и забота о деталях.",
    "name":"Елена, 25 лет"
},   
{
    "feedback":"После их эспрессо я прокрастинирую в 2 раза быстрее. Серьёзно, кофе <br>  настолько бодрый, что даже список дел составлять не пришлось — всё  <br> сделал!",
    "name":"Дмитрий, 30 лет"
},
{
    "feedback":"Тирамису здесь — лучший в городе! Нежная текстура, правильный баланс кофе  <br> и маскарпоне. Беру его каждый раз, даже если пришла просто за <br>  американо.",
    "name":"Ольга, 27 лет"
}  
];


let current = 0;

const feedbackText = document.querySelector('.feedback');
const feedbackName = document.getElementById('feedback-name');
const leftBtn = document.getElementById('leftbtn');
const rightBtn = document.getElementById('rightbtn');

function showFeedback(index) {
  feedbackText.innerHTML = feedbacks[index].feedback;
  feedbackName.textContent = feedbacks[index].name;
}

// Показываем первый отзыв при загрузке
showFeedback(current);

rightBtn.addEventListener('click', () => {
  current = (current + 1) % feedbacks.length;
  showFeedback(current);
});

leftBtn.addEventListener('click', () => {
  current = (current - 1 + feedbacks.length) % feedbacks.length;
  showFeedback(current);
});






let menuData = {}; // сюда загрузится JSON
const container = document.getElementById("menu-container");
const buttons = document.querySelectorAll(".otion");

// Загружаем JSON
fetch("menu.json")
  .then(res => res.json())
  .then(data => {
    menuData = data;
    renderMenu("coffee"); // По умолчанию — кофе
     // Установка активного стиля по умолчанию
    buttons.forEach(btn => {
      if (btn.dataset.category === "coffee") {
        btn.style.backgroundColor = "#603809";
        btn.style.color = "#fff";
        btn.style.border = "none";
      } else {
        btn.style.backgroundColor = "";
        btn.style.color = "";
        btn.style.border = "";
      }
    });
  });

// При нажатии на ссылки
buttons.forEach(button => {
    
  button.addEventListener("click", (e) => {
    e.preventDefault();

    const category = button.dataset.category;
    renderMenu(category);

    // Сброс стиля у всех кнопок
    buttons.forEach(btn => {
      btn.style.backgroundColor = "";
      btn.style.color = "";
      btn.style.border = "";
    });

    // Установка активного стиля на текущую кнопку
    button.style.backgroundColor = "#603809";
    button.style.color = "#fff";
    button.style.border = "none";
  });
});

// Функция отрисовки карточек
function renderMenu(category) {
  const items = menuData[category];
  container.innerHTML = ""; // очищаем старое меню

  items.forEach(item => {
    container.innerHTML += `
      <div class="menu-cart">
        <img src="${item.img}" alt="${item.name}" class="cart-img">
        <div class="cart-name">${item.name}</div>
        <div class="cart-undername">${item.description}</div>
        <div class="price-and-gramm">
          <div class="price">${item.price}</div>
          <div class="gramm">${item.size}</div>
        </div>
      </div>
    `;
  });
}

