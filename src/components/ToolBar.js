import { useEffect, useState } from 'react';
import './ToolBar.css';

function ToolBar ({setFilters}) {
    const priceFilterAll = "0-99999999999";
    const [titleFilter, setTitleFilter]  = useState("");
    const [priceFilter, setPriceFilter] = useState (priceFilterAll);

    useEffect(() => {
        let [priceMin, priceMax] = priceFilter.split('-');
        
        setFilters({
            title: titleFilter.toLowerCase(),
            priceMin: Number(priceMin),
            priceMax: Number(priceMax), 
        })
    }, [titleFilter, priceFilter, setFilters]);

    return (
        <div className="tools-bar">
                <div className='search-bar'>
                    <form role="search">
                        <input type="search" placeholder="Search..." aria-label="Search" className="search" 
                               value = {titleFilter} onChange={e => setTitleFilter(e.target.value)} />
                    </form>
                </div>
                <form className="items-sort">
                    <select name="Price" className="items-sort__sorting-method" 
                            value = {priceFilter} onChange={e => setPriceFilter(e.target.value)}>
                        <option value={priceFilterAll}>Price: all</option>
                        <option value="0-15">Price: from 0 to 15 </option>
                        <option value="15-30">Price: from 15 to 30</option>
                        <option value="30-99999999999">Price: from 30</option>
                     {/*    <div className="items-sort__button">
                            <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 13L0.0717964 0.25L13.9282 0.25L7 13Z" fill="white"/>
                            </svg>
                        </div> */}
                    </select>
                </form>
            </div>
    );
}

export default ToolBar;