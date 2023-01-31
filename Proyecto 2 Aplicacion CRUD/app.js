let toDoList = [];

function get(element){
	return document.querySelector(element);
}

function getAll(element){
	return document.querySelectorAll(element);
}

function cleanToDoList(){
	get("#toDoList").innerHTML = '';
}




function addTodo(){
	const inputValue = get("#input").value;
	const descValue = get("#desc").value;
	
  toDoList = JSON.parse(localStorage.getItem('puesto_trabajo'));
	
  if(inputValue.length) {
    const puestos = 'id' + (new Date()).getTime();
    toDoList.push({
		id: puestos,
		name: get("#input").value,
		description: get("#desc").value,
		isEditing: false
		});
	

		
    localStorage.setItem('puesto_trabajo', JSON.stringify(toDoList));
		
	get("#input",).value = "";
		get("#desc",).value = "";
		updateToDoList();
	}
}

function removeToDo(element){
	element.addEventListener("click", function(){
		const dataId = element.parentElement.parentElement.getAttribute("data-id")
		toDoList = toDoList.filter(function(item){
			return item.id != dataId
		});
		
		localStorage.setItem('puesto_trabajo', JSON.stringify(toDoList));
		
		updateToDoList()			
	})
}


function toggleEditToDo(element){
	element.addEventListener("click", function(){
		const dataId = element.parentElement.parentElement.getAttribute("data-id")
		toDoList = toDoList.map(function(item){
			return {
				...item,
				isEditing: item.id == dataId
			}
		})
				
		updateToDoList()			
	})
}

function hideEditTodo(element){
	element.addEventListener("click", function(){
		const dataId = element.parentElement.parentElement.getAttribute("data-id")
		toDoList = toDoList.map(function(item){
			return {
				...item,
				isEditing: item.id == dataId ? false : item.isEditing
			}
		})
				
		updateToDoList()			
	})
}

function editToDo(element) {
	element.addEventListener("submit", (e) => {
		e.preventDefault();
		
		const dataId = element.parentElement.getAttribute("data-id");
		const inputValue = element.children[0].value;
		const descValue = element.children[1].value;
		
		
		toDoList = toDoList.map(function(item) {
			return {
				...item,
				name: dataId == item.id ? inputValue : item.name,
        description: dataId == item.id ? descValue : item.description,
        isEditing: false
			};
		  });

		updateToDoList()
	});
}

function updateToDoList() {
	cleanToDoList();
	toDoList.forEach(function(item) {
		get("#toDoList").innerHTML += `
			<li 
				data-id="${item.id}"
				class="flex justify-between w-full border items-center border-radius p-1 mb-1"
			>
				${item.isEditing ? 
					`
						<form class="editForm">
							<input value="${item.name}" type="text" />
							<input value="${item.description}" type="text" />
							<button type="submit" class="confirmEdit cursor-pointer">✅</button>
							<button class="cancelEdit cursor-pointer">❌</button>
						</form>
						<form class="editForm">
						
		
						</form>
					` :
					`${item.name}
					<div>
						<span class="toggleEditToDo cursor-pointer">✏</span>
						<span class="removeToDo cursor-pointer">❌</span>
					</div>`
				}
			</li>
		`;
	});
	
	getAll(".removeToDo").forEach(function(element) {
		removeToDo(element);
	});
	
	getAll(".toggleEditToDo").forEach(function(element) {
		toggleEditToDo(element)
	})
	
	getAll(".editForm").forEach(function(element) {
		editToDo(element)
	})
	
	getAll(".cancelEdit").forEach(function(element) {
		hideEditTodo(element)
	})
}

get("#form").addEventListener("submit", function(e){
	e.preventDefault()
	addTodo()
})

//Implementación de LocalStorage
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('puesto_trabajo') == null) {
    localStorage.setItem('puesto_trabajo', JSON.stringify([]));
  } else {
    toDoList = JSON.parse(localStorage.getItem('puesto_trabajo'));
    updateToDoList();
  }
}); 