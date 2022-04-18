import FilterMenuElement from '../filterMenuElement/index';
import styles from  './styles.module.css';
import React, {useState} from 'react';


const FilterMenuElementsList = ({listName, menuElementsNames, selectField}) => {

    return (
<div className={styles.dropdown}>
<button className={styles.btn}>{listName}</button>
  <div className={styles.dropdownContent}>
      {menuElementsNames.map((name,index)=><FilterMenuElement name={name} key={index} selectField={selectField} />)}
  </div>
</div>
)
    
}

export default FilterMenuElementsList