const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders) {
	addEventListener('dragover', dragover)
	addEventListener('dragenter', dragenter)
	addEventListener('dragleave', dragleave)
	addEventListener('drop', dragdrop)
}

function dragstart(event) {
	event.target.classList.add('hold')
	setTimeout(() => event.target.classList.add('hide'), 0)
}

function dragend(event) {
	event.target.className = 'item'

}


function dragover(event) {
	event.preventDefault()
}

function dragenter(event) {
	if (event.target.classList.contains('placeholder')) {
		event.target.classList.add('hovered')
	}
}

function dragleave(event) {
	event.target.classList.remove('hovered')

}

function dragdrop(event) {
	event.target.classList.remove('hovered')
	if (event.target.classList.contains('placeholder')) {
		event.target.append(item)
	}
}