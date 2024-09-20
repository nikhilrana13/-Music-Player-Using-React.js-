import React, { useEffect, useState } from 'react'
import Navigation from '../../Components/Navigation/index'
import SearchHeader from '../../Components/SearchContainer/SearchHeader'
import './Search.css'
import { SearchData } from '../../assets/data/data'
import BrowseCard from '../../Components/SearchContainer/BrowseCard'

function Search() {
    const [search, setSearch] = useState('')
    const [filteredResults, setFilteredResults] = useState(SearchData);

    const handleSearch = (input) => {
        setSearch(input)
    }


    const SearchResults = () => {
        // console.log("Current search:", search);

        if(!search){
            // console.log("Returning all data");
            return SearchData
        } 

        const results = SearchData.filter((data) =>
            data.title.toLowerCase().includes(search.toLowerCase())
        );
        // console.log("Filtered Results:", results);
        return results;
    };
     
    useEffect(()=>{
        setFilteredResults(SearchResults());
    },[search])

    return (
        <>
            <div className="Home-container">
                <div className="side-bar">
                    <Navigation />
                </div>
                <div className="main-body">
                    <SearchHeader handlesearch={handleSearch} />
                    <div className="Browse-all-box">
                        <h3>Browse All</h3>
                        <div className="Browse-all-box-content">

                        {filteredResults.length > 0 ? (
                    filteredResults.map((data, index) => (
                   <BrowseCard imgURI={data.uri} title={data.title}bgColor={data.color}key={index}genrelink={data.link}
                  />
                ))
              ) : (
                <p>No results found</p>  // Show a message if no results match
              )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search