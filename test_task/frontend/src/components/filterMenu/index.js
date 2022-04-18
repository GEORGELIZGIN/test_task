import FilterMenuElement from './filterMenuElement/index';
import FilterMenuElementsList from './filterMenuElementsList/index';
import styles from  './styles.module.css';
import React, {useState} from 'react';


const FilterMenu = ({setFilterField, setFilterValue, setFilterCondition, setOrdering}) => {
    return (<div className={styles.FilterMenu}>
<FilterMenuElementsList listName={'Фильтрация'} menuElementsNames={['Название', 'Количество',  'Расстояние']} selectField={field=>setFilterField(field)}/>
<FilterMenuElementsList listName={'Условие Фильтрации'} menuElementsNames={['Больше', 'Меньше',  'Равно', 'Содержит']} selectField={field=>setFilterCondition(field)}/>
<FilterMenuElementsList listName={'Сортировка'} menuElementsNames={['Название', 'Количество',  'Расстояние']} selectField={field=>setOrdering(field)}/>
<form>
  <label>
    Name:
    <input type="text" name="name" onChange={(event)=>{setFilterValue(event.target.value); console.log(event.target.value)}}/>
  </label>
</form>

</div>)
    
}

export default FilterMenu