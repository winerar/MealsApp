import { useState } from 'react'
import { useGlobalContext } from '../context'
import { GiMeal } from 'react-icons/gi'

const Search = () => {
	const [text, setText] = useState('')

	const { setSearchTerm, fetchRandomMeal } = useGlobalContext()

	const handleChange = (event) => {
		setText(event.target.value)
		setSearchTerm(text)
	}
	const handleSubmit = (event) => {
		event.preventDefault()
		if (text) {
			setSearchTerm(text)
		}
	}

	const handleRandomMeal = () => {
		setSearchTerm('')
		setText('')
		fetchRandomMeal()
	}
	
	return <header>
		<nav className="navbar bg-body-tertiary bg-dark">
		  <div className="container-fluid justify-content-center">
				<a className="navbar-brand" href="."><GiMeal className="app-logo" /></a>
				<form className="d-flex me-2" role="search" onSubmit={handleSubmit}>
		      <input className="form-control me-2" type="search" placeholder="type favorite meal" aria-label="Search" value={text} onChange={handleChange} />
		      {/* <button className="btn btn-primary" type="submit">Search</button> */}
		    </form>
				<button type="button" className="btn btn-outline-light me-2" onClick={handleRandomMeal}>Surprise me!</button>
		  </div>
		</nav>
	</header>
}

export default Search