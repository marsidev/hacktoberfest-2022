import type { CounterProps } from './types'
import type { FC } from 'react'
import { useState } from 'react'

export const ReactCounter: FC<CounterProps> = ({ title, initial, color }) => {
	const [count, setCount] = useState(initial ?? 0)
	const add = () => setCount((prev) => prev + 1)
	const subtract = () => setCount((prev) => prev - 1)

	return (
		<div className='container'>
			{title && <h4 className='counter-title'>{title}</h4>}
			<div className='counter' style={{ backgroundColor: color }}>
				<button onClick={subtract}>-</button>
				<pre>{count}</pre>
				<button onClick={add}>+</button>
			</div>
		</div>
	)
}
