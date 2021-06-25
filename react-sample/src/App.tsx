import { useState, useRef } from "react"
import GreetingComponent from './components/Greeting'
import printsNameFunction, { calculate as Cal, myName } from "./utils"

function App() {
	const [state, setState] = useState('King Solomon')

	const { add, divide } = Cal(32, 45)
	printsNameFunction('Micheal')
	return (<div>
		<GreetingComponent userName={state} />
		<div>{add}</div>
		<div>{divide}</div>
		<div>{myName}</div>
		<div>
			<input onChange={(input) => {
				const value = input.target.value
				setState(value)
			}} />
		</div>
	</div>)
}

export default App;
