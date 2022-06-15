import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'

const SearchBar = () => {
    const history = useHistory()

    const products = useSelector(state => state.products)
    const productlist = Object.values(products).map(product => [product?.title, product?.id, product?.category, product])

    const [filteredList, setFilteredList] = useState([])
    const [searchWord, setSearchWord] = useState("")



    useEffect(() => {
        setFilteredList(productlist.filter(product => product[0].toLowerCase().includes(searchWord.toLowerCase())))
    }, [searchWord])

    function handleSubmit(e) {
        e.preventDefault();
        if (filteredList.length > 0) {
            // history.push(`/products/${filteredList[0][1]?.category}/${filteredList[0][1]}`)
            (
                <Link to={{ pathname:`/products/${filteredList[0][2]}/${filteredList[0][1]}`, state: {fromSearch: filteredList[0][3] }}}/>
            )

        }
    }

    return (
        <div className='search-bar-box'>
            <form onSubmit={e => handleSubmit(e)}>
            <input
                type="search"
                value={searchWord}
                onChange={e => setSearchWord(e.target.value)}
                className='search-bar-input'
                placeholder='Search for products'
            />
            </form>
            {searchWord != '' && (
                <div>
                    <ul className='searchresult-list'>
                        {filteredList?.slice(0, 10).map((product) => (
                            <li
                                key={product.id}
                                value={product.title}
                                onClick={() => (
                                    <Link to={{ pathname:`/products/${product?.category}/${product[2]}`, state: { fromSearch: product}}}/>
                                    )}
                            >{product[0]}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>

    )
}

export default SearchBar
