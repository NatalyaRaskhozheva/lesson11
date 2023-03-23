const minValue = 1
const maxValue = 500
const columnsNumber = 7
const K = parseInt(prompt('Введіть кількість магазинів', '0'))
function getRandomNumber(minValue, maxValue) {
	return Math.floor(Math.random() * (maxValue - minValue) + minValue)
}
function generateRandomArray(arrayLength, minValue, maxValue) {
	const arr = []
	for (let i = 0; i < arrayLength; i++) {
		const randNum = getRandomNumber(minValue, maxValue)
		arr.push(randNum)
	}
	return arr
}

function generateRandomTable(K, columnsNumber, minValue, maxValue) {
	const table = []
	for (let i = 0; i < K; i++) {
		document.write('[')
		const randomRow = generateRandomArray(columnsNumber, minValue, maxValue)
		table.push(randomRow)
		document.write(`${randomRow}`)
		document.write(']')
	}
	document.write('<br>')
	return table
}

const newArray = generateRandomTable(K, columnsNumber, minValue, maxValue)

function sumOfWeek(newArray) {
	for (let i = 0; i < newArray.length; i++) {
		sum = 0;
		for (let a = 0; a < newArray[i].length; a++) {
			sum += newArray[i][a]
		}
		document.write(`Сума ${i + 1} магазину за тиждень - ${sum}<br>`)
	}
	return sum
}
const weekSum = sumOfWeek(newArray)

function sumOfDay(newArray, startColumn, endColumn) {
	let sum = 0;
	for (let i = 0; i < newArray.length; i++) {
		for (let a = startColumn; a < endColumn; a++) {
			sum += newArray[i][a]
		}
	}
	return sum
}
const sumDay = sumOfDay(newArray)

const monday = sumOfDay(newArray, 0, 1)
document.write(`${monday}<br>`)

const tuesday = sumOfDay(newArray, 1, 2)
document.write(`${tuesday}<br>`)

const wednesday = sumOfDay(newArray, 2, 3)
document.write(`${wednesday}<br>`)

const thursday = sumOfDay(newArray, 3, 4)
document.write(`${thursday}<br>`)

const friday = sumOfDay(newArray, 4, 5)
document.write(`${friday}<br>`)

const saturday = sumOfDay(newArray, 5, 6)
document.write(`${saturday}<br>`)

const sunday = sumOfDay(newArray, 6, 7)
document.write(`${sunday}<br>`)

const workDay = sumOfDay(newArray, 0, 5)
document.write(`Прибуток за робочі дні - ${workDay}<br>`)

const workWeekend = sumOfDay(newArray, 5, 7)
document.write(`Прибуток за вихідні дні - ${workWeekend}<br>`)

function maxOfWednesday(newArray, startColumn, endColumn) {
	let newArr = [];
	for (let i = 0; i < newArray.length; i++) {
		for (let a = startColumn; a < endColumn; a++) {
			newArr.push(newArray[i][a])
		}
	}
	return newArr
}
const maxWednesday = maxOfWednesday(newArray, 2, 3)
const max = Math.max(...maxWednesday)
document.write(`Максимальне значення за середу - ${max}<br>`)

function getMore200(newArray) {
	let createArr = []
	for (let row of newArray) {
		for (let element of row) {
			if (element > 200) createArr.push(element)
		}
	}
	return createArr
}
const more200 = getMore200(newArray)
document.write(`Значення, що більші за 200 - ${more200}<br>`)

let secondArray = JSON.parse(JSON.stringify(newArray))
for (const row of secondArray) {
	for (const element of row) {
		row.sort((el1, el2) => el1 - el2)
	}
}
document.write(`Кожен тиждень за зростанням - ${secondArray}<br>`)

let maxRowsElement = newArray.sort((row1, row2) => {
	row1 = Math.max(...row1)
	row2 = Math.max(...row2)
	return row2 - row1
})
document.write(`Сортування рядків по максимальному числу - ${maxRowsElement}<br>`)

let maxSumRows = newArray.sort((row1, row2) => {
	row1 = row1.reduce((prevResult, element) => prevResult + element)
	row2 = row2.reduce((prevResult, element) => prevResult + element)
	return row2 - row1
})
document.write(`Сортування рядків по максимальній сумі - ${maxSumRows}`) 
