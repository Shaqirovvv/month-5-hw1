import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Page1 = () => {
	const navigate = useNavigate()
	const [users, setUsers] = useState([])

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(data => {
				setUsers(data)
			})
	}, [])

	return (
		<div>
			<h1>Page 2</h1>
			<button onClick={() => navigate(-1)}>
				Go Back
			</button>
			<div>
				{users.map(user => (
					<h2>{user.name}</h2>,
					<h2>{user.email}</h2>,
					<h2>{user.phone}</h2>
				))}
			</div>
		</div>
	)
}

export default Page1
