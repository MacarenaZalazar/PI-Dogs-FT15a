import React, {useEffect, useState} from 'react'
import Breeds from '../Breeds/Breeds'
import {getBreeds,getTemperaments} from '../../actions/index'
import { useDispatch, useSelector} from 'react-redux'
import'./Home.css'
import Filters from '../Filters/Filters';
import Pagination from '../Pagination/Pagination'



export default function Home(){
    
    //seteo el dispatch
    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(getBreeds())
        dispatch(getTemperaments())
    }, [])

    const {breeds, temperaments} = useSelector(state => state)
    
    const [pageNumber, setPageNumber] = useState(1)
    const itemsPerPage = 9
    const idxLastItem = pageNumber * itemsPerPage 
    const idxFirstItem = idxLastItem - itemsPerPage
    const currentITems = breeds && breeds.slice(idxFirstItem, idxLastItem)    
    const totalItems = typeof breeds !== 'string' && breeds.length 
    //const pagesVisited = pageNumber * itemsPerPage 
    const pageNumbers = []
    const pageCount = Math.ceil(totalItems/itemsPerPage)
    for(let i = 1; i<= pageCount; i++){
        pageNumbers.push(i)
    }

    function paginate(e){
        window.scrollTo(0, 0)
        setPageNumber(Number(e))
    }
    


    return (
        <div className='homeContainer'>
          { breeds.length > 0 || (typeof breeds === 'string') ?  
            <>  
                <div className='filterAndPag'>
                    <Filters temperaments={temperaments} paginate={paginate}/>
                    <Pagination  pageNumbers={pageNumbers} paginate={paginate} />
                </div>
                <Breeds breeds={currentITems} />
             </> : (<h1 id='loading'>Loading...</h1>)}
            </div>

        )
    
}