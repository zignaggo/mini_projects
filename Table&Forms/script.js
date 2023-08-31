// User
const studentsContainer = document.querySelector('#students-container')
const parser = new DOMParser()
const userTemplate = ({
	id,
	name,
	image,
	date,
	status,
	registration,
	studentClass,
}) => ` <tr>
						<th><input type="checkbox" name="" id="${id}" /></th>
						<th>
							<div class="perfil">
								<img src="${image}" alt="">
								<span>${name}</span>
							</div>
						</th>
						<th>
							<div class="date">
								${date}
							</div>
						</th>
						<th>
							<div class="status">
								${status ? 'Ativo' : 'Inativo'}
							</div>
						</th>
						<th>
							<div class="registration">
								${registration}
							</div>
						</th>
						<th>
							<div class="class">
								${studentClass}
							</div>
						</th>
					</tr>`
const students = [
	{
		id: 1,
		name: 'João Silva',
		image: '',
		date: '1999-05-15',
		status: true,
		registration: '202301',
		studentClass: '10A',
	},
	{
		id: 2,
		name: 'Maria Santos',
		image: '',
		date: '2000-02-20',
		status: true,
		registration: '202302',
		studentClass: '11B',
	},
	{
		id: 3,
		name: 'Pedro Almeida',
		image: '',
		date: '1998-11-10',
		status: false,
		registration: '202303',
		studentClass: '12C',
	},
	{
		id: 4,
		name: 'Ana Oliveira',
		image: '',
		date: '2001-07-08',
		status: true,
		registration: '202304',
		studentClass: '9D',
	},
	{
		id: 5,
		name: 'Carlos Santos',
		image: '',
		date: '2002-03-25',
		status: false,
		registration: '202305',
		studentClass: '10A',
	},
	{
		id: 6,
		name: 'Mariana Costa',
		image: '',
		date: '1999-09-12',
		status: true,
		registration: '202306',
		studentClass: '11B',
	},
	{
		id: 7,
		name: 'Rafael Souza',
		image: '',
		date: '2003-01-30',
		status: true,
		registration: '202307',
		studentClass: '12C',
	},
	{
		id: 8,
		name: 'Julia Lima',
		image: '',
		date: '2000-11-18',
		status: false,
		registration: '202308',
		studentClass: '9D',
	},
	{
		id: 9,
		name: 'Gustavo Ferreira',
		image: '',
		date: '2002-07-04',
		status: true,
		registration: '202309',
		studentClass: '10A',
	},
	{
		id: 10,
		name: 'Isabela Rodrigues',
		image: '',
		date: '2001-05-22',
		status: true,
		registration: '202310',
		studentClass: '11B',
	},
	// Adicione mais estudantes conforme necessário
]

const renderStudents = (students) => {
	studentsContainer.innerHTML = ''
	students.map((student) => {
		studentsContainer.innerHTML += userTemplate(student)
	})
}


// Variables
let quantityStudentsFilter = 5
let nameFilter = ''



const filteredByQuantity = (students) => students.slice(0, quantityStudentsFilter)
const filteredByName = (students) => {
	if (!nameFilter) return students
	const name = nameFilter.toLowerCase().trim()
	return students.filter((user) => user.name.toLowerCase().includes(name))
}

const allFilters = () => {
	const initialStudens = students
	console.log(nameFilter)
	return filteredByQuantity(filteredByName(students))
}


//  Filters
const filterQuantity = document.querySelector('#quantity_students_filter')
filterQuantity.addEventListener('change', (e) => {
	quantityStudentsFilter = e.target.value
	renderStudents(allFilters())
})

const menuFilter = document.querySelector('#menu-filter')
menuFilter.children[0].addEventListener('click', () => {
	menuFilter.children[1].classList.toggle('hide')
})

const menuNameInput = document.querySelector('#menu-popover-name-input')
menuNameInput.addEventListener('keyup', (e) => {
	nameFilter = e.target.value
	// console.log(e.target.value)
	renderStudents(allFilters())
}) 
renderStudents(allFilters())