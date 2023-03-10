const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-input");
const new_list = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

		const new_task = document.createElement('div');
		new_task.classList.add('task');

		const task_content = document.createElement('div');
		task_content.classList.add('content');

		new_task.appendChild(task_content);

		const task_input = document.createElement('input');
		task_input.classList.add('text');
		task_input.type = 'text';
		task_input.value = task;
		task_input.setAttribute('readonly', 'readonly');

		task_content.appendChild(task_input);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerHTML = '<ion-icon name="create-outline"></ion-icon>';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerHTML = '<ion-icon name="trash-outline"></ion-icon>';

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);

		new_task.appendChild(task_actions_el);

		new_list.appendChild(new_task);

		input.value = '';

		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerHTML = '<ion-icon name="save-outline"></ion-icon>';
				task_input.removeAttribute("readonly");
				task_input.focus();
			} else {
				task_edit_el.innerHTML = "Edit";
				task_input.setAttribute("readonly", "readonly");
			}
		});

		task_delete_el.addEventListener('click', (e) => {
			new_list.removeChild(new_task);
		});
	});