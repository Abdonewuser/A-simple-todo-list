let input = document.querySelector('input');
let btn = document.querySelector('button');

// Step 1: Add event listeners to button to capture input
btn.addEventListener('click', addTask)

function addTask() {
    console.log('clicked');
    let text = input.value;
    let p = document.createElement('p');
    p.textContent = text;
    let tasks = document.querySelector('.tasks');

    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            p.style.textDecoration = 'line-through';
        } else {
            p.style.textDecoration = 'none';
        }
    });
    p.prepend(checkbox);
    tasks.appendChild(p);
}



