const nav = document.querySelector(".nav");
const test = document.querySelector(".test");

const imgContent1 = document.getElementById("img-content-1");
const imgContent2 = document.getElementById("img-content-2");
const imgContent3 = document.getElementById("img-content-3");
const imgContent4 = document.getElementById("img-content-4");
const textContent1 = document.getElementById("text-content-1");
const textContent2 = document.getElementById("text-content-2");
const textContent3 = document.getElementById("text-content-3");
const textContent4 = document.getElementById("text-content-4");

const buttonChangeLanguage = document.querySelector(".switch-languages");
const h1Page1 = document.getElementById("h1-page1");
const h1Page2 = document.getElementById("h1-page2");
const h1Page3 = document.getElementById("h1-page3");
const h1Page4 = document.getElementById("h1-page4");

const h2Page1 = document.getElementById("h2-page1");
const h2Page2 = document.getElementById("h2-page2");
const h2Page3 = document.getElementById("h2-page3");
const h2Page4 = document.getElementById("h2-page4");

const pPage1 = document.getElementById("p-page1");
const pPage2 = document.getElementById("p-page2");
const pPage3 = document.getElementById("p-page3");
const pPage4 = document.getElementById("p-page4");

const dangKy = document.querySelector(".dang-ky");
const formz = document.querySelector('.sis')
const re = document.querySelector('.dong')
const res = document.querySelector('.register')
const stic = document.querySelector('.stic');
window.addEventListener("scroll", () => {
   console.log(window.scrollY);
   if (window.scrollY >= 500) {
      imgContent1.classList.add("img-content-1-active");
      textContent1.classList.add("img-content-1-active");
      // window.scrollTo(0, 1500)
   } else {
      imgContent1.classList.remove("img-content-1-active");
      textContent1.classList.remove("img-content-1-active");
   }

   if (window.scrollY < 400 || window.scrollY > 1200) {
      imgContent2.classList.add("img-content-2-active");
      textContent2.classList.add("img-content-2-active");
   } else {
      imgContent2.classList.remove("img-content-2-active");
      textContent2.classList.remove("img-content-2-active");
   }

   if (window.scrollY < 1100 || window.scrollY > 2100) {
      imgContent3.classList.add("img-content-1-active");
      textContent3.classList.add("img-content-2-active");
   } else {
      imgContent3.classList.remove("img-content-1-active");
      textContent3.classList.remove("img-content-2-active");
   }

   if (window.scrollY < 1800) {
      imgContent4.classList.add("img-content-1-active");
      textContent4.classList.add("img-content-2-active");
   } else {
      imgContent4.classList.remove("img-content-1-active");
      textContent4.classList.remove("img-content-2-active");
   }
});

