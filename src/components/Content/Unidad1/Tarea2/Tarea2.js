import React, { useRef } from 'react';
import styles from './Tarea2.module.css'
import './Tarea2.module.css';
import evaluate from './logicparsermaster';
// import calculadora from "../../../assets/images/Untitled.png"
import TablaVerdad from './logicparsermaster/tableTrue';


const Tarea2 = () => {
    const expresionLogicaRef = useRef();

    function imprimirTabla() {
        let resultado1 = evaluate(expresionLogicaRef.current.value).result;
        alert(resultado1);

        return (
            <>
                <div>
                    <h1>
                        Tabla de verdad
                    </h1>
                </div>
            </>
        )
    }

    return (
        <>

            <div className={styles.margenes}>
                <div className={styles.title}>H</div>
                <div className={styles.calculadora}>
                    {/* <img src={calculadora} /> */}
                </div>
                <div className={styles.contenido}>
                    <div className={styles.numero1}>
                        <input
                            ref={expresionLogicaRef}
                            className={styles.input}
                            type="txt"
                            placeholder="Enter the ecuation here"

                        />
                    </div>
                    <button className={styles.compere} type="submit" onClick={() => {
                        console.log(expresionLogicaRef.current.value)
                        const resultado = evaluate(expresionLogicaRef.current.value).result;
                        console.log(resultado)
                        imprimirTabla();
                    }}>EVALUAR</button>
                    <button className={styles.compere} type="submit">not</button>
                    <button className={styles.compere} type="submit">and</button>
                    <button className={styles.compere} type="submit">or</button>
                    <button className={styles.compere} type="submit">implies</button>
                    <button className={styles.compere} type="submit">iff</button>
                    <button className={styles.compere} type="submit">nand</button>
                    <button className={styles.compere} type="submit">nor</button>
                    <button className={styles.compere} type="submit">Registrar</button>

                </div>
            </div>
        </>
    )
}

export default Tarea2;