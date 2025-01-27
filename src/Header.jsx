import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<header>
			<h1 path='/'>
				<Link>Logo</Link>
			</h1>
			<nav>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/page1'>Page 1</Link>
					</li>
					<li>
						<Link to='/page2'>Page 2</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
