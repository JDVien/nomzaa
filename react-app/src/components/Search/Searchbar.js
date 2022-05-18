import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'



const SearchBar = () => {
    const history = useHistory()

    const products = useSelector(state => state.products)
    const productlist = Object.values(products).map(product => [product.title, product.id])

    const [filteredList, setFilteredList] = useState([])
    const [searchWord, setSearchWord] = useState("")

    useEffect(() => {
        setFilteredList(productlist.filter(product => product[0].toLowerCase().includes(searchWord.toLowerCase())))
    }, [searchWord])

    function handleSubmit(e) {
        e.preventDefault();
        if (filteredList.length > 0) {
            history.push(`/products/${filteredList[0][2]}`)
        }
    }

    return (
        <div className='search-bar-box'>
            <form onSubmit={e => handleSubmit(e)}>
            <input
                type="text"
                value={searchWord}
                onChange={e => setSearchWord(e.target.value)}
                className='search-bar-input'
                placeholder='Search for products'
            />
            </form>
            {searchWord != '' && (
                <div>
                    <ul className='searchresult-list'>
                        {filteredList.map((product) => (
                            <li
                                key={product.id}
                                value={product.long_name}
                                onClick={() => history.push(`/products/${product[2]}`)}
                            >{product[0]}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>

    )
}

export default SearchBar
