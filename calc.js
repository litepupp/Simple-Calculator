const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')

keys.addEventListener('click', e => {
	if (e.target.matches('button')) {
		const key = e.target
		const action = key.dataset.action

		if (!action) {
			console.log('NUMBER KEY')
		}

		if (
			action === 'add' ||
			action === 'subtract' ||
			action === 'multiply' ||
			action === 'divide'
		) {
			console.log('OPERATOR KEY')
		}

		if (action === 'decimal') {
			console.log('DECIMAL KEY')
		}

		if (action === 'clear') {
			console.log('CLEAR KEY')
		}

		if (action === 'calculate') {
			console.log('EQUAL KEY')
		}
	}
})

const display = document.querySelector('.calculator__display')

keys.addEventListener('click', e => {
	if (e.target.matches('button')) {
		const key = e.target
		const action = key.dataset.action
		const keyContent = key.textContent
		const displayedNum = display.textContent
		const previousKeyType = calculator.dataset.previousKeyType

		if (!action) {
			if (displayedNum === '0' || previousKeyType === 'operator') {
				display.textContent = keyContent
			}
			else {
				display.textContent = displayedNum + keyContent
			}

			Array.from(key.parentNode.children)
			.forEach(k => k.classList.remove('is-depressed'))
		}

		if (action === 'decimal') {
			display.textContent = displayedNum + '.'
		}

		if (
			action === 'add' ||
			action === 'subtract' ||
			action === 'multiply' ||
			action === 'divide'
		) {
			key.classList.add('is-depressed')
			calculator.dataset.previousKeyType = 'operator'
		}

		if (action === 'calculate') {
			const operator = calculator.dataset.operator
			const secondValue = displayedNum

		}
	}
})
