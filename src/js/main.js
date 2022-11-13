const LeraBtn = document.querySelector(".button_true");
const nonLeraBtn = document.querySelector(".button_false");
const helloModal = document.querySelector(".helloPopUP");
const enterNameModal = document.querySelector(".EnterNamePopUP");
const body = document.querySelector(".body");
const submitNameBtn = document.querySelector(".submitName_btn");
const back_btn_arr = document.querySelectorAll(".back_btn");
const nameValue = document.querySelector(".name");
const goAway = document.querySelector(".goAway_popUP");
const goAway_content = document.querySelector(".goAway_content");
const goAway_btn = document.querySelector(".goAway_btn");
const popUP_arr = document.querySelectorAll(".popUP");

// if Lera => unblur & start quest
LeraBtn.onclick = () => {
  popUP_arr.forEach((p) => {
    p.classList.add("none");
  });
  body.classList.remove("blur");
};

// if !Lera => ask to provide name
nonLeraBtn.onclick = () => {
  popUP_arr.forEach((p) => {
    p.classList.add("none");
  });
  enterNameModal.classList.remove("none");
  nameValue.value = "";
  nameValue.focus();
};

// back to start
back_btn_arr.forEach((e) => {
  e.onclick = () => {
    popUP_arr.forEach((p) => {
      p.classList.add("none");
    });
    helloModal.classList.remove("none");
  };
});

// submit name and show message
submitNameBtn.onclick = () => {
  switch (nameValue.value.toLowerCase()) {
    case "лера":
    case "валерия":
    case "valeriya":
    case "lera":
    case "вэлари":
    case "велари":
      goAway_content.innerHTML =
        "Тетсировщик обнаружен!!! <br> Я добавил валидацию на все возможные варианты имени Лера, поэтому если ты Лера - иди в начало, если не Лера - уходи";
      break;
    case "валера":
      goAway_content.innerHTML =
        "Тетсировщик обнаружен!!!  <br> Окей, такой вариант имени может быть использован нашей Лерой. Поэтому, если ты настоящая Валера, иди на главную и начинай квест. Если нет - уходи!";
        LeraBtn.innerHTML = 'Я Валера';
        nonLeraBtn.innerHTML = 'Я уже не знаю, кто я'
      break;
    default:
      goAway_content.innerHTML = "Уходи отсюда " + nameValue.value + "!";
      break;
  }

  popUP_arr.forEach((p) => {
    p.classList.add("none");
  });
  goAway.classList.remove("none");
};
