import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function HomeInit({ page }) { 
  //console.log(page);

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/home/unidad1`; 
    navigate(path);
  } 

  return (
    <>
      <div>{page}</div>
      <Outlet />
      
      <button
          className="botonExit"
          onClick= {
            routeChange
          }
        >
          click here to see the portfolio
        </button>
    </>
  );
}

export default HomeInit;
