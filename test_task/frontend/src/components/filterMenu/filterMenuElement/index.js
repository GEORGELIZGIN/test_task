import React, {useState} from 'react';
import styles from  './styles.module.css';


const FilterMenuElement = ({name, selectField}) => {
    let namestovalues = {
        'Название': 'name',
        'Количество': 'quantity',
        'Расстояние': 'distance',
        'Больше': '__gt',
        'Меньше': '__lt',
        'Равно': '',
        'Содержит': '',
    }
    const [isSelected, setIsSelected] = useState(false)
    const foo = () => {
        isSelected ? setIsSelected(false) : setIsSelected(true);
        console.log(isSelected)
        selectField(namestovalues[name])
        console.log(name)
    }
    return <button onClick={foo} className={isSelected ?  styles.Acivated : styles.NotActivated }>{name}</button>
}

export default FilterMenuElement