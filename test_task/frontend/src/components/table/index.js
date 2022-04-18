import Row from '../row/index'
import styles from './styles.module.css'


const Table = ({rows}) => {
    return <table className={styles.table}>
        <tr>
            <th className={styles.th}>Дата</th>
            <th className={styles.th}>Название</th>
            <th className={styles.th}>Количество</th>
            <th className={styles.th}>Расстояние</th>
        </tr>
        <tbody>
            {rows.map(row=><Row  name={row.name} quantity={row.quantity} date={row.date} distance={row.distance} key={row.id}/>)}
        </tbody>
    </table>
}

export default Table