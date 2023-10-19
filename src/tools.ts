export const changeTitle = () => {
  const h1Elem = document.querySelector("h1");
  if (h1Elem) {
    h1Elem.style.color = "red";
    h1Elem.style.backgroundColor = "yellow";
  }
};
