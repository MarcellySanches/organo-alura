import './Professional.css'

const Professional = ({name, office, image, cardColor}) => {
    return(
        <div className='professional'>
            <div className='card-header' style={{backgroundColor: cardColor}}> 
                <img src={image} alt="professional-Marcelly" />
            </div>
            <div className='card-footer'>
                <h4>{name}</h4>
                <h5>{office}</h5>
            </div>
        </div>
    )
}

export default Professional;