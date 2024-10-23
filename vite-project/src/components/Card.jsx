import PropTypes from 'prop-types';

const Card = ({ id, image, name, deleteCharacter }) => {

    return (
        <div className="card" style={{ width: '18rem', height: '22rem' }}>
            <img
                src={image}
                className="card-img-top"
                alt="..."
                style={{ width: "200px", height: "200px", objectFit: "cover", objectPosition: "top" }}
            />

            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <button
                    onClick={()=>deleteCharacter(id)}
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}

Card.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    deleteCharacter: PropTypes.func.isRequired
}




export default Card;







{/* <div className="card-body">
<h5 className="card-title">{name}</h5>
Funcion sin parametros
<button
    onClick={showAlertName}
>
    Eliminar
</button>

Fcunción con parametros
<button
    onClick={()=>alert(name)}
>
    Eliminar
</button>
</div> */}