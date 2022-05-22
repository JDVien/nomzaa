import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'

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
        console.log(filteredList[0][2], 'filteredList')
        e.preventDefault();
        if (filteredList.length > 0) {
            history.push(`/products/${filteredList[0][2]?.category}/${filteredList[0][2]}`)
            // (
            //     <Link to={{ pathname:`/products/${products[0].category}/${filteredList[0][2]}`, state: {fromSearch: products[0] }}}/>
            // )

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
                                value={product.title}
                                onClick={() => (
                                    // history.push(`/products/${product?.category}/${product?.id}`)
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
