import './Card.style.css'
import { Link } from 'react-router-dom'

export function Card({ text, imageSrc, id }) {
    return (
        <Link to={"/product/"+ id}  className="card">
            {imageSrc && <img src={imageSrc} alt={text}   />}
            <p>{text}</p>
        </Link>
    )
}
