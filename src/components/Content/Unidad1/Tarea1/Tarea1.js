import React from 'react';
import styles from './Tarea1.module.css'

const Tarea1 = () => {
    return (
        <div className={styles.margenes}>
            <div className={styles.divimagen}>
            <img src="https://d500.epimg.net/cincodias/imagenes/2020/04/20/legal/1587366115_155148_1587366209_noticia_normal.jpg" className={styles.imagenCom} />
            </div>
                <div className={styles.title}>Homework 1: Integer comparator</div>
                <div className={styles.form}>
                <div className={styles.info}> In this content whit this App you can compare 2 value of numbers.</div>
                    <div className={styles.numero1}>
                        <div>
                        <label htmlFor="first">
                            <b className={styles.etiqueta}>Enter the first number to compare:</b>
                        </label>
                        <input
                            className={styles.input}
                            type="Numero1"
                            placeholder="Enter first number"
                            name="No1"
                        />
                    </div>
                    <div className={styles.numero2}>
                        <label htmlFor="second">
                            <b className={styles.etiqueta}>Enter the second number to compare:</b>
                        </label>
                        <input
                            className={styles.input}
                            type="Numero2"
                            placeholder="Enter second number"
                            name="No2"
                        />
                    </div>
                    </div>
                    
                    <button id="Compere"
                        className={styles.compere}
                        onClick={() => {
                            
                        
                        }}
                        >
                        Login
                    </button>
            </div>
        </div>
    )
}
 
export default Tarea1;