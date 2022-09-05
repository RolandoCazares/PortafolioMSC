import { Link } from "react-router-dom"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                
                <h1>Unidades</h1>
                <li>
                    <Link to="/home/unidad1">Unidad 1</Link>
                </li>   
                <li>
                    <Link to="/home/unidad2">Unidad 2</Link>
                </li>           
                <li>
                    <Link to="/home/unidad3">Unidad 3</Link>
                </li>  
                <li>
                    <Link to="/home/unidad4">Unidad 4</Link>
                </li>  
                <li>
                    <Link to="/home/unidad5">Unidad 5</Link>
                </li>  
                <li>
                    <Link to="/">Cerrar sesion</Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar