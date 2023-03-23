const numberShips = 5
const rowsNumber = 6
const columnsNumber = 6

function generateRandomArray(arrayLength) {
	const arr = []
	for (let i = 0; i < arrayLength; i++) {
		arr.push(0)
	}
	return arr
}

function generateRandomTable(rowsNumber, columnsNumber) {
	const table = []
	document.write('<table><tbody>')
	for (let i = 0; i < rowsNumber; i++) {
		document.write('<tr>')
		const Row = generateRandomArray(columnsNumber)
		table.push(Row)
		document.write(`<td>${Row}</td>`)
		document.write('</tr>')
	}
	createShipps(numberShips)
	document.write('</tbody></table>')
	return table
}
const newArray = generateRandomTable(rowsNumber, columnsNumber) // Заповнили весь масив 0
// Функція для рандомного заповнення кораблів 
function createShipps(newArray, numberShips) {
	for (let i = 0; i < numberShips; i++) {
		let shipIndexRow
		let shipindexColumns
		do {
			shipIndexRow = Math.floor(Math.random() * rowsNumber)
			shipindexColumns = Math.floor(Math.random() * columnsNumber)
		} while (newArray[shipIndexRow][shipindexColumns] === 1)
		newArray[shipIndexRow][shipindexColumns] = 1
	}
	return newArray
}
function getPlay(newArray, numberShips) {
	let indexRows
	let indexColumns
	let destroyed = 0
	let shell = parseInt(prompt('Скільки у вас снарядів', '0'))
	for (let i = 0; i < shell; i++) {
		do {
			indexRows = parseInt(prompt('Введіть значення рядка'))
			indexColumns = parseInt(prompt('Введіть значення колонки'))
			if ((newArray[indexRows - 1][indexColumns - 1] === 1)) destroyed++
			else destroyed
		} while ((destroyed < numberShips))
	}


	return destroyed
}

createShipps(newArray, numberShips)
document.write(`${newArray}`)

const play = getPlay(newArray)
document.write(`Ви потопили ${play} кораблів`)
