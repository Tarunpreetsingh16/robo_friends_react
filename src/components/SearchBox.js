import React from 'react'

const SearchBox = ({searchCriteria}) =>{
	return (
		<div>
			<input type="search" onChange={searchCriteria} placeholder="Search a robo friend..."/>
		</div>
	);
}

export default SearchBox