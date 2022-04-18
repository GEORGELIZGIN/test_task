import styles from './styles.module.css'


const Row = ({date, name, quantity, distance }) => {
  return <tr>
    <td className={styles.td}>{date}</td>
    <td>{name}</td>
    <td>{quantity}</td>
    <td>{distance}</td>
  </tr>

  
}

export default Row