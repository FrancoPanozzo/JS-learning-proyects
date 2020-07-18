// Array of 'To do item' objects
const todo_list = [];

// Fx: Display list
function displayList() {
	const ul_element = document.querySelector('.todo-list ul');
	let list_to_display = '';
	for (const item of todo_list) {
		if (item !== '') {
			const new_list_item = `<li>
            	<span>${item}</span>
            	<button title="Remove item">
            	<i class="fas fa-trash-alt fa-lg delete"></i>
            	</button>
            </li>`;
			list_to_display += new_list_item;
		}
	}
	ul_element.innerHTML = list_to_display;
}

// Fx: Add item
function addItem(e) {
	e.preventDefault();
	const text_input = document.querySelector('#submit-line input[type=text]');
	todo_list.push(text_input.value);
	text_input.value = '';
	displayList();
}

// Fx: Delete item
function deleteItem(e) {
	const todo_item = e.target.parentElement.previousElementSibling.innerText;
	todo_list.forEach((item, index) => {
		if (item === todo_item) {
			todo_list.splice(index, 1);
		}
	});
	displayList();
}

// Fx: Add event listeners for the new items
function addEventListenersTo() {}

// Event: Submit
const submit_button = document.querySelector('#submit-line input[type=submit]');
submit_button.addEventListener('click', addItem);

// Event: Delete item
const ul = document.querySelector('.todo-list ul');

ul.addEventListener('click', (e) => {
	if (e.target.classList.contains('delete')) {
		deleteItem(e);
	}
});
