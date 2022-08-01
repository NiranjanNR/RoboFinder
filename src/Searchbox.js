import React from 'react';

const Searchbox = ({searchChange,searchfield}) => {
    return(
        <div className="pa4">
            <input className="pa3 ba br4" type="search" placeholder="Search Robo" onChange={searchChange}/>
        </div>
    );
}
export default Searchbox;