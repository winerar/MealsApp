import { useGlobalContext } from '../context'
import { BsHeart, BsHeartFill } from 'react-icons/bs'

const Meals = () => {
	const { loading, meals, selectMeal, addToFavorites, removeFromFavorites, favorites } = useGlobalContext()

	if (loading) {
		return <section className="container d-flex justify-content-center">
			<div className="spinner-border" role="status">
  			<span className="visually-hidden">Loading...</span>
			</div>
		</section>
	}

	if (meals.length < 1) {
		return <section className="container d-flex justify-content-center">
			<h4>No meals matched your search term. Please try again.</h4>
		</section>
	}
	
	return <section className="container d-flex flex-row mb-3 flex-wrap justify-content-center">
			{meals.map((singleMeal) => {
				const { idMeal, strMeal:title, strMealThumb:image } = singleMeal
				return <article key={idMeal} className="p-2">
						<div className="card app-w-18">
						<img src={image} role="button" className="card-img-top" onClick={() => selectMeal(idMeal)}/>
						<footer className="card-body d-flex justify-content-between">
							<div className="d-flex align-items-center">
								<h5 className="card-title">{title}</h5>
							</div>
							<div className="d-flex align-items-center">
								{favorites.find((item) => item.idMeal === idMeal) 
									? <button className="app-like-btn" onClick={() => removeFromFavorites(idMeal)}>
											<BsHeartFill />
										</button>
									: <button className="app-like-btn" onClick={() => addToFavorites(idMeal)}>
											<BsHeart />
										</button>
								}
								</div>
						</footer>
					</div>
				</article>
			})}
	</section>
}

export default Meals