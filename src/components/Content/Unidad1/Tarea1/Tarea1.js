import React, { useRef} from 'react';
import styles from './Tarea1.module.css'
import './Tarea1.module.css';


const Tarea1 = () => {
    const entradaNum1 = useRef();
    const entradaNum2 = useRef();
    
    function validation(){
        let resultado1 = entradaNum1.current.value;
        let resultado2 = entradaNum2.current.value;

        if(((Number.isInteger(+resultado1)) === true)&&((Number.isInteger(+resultado2)) === true)){
            if(+resultado1 > +resultado2) {
                alert(`${resultado1} is greater than ${resultado2}`)
                return
              }
              if (+resultado2 > +resultado1){
                alert(`${resultado2} is greater than ${resultado1}`)
                return
              }
              else{ alert("The numbers are the same") } 
              return
        }
         else{
            alert("One of the numbers you entered is not an integer")
            return
        } 
    }

    return (
    <>
        <div className={styles.margenes}>
            <div className={styles.divimagen}>
            <img src="https://d500.epimg.net/cincodias/imagenes/2020/04/20/legal/1587366115_155148_1587366209_noticia_normal.jpg" className={styles.imagenCom} />
            </div>
                <div className={styles.title}>Homework 1: Integer comparator</div>
                <div className={styles.form}>
                <div className={styles.info}> In this content whit this App you can compare 2 value of numbers.</div>
                <div id='cajaMovil'>
                    <div className={styles.numero1}>
                        <label htmlFor="first">
                            <b className={styles.etiqueta}>Enter the first number to compare:</b>
                        </label>
                        <input
                            ref={entradaNum1}
                            className={styles.input}
                            type="Number"
                            placeholder="Enter first number"
                            
                        />
                    </div>
                    <div className={styles.numero2}>
                        <label htmlFor="second">
                            <b className={styles.etiqueta}>Enter the second number to compare:</b>
                        </label>
                        <input
                            ref={entradaNum2}
                            className={styles.input}
                            type="Number"
                            placeholder="Enter second number"
                            
                        />
                    </div>
                    <button className={styles.compere} type="submit" 
                    onClick={()=> {
                        validation() 
                    }}
                    >
                  Registrar
                </button>
                </div>    
            </div>
        </div>
      </>

    )     
}
 
export default Tarea1;