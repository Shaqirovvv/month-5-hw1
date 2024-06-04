import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Page1 = () => {
	const navigate = useNavigate()
	const [posts, setPosts] = useState([])

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(data => {
				setPosts(data)
			})
	}, [])
	return (
		<div>
			<h1>Page 1</h1>
			<button onClick={() => navigate(-1)}>Go Back</button>
			<div>
				{posts.map(post => (
					<h1>{post.title}</h1>
				))}
			</div>
		</div>
	)
}

export default Page1
