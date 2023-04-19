import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
	{
		name: 'Jan',
		Expense: 40000,
		Income: 24000
	},
	{
		name: 'Feb',
		Expense: 30000,
		Income: 13980
	},
	{
		name: 'Mar',
		Expense: 20000,
		Income: 98000
	},
	{
		name: 'Apr',
		Expense: 27800,
		Income: 39080
	},
	{
		name: 'May',
		Expense: 18900,
		Income: 48000
	},
	{
		name: 'Jun',
		Expense: 23900,
		Income: 38000
	},
	{
		name: 'July',
		Expense: 34900,
		Income: 43000
	},
	{
		name: 'Aug',
		Expense: 20000,
		Income: 98000
	},
	{
		name: 'Sep',
		Expense: 27800,
		Income: 39080
	},
	{
		name: 'Oct',
		Expense: 18900,
		Income: 48000
	},
	{
		name: 'Nov',
		Expense: 23900,
		Income: 38000
	},
	{
		name: 'Dec',
		Expense: 34900,
		Income: 43000
	}
]

export default function TransactionChart() {
	return (
		<div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
			<strong className="text-gray-700 font-medium">Transactions</strong>
			<div className="mt-3 w-full flex-1 text-xs">
				<ResponsiveContainer width="100%" height="100%">
					<LineChart width={500} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5, }} >
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
          				<YAxis />
          				<Tooltip />
          				<Legend />
          				<Line type="monotone" dataKey="Income" stroke="#8884d8" activeDot={{ r: 8 }} />
          				<Line type="monotone" dataKey="Expense" stroke="#82ca9d" />
        			</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}
