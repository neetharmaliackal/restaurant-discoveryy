import React from 'react';
import Location from '../Location/Location';
import './directory.styles.scss'
import  LOCATION_DATA from '../location-data/location-data.js';

//class component as we need to store the state value
class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
            sections :  LOCATION_DATA
        }
    }

    render() {
        return(
            <div className='directory-menu'>
                {
                  this.state.sections.map(({title,id,imageUrl,details}) => (
                    <Location key={id} title={title} imageUrl={imageUrl} id={id} details={details}/>
                  ))
                  
                }
            </div>
        )
    }
}

export default Directory;