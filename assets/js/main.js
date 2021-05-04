let buttonsContainer = document.querySelector('.page-content');
let cartCounterLabel = document.querySelector('#cart-counter');
let cartCounter = 0;
let cartPrice = 0;


const btnClickHandler = (event) => {
  let target = event.target;

  if (target && target.matches('button.item-actions__cart')) {

    cartCounterLabel.innerHTML = `${++cartCounter}`;

    if (cartCounter === 1) cartCounterLabel.style.display = 'block';

    const addPrice = +target
      .parentElement
      .previousElementSibling
      .innerHTML
      .replace(/^\$(\d+)\s\D+(\d+).*$/g, '$1.$2');
    cartPrice = Math.round((cartPrice + addPrice) * 100) / 100;
    let resHTML = target.innerHTML;

    target.innerHTML = `Added ${cartPrice.toFixed(2)} $`;
    buttonsContainer.removeEventListener('click', btnClickHandler);
    target.disabled = true;

    setTimeout(() => {
      target.innerHTML = resHTML;
      buttonsContainer.addEventListener('click', btnClickHandler);
      target.disabled = false;
    }, 1000);
  }
};

buttonsContainer.addEventListener('click', btnClickHandler);



