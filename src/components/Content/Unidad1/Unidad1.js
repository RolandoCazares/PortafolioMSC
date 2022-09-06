import styles from './Unidad1.module.css'

const Unidad1 = () => {
    return (
        <div className={styles.margenes}>
            <div className={styles.title}>Homework 1: Integer comparator</div>
            <div className={styles.info}> In this content whit this App you can compare 2 value of numbers.</div>
            <div className={styles.form}>
                <div className={styles.numero1}>
                    <label htmlFor="psw">
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
                    <label htmlFor="psw">
                        <b className={styles.etiqueta}>Enter the second number to compare:</b>
                    </label>
                    <input
                        className={styles.input}
                        type="Numero2"
                        placeholder="Enter second number"
                        name="No2"
                    />
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
 
export default Unidad1;