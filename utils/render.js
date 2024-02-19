const renderToDom = (selector, html) => {
  const element = document.querySelector(selector);
  element.innerHTML = html
}

export default renderToDom; 
