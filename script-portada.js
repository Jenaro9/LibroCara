const btnImgPortada = document.querySelector(".btn-img-portada");

const input = document.createElement("input");
input.type = "file";

btnImgPortada.addEventListener("click", (e) => {
  e.preventDefault();
  input.click();
});

input.addEventListener("change", (e) => {
  console.log(input.value);

  loadImage2(input.files[0]);
});

const loadImage2 = (file) => {
  let lector = new FileReader();
  lector.readAsDataURL(file);

  lector.addEventListener("load", () => {
    const divImgPortada = document.querySelector(".imagen-portada");
    divImgPortada.innerHTML = "";
    const img = document.createElement("img");
    img.src = lector.result;
    divImgPortada.appendChild(img);
  });
};
