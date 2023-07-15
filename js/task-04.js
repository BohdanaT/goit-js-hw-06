const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counterValue = document.querySelector('#value');

const changeValue = {
    value: 0,

    decrement() {
        this.value -= 1;
    },

    increment() {
        this.value += 1;
    },
}

decrementBtn.addEventListener('click', function () {
    changeValue.decrement();
    
    counterValue.textContent = changeValue.value;
});

incrementBtn.addEventListener('click', function () {
    changeValue.increment();

    counterValue.textContent = changeValue.value;
})