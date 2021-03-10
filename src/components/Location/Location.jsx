import React from 'react';
import './Location.scss';
import {Link} from 'react-router-dom';

//functional component
const Location = ({title,imageUrl,id}) => (
    
    <div style={{
        backgroundImage: `url(${imageUrl})`
    }}
        className='location'>
    <div className='content'>
   
        <h1 className='title'>{title}</h1>
        <Link to={'/Restaurant/'+id}><span className='subtitle'>CLICK NOW</span></Link>
        
    </div>
</div>
)

export default Location;