buttonChangeLanguage.addEventListener("click", () => {
   buttonChangeLanguage.classList.toggle("switch-languages-active");
   if (buttonChangeLanguage.classList.contains("switch-languages-active")) {
      h1Page1.innerHTML = "Childhoods";
      h2Page1.innerHTML = "When we were kids";
      pPage1.innerText =
         "From the first time you held your baby in your arms, you have changed forever. \n  Sometimes you will miss your old self, when you were free and free.\n\ Theres nothing you have to worry about. \n  Now you have no idea how hard it is to be a parent.\n  Days go by the same, sleep and then lack of sleep. \n  A loop that doesnt know when to end.";
      h1Page2.innerHTML = "Trunks";
      h2Page2.innerHTML = "When we were young";
      pPage2.innerText =
         "But please, dont forget... \n Everything will have a last time. \n One day you put your baby down \n and never again, he needs you to pick him up. \n One day you give your baby a last bath, and from then on, he will bathe by himself.\n There will be one last time, when he needs you to hold his hand,\n and then he wont reach from behind. .";
      h1Page3.innerHTML = "Grownups";
      h2Page3.innerHTML = "When we were grownups";
      pPage3.innerText =
         "One afternoon, you sang your favorite song, \n it was the last time it played. \n Today I greet you in front of the school gate \n From tomorrow, I will go to class by myself. \n There will be a last time for all\n The last time I read the story, the last time I wiped my dirty hands,\n I ran into your lap for the last time.";
      h1Page4.innerHTML = "Old age";
      h2Page4.innerHTML = "When you get old";
      pPage4.innerText =
         "But you wont know its the last time \n Until you run out of time \n And even when it does, it wont be easy for you to notice. \n So friends, dont let it be too late \n Cherish everything while you are, \n Because when the memory is gone,\n you will look forward to it again \n Even though only one last time child.";
   } else {
      h1Page1.innerHTML = "Tu???i th??";
      h2Page1.innerHTML = "Khi c??n nh???";
      pPage1.innerText =
         "T??? l???n ?????u ti???n b???n ??m tr??n tay ?????a con c???a m??nh, con ng?????i b???n ???? thay ?????i m??i m??i. \n  ????i khi b???n s??? nh??? b???n th??n m??nh tr?????c kia, khi c??n r???nh rang v?? t??? do.\n\ Ch???ng c?? ??i???u g?? b???n ph???i lo ngh??. \n  Gi??? b???n ch???ng ng??? l??m cha m??? v???t v??? ?????n nh?????ng n??y.\n  Ng??y ng??y tr??i qua ?????u gi???ng nhau, nh???ng gi???c ng??? r???i l???i thi???u ng???. \n  M???t v??ng l???p ch???ng bi???t khi n??o qua.";
      h1Page2.innerHTML = "Tr???u tre";
      h2Page2.innerHTML = "Khi c??n tr???";
      pPage2.innerText =
         "Nh??ng b???n ??i, h??y ?????ng qu??n nh??... \n G?? c??ng s??? c?? l???n cu???i c??ng. \n M???t ng??y b???n ?????t con xu???ng \n v?? ch???ng bao gi??? n???a, con c???n b???n b??? l??n. \n M???t ng??y b???n t???m cho con l???n cu???i, r???i t??? ???? tr??? ??i, con t??? t???m m???t m??nh.\n S??? c?? m???t l???n cu???i, con c???n b???n n???m tay,\n r???i t??? sau tay ch???ng c???n v???i ?????n.";
      h1Page3.innerHTML = "Tr?????ng th??nh";
      h2Page3.innerHTML = "L??c tr?????ng th??nh";
      pPage3.innerText =
         "M???t bu???i chi???u n???, b???n h??t b??i con th??ch, \n c??ng l?? l???n cu???i n?? vang l??n. \n H??m nay con ch??o b???n tr?????c c???ng tr?????ng \n T??? mai, con t??? m??nh ?????n l???p. \n S??? c?? l???n cu???i cho t???t c???\n L???n cu???i ?????c truy???n, l???n cu???i lau tay d??,\n con ch???y s?? v??o l??ng b???n c??ng m???t l???n cu???i.";
      h1Page4.innerHTML = "L???n tu???i";
      h2Page4.innerHTML = "Khi v??? gi??";
      pPage4.innerText =
         "Th??? nh??ng b???n s??? ch???ng bi???t ???? l?? l???n cu???i \n Cho ?????n khi b???n ch???ng c??n th???i gian \n V?? c??? khi ??i???u ???y ?????n, c??ng ch???ng d??? d??ng ????? b???n nh???n ra. \n V???y b???n ??i, ?????ng ????? qu?? tr??? \n H??y tr??n tr???ng t???t c??? khi c??n ??ang, \n B???i v?? khi k??? ni???m ???? m???t,\n b???n s??? mong l???i ???????c m???t l???n ??i qua \n D?? ch??? m???t l???n cu???i c??ng con.";
   }
});

const switchLanguages = document.querySelector(".switch-languages");
const language = document.querySelector(".language");

switchLanguages.addEventListener("click", SwitchLanguagesFunction);

function SwitchLanguagesFunction() {
   if (language.textContent == "EN") {
      language.textContent = "VN";
   } else {
      language.textContent = "EN";
   }
}

dangKy.addEventListener('click', () => {
   formz.classList.toggle('d-none');
   if (formz.classList.contains('d-none')) {
      formz.style.display = 'block'
   }
   else (formz.style.display = 'none')
})

res.addEventListener('click', () => {
   stic.style.display = 'block'
   formz.style.display = 'none'
   setInterval(()=>{
      stic.style.display = 'none'
   }, 1000)
})

re.addEventListener('click', () => {
   formz.style.display = 'none'
})

