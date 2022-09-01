import { Link } from "react-router-dom"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <h1>Unidades</h1>
                <li>
                    <Link to="/unidad1">Unidad 1</Link>
                </li>   
                <li>
                    <Link to="/unidad2">Unidad 2</Link>
                </li>           
                <li>
                    <Link to="/unidad3">Unidad 3</Link>
                </li>  
                <li>
                    <Link to="/unidad4">Unidad 4</Link>
                </li>  
                <li>
                    <Link to="/unidad5">Unidad 5</Link>
                </li>  
            </ul>
        </div>
    )
}

export default Sidebar