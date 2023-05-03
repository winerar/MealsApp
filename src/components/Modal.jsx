import { useGlobalContext } from '../context'
import ModalWindow from 'react-bootstrap/Modal'

const Modal = () => {
	const { selectedMeal, closeModal } = useGlobalContext()
	const { strMealThumb:image,
				 strMeal:title,
				 strInstructions:text,
				 strSource:source,
				 strArea:area,
				 strCategory:category,
				 strTags:tags,
				 strYoutube:youtube
				 } = selectedMeal
	
	const ingredientsKeys = Object.keys(selectedMeal).filter((key) => key.startsWith('strIngredient'))
	const measuresKeys = Object.keys(selectedMeal).filter((key) => key.startsWith('strMeasure'))
	const videoLink = youtube.replace('watch?v=', 'embed/')

	let tagList
	if (tags) {
		tagList = tags.split(',')
	} else {
		tagList = []
	}
	
	return (
	<ModalWindow show="true" onHide={closeModal} size="lg" scrollable="true" contentClassName="p-0">
		<ModalWindow.Header bsPrefix="modal-header p-0">
    	<ModalWindow.Title bsPrefix="modal-title m-5">{title}</ModalWindow.Title>
			<img src={image} alt={title} className="img app-w-18"/>
	  </ModalWindow.Header>
	  <ModalWindow.Body>
			<div className="d-flex">
				<div className="table-responsive-lg">
					<table className="table table-bordered table-sm">
						<thead className="table-light">
							<tr>
								<th scope="col">Ingredient</th>
								<th scope="col">Measure</th>
							</tr>
						</thead>
						<tbody>
							{ingredientsKeys.map((key, i) => {
								if (!selectedMeal[key]) return
								return <tr key={key}><td>{selectedMeal[key]}</td><td>{selectedMeal[measuresKeys[i]]}</td></tr>
							})}
						</tbody>
					</table>
				</div>
				<div className="container">
					<h5>Instructions</h5>
					<p>{text}</p>
				</div>
			</div>
			<div>
				<h5>Video Instructions</h5>
				<div className="ratio ratio-16x9">
					<iframe src={videoLink} allowFullScreen title="Video Instructions"></iframe>
				</div>
			</div>
	  </ModalWindow.Body>
	  <ModalWindow.Footer bsPrefix="justify-content-between modal-footer">
				<a href={source} target="_blank">Original Source</a>
				<div className="justify-content-center">
					<div className="d-flex justify-content-center mb-1">
						<span className="badge rounded-pill bg-primary me-1">{area}</span>
						<span className="badge rounded-pill bg-success me-1">{category}</span>
					</div>
					<div className="d-flex justify-content-center">
						{tagList.map((tag) => <span key={tag} className="badge rounded-pill bg-secondary me-1">{tag}</span>)}
					</div>
				</div>
		    <button className="btn btn-primary" onClick={closeModal}>Close</button>
	  </ModalWindow.Footer>
	</ModalWindow>
)
}

export default Modal