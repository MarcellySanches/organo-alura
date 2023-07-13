import Professional from '../Professional';
import './Team.css'

const Team = (props) => {

    return (
        (props.professionals.length > 0) ? <section className='team' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.name}</h3>
            
            <div className='professional-card'>
            {props.professionals.map( professional => 
                <Professional 
                    cardColor={props.corPrimaria}
                    name={professional.name} 
                    office={professional.office} 
                    image={professional.image} 
                    key={professional.name}/>
                )}
            </div>        
        </section>
        : ""
    )

}

export default Team;