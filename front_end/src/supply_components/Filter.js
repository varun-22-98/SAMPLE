import React, {useState,useEffect} from "react";

const Filter = ({data,category,handleFilter}) => {
    const [selectedCategory, setSelectedCategory] = useState('')
    // const [filteredResults,setFilteredResults] = useState([]);

    useEffect(() => {
        if(selectedCategory==='') {
            handleFilter(data)
        }
        const filtered = data.filter((item) => {  
            return (item[category].toLowerCase().includes(selectedCategory.toLowerCase()))
        })
        handleFilter(filtered)
    }, [selectedCategory, data])

    const changeFormat = (str) => {
        const date = str;
        const [day, month, year] = date.split('-');
        const result = [year, month, day].join('-');
        return result;
    }
    
    function getUnique(arr, comp) {
        const unique =  arr.map(e => e[comp])
            .map((e, i, final) => final.indexOf(e) === i && i)
            .filter((e) => arr[e]).map(e => arr[e]);
        return unique;
    }

    return (    
        <select
            // value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            // name="product-dropdown"
            >{getUnique(data,category).map((details,index)=>{
                return <option key={index}>{details[category]}</option>
            })}</select>
    )
}

export default Filter;