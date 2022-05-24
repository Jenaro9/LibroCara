const btnImgPerfil = document.querySelector(".btn-img-perfil");

const input2 = document.createElement("input");
input2.type = "file";

btnImgPerfil.addEventListener("click", (e) => {
  e.preventDefault();
  input2.click();
});

input2.addEventListener("change", (e) => {
  console.log(input2.value);
  loadImage(input2.files[0]);
});

const loadImage = (file) => {
  let lector = new FileReader();
  lector.readAsDataURL(file);

  lector.addEventListener("load", () => {
    const divImgPerfil = document.querySelector(".imagen-perfil");
    divImgPerfil.innerHTML = "";
    const img = document.createElement("img");
    img.src = lector.result;
    divImgPerfil.appendChild(img);
  });
};
