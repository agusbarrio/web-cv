export default function (sectionLink, header) {
  document.addEventListener('click', (e) => {
    if (e.target.matches(sectionLink)) {
      e.preventDefault();
      window.hash = e.target.hash;
      let element = document.getElementById(e.target.hash.slice(1));
      let headerHeigth = document
        .querySelector(header)
        .getBoundingClientRect().height;
      let elementPosition = element.offsetTop;
      console.log(element);
      console.log(elementPosition);
      window.scroll(0, elementPosition - headerHeigth);
    }
  });
}
