import { useGlobalContext } from '../context'
import Accordion from 'react-bootstrap/Accordion'

const Favorites = () => {
	const { favorites, selectMeal, removeFromFavorites } = useGlobalContext()
	
	return (
		<Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header bsPrefix="accordion-header text-bg-success">Favorites</Accordion.Header>
        <Accordion.Body bsPrefix="text-bg-success accordion-body">
          <div className="d-flex flex-wrap justify-content-center">
					{favorites.length > 0 
						? favorites.map((item) => {
						const { idMeal, strMealThumb:image, strMeal:title } = item
	
						return <div key={idMeal} className="d-grid gap-2 me-1">
							<img src={image} alt={title} type="button" className="rounded-circle border border-3 border-white app-w-5" onClick={() => selectMeal(idMeal, true)}/>
							<button type="button" className="btn btn-sm m-0 p-0" onClick={() => removeFromFavorites(idMeal)}>Remove</button>
						</div>
					})
					: <span>Nothing yet...</span>}
				</div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
	)
}

export default Favorites