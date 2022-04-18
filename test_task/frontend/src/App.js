
import './App.css';
import FilterMenu from './components/filterMenu/index';
import Table from './components/table/index';
import Pagination from './components/pagination/index'
import api from './api'
import {useState, useEffect} from 'react';

function App() {
  const [filterField, setFilterField] = useState(null)
  const [filterValue, setFilterValue] = useState(null)
  const [filterCondition, setFilterCondition] = useState(null)
  const [ordering, setOrdering] = useState(null)
  const [table, setTable] = useState([])
  const [page, setPage] = useState(1)
  const [tableCount, setTableCount] = useState(0)
  let a = [{'id':1,'name':'h','date':'444','quantity':100}, {'id':2,'name':'h','date':'444','quantity':100}]

  const getTable = ({ page = 1, filterField='',  filterValue='', filterCondition='', ordering=''}) => {
    api
      .getTable({ page, filterField,  filterValue, filterCondition, ordering})
      .then(res => {
        const { results, count }  = res
        setTable(results)
        setTableCount(count)
        console.log(table, filterField, filterValue, filterCondition, tableCount, ordering, res)
      })
  }
  useEffect(_ => {
    getTable({ page: page, filterField:filterField ,  filterValue:filterValue, filterCondition:filterCondition, ordering:ordering})
  }, [page, filterField, filterValue, filterCondition, ordering])

  return (
    <div className="App">
      <FilterMenu setFilterField={field=>setFilterField(field)} setFilterCondition={condition=>setFilterCondition(condition)} setFilterValue={value=>setFilterValue(value)} setOrdering={ordering=>setOrdering(ordering)}/>
      <Table rows={table}/>
      <Pagination
        count={tableCount}
        limit={1}
        page={page}
        onPageChange={page => setPage(page)}
      />
    </div>
  );
}

export default App;
