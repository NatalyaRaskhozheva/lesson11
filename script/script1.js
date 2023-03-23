const minValue = 1
const maxValue = 100
rowsNumber = 4
columnsNumber = 4

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

function generateRandomTable(rowsNumber, columnsNumber, minValue, maxValue) {
	const table = []
	document.write('<table><tbody>')
	for (let i = 0; i < rowsNumber; i++) {
		document.write('<tr>')
		const randomRow = generateRandomArray(columnsNumber, minValue, maxValue)
		table.push(randomRow)
		document.write(`<td>${randomRow}</td>`)
		document.write('</tr>')

	}
	document.write('</tbody></table>')
	return table
}

const newTable = generateRandomTable(rowsNumber, columnsNumber, minValue, maxValue)

function findLeftTop(newTable) {
	sum = 0
	for (let i = 0; i < 2; i++) {
		for (let a = 0; a < 2; a++) {
			sum += newTable[i][a]
		}
	}
	return sum
}
const sumLeftTop = findLeftTop(newTable)
document.write(`${sumLeftTop}<br>`)

function findRightTop(newTable) {
	sum = 0
	for (let i = 0; i < 2; i++) {
		for (let a = 2; a < 4; a++) {
			sum += newTable[i][a]
		}
	}
	return sum
}
const sumRightTop = findRightTop(newTable)
document.write(`${sumRightTop}<br>`)

function findLeftBottom(newTable) {
	sum = 0
	for (let i = 2; i < 4; i++) {
		for (let a = 0; a < 2; a++) {
			sum += newTable[i][a]
		}
	}
	return sum
}
const sumLeftBottom = findLeftBottom(newTable)
document.write(`${sumLeftBottom}<br>`)

function findRightBottom(newTable) {
	sum = 0
	for (let i = 2; i < 4; i++) {
		for (let a = 2; a < 4; a++) {
			sum += newTable[i][a]
		}
	}
	return sum
}
const sumRightBottom = findRightBottom(newTable)
document.write(`${sumRightBottom}<br>`)

function findPairRowsSum(newTable) {
	sum = 0
	for (let i = 0; i < newTable.length; i++) {
		if ((i + 1) % 2 === 0) {
			for (let a = 0; a < newTable[i].length; a++) {
				sum += newTable[i][a]
			}
		}
	}
	return sum
}
const sumPairRows = findPairRowsSum(newTable)
document.write(`${sumPairRows}<br>`)

function findNoPairColumnsSum(newTable) {
	sum = 0
	for (let i = 0; i < newTable.length; i++) {
		for (let a = 0; a < newTable[i].length; a++) {
			if ((a + 1) % 2 !== 0) {
				sum += newTable[i][a]
			}
		}
	}
	return sum
}
const sumNoPairColumns = findNoPairColumnsSum(newTable)
document.write(`${sumNoPairColumns}<br>`)

function findPairRowsNoColumnsSum(newTable) {
	sum = 0
	for (let i = 0; i < newTable.length; i++) {
		if ((i + 1) % 2 === 0) {
			for (let a = 0; a < newTable[i].length; a++) {
				if ((a + 1) % 2 !== 0) {
				sum += newTable[i][a]
			}
		}
		}
	}
	return sum
}
const sumPairRowsNoColumns = findPairRowsNoColumnsSum(newTable)
document.write(`${sumPairRowsNoColumns}<br>`)

function findNoPairRowsPairColumnsSum(newTable) {
	sum = 0
	for (let i = 0; i < newTable.length; i++) {
		if ((i + 1) % 2 !== 0) {
			for (let a = 0; a < newTable[i].length; a++) {
				if ((a + 1) % 2 === 0) {
				sum += newTable[i][a]
			}
		}
		}
	}
	return sum
}
const sumNoPairRowsPairColumns = findNoPairRowsPairColumnsSum(newTable)
document.write(`${sumNoPairRowsPairColumns}<br>`)