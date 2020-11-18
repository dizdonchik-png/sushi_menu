window.addEventListener('click', function(event) {
    if (event.target.hasAttribute('data-action')) {
        // От кнопки, по которой кликнули, находим обертку текущего счетчика
        const counterWrapper = event.target.closest('.counter-wrapper');

        // От обертки счетчика находим div со значением счетчика
        const counter = counterWrapper.querySelector('[data-counter');

        if (event.target.dataset.action === 'plus') {
            // Изменяем счетчик, увеличивая его на 1
            counter.innerText = ++counter.innerText;

            if (event.target.closest('.cart-wrapper')) {
                // Пересчитывает стоимость товаров в корзине и скрывает/показывает блоки в корзине
                toggleCartStatus();
            }

        } else if (event.target.dataset.action === 'minus') {
            
            // Проверка, где находится товар: в каталоге или в корзине
            
            // Если в корзине, то уменьшаем до 1 и после удаляем
            if (event.target.closest('.cart-wrapper')) { 
                if(parseInt(counter.innerText) > 1) {
                    // Если количество больше 1 -> уменьшаем на 1
                    counter.innerText = --counter.innerText;
                } 
                // Иначе, если количество = 1, тогда удаляем товар из корзины
                else {
                    event.target.closest('.cart-item').remove();
                }
                
                // Пересчитывает стоимость товаров в корзине и скрывает/показывает блоки в корзине
                toggleCartStatus();

            } 
            // Если товар в каталоге, то уменьшаем до 1
            else {   
                // Уменьшаем счетчик только до 1 
                if(parseInt(counter.innerText) > 1) {
                    // Изменяем текст в счетчике, уменьшая его на 1
                    counter.innerText = --counter.innerText;
                }
            }
        }
    }
})