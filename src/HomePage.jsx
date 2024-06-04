import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
	const navigate = useNavigate()

	return (
		<div>
			<h1>Homepage</h1>
			<div>
				<button className='nav-button' onClick={() => navigate('/page1')}>
					page1
				</button>
				<button className='nav-button' onClick={() => navigate('/page2')}>
					page2
				</button>
			</div>
		</div>
	)
}

export default Home

