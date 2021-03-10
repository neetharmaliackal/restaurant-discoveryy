import {React,useState,useEffect} from 'react';
import './restaurant.scss';
import BANGALORE_DATA from './bangalore';
import KOCHI_DATA from './kochi';
import HYDERABAD_DATA from './hyderabad';
 
import { useParams } from "react-router-dom";
//import NEWS_DATA from '../food-items/food-items';


//functional component
/*const Article = ({id,title,imageUrl,details}) => (
    <div 
        className='menu-item'>
    <div className='content'>
        <img src={imageUrl}/>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>CLICK NOW</span>
    </div>
</div>
)*/






const Restaurant = ()=>{
    const id =useParams() ;
    console.log(id);
    const [ Restaurant,setRestaurant]= useState([]);
    useEffect(() => {
        if(id.id=='Kochi')
        {
           setRestaurant(KOCHI_DATA);
           console.log("fdgfdg");
        }
        else  if(id.id=='Hyderabad')
        {
           setRestaurant(HYDERABAD_DATA);
           console.log("fdgfdg");
        }
        else if
        (id.id=='Bangalore')
        {
           setRestaurant(BANGALORE_DATA);
           console.log("fdgfdg");
        }
    }, []) 
  
   // render(){
    //    const id = this.props.match.params.id;
       /* console.log(NEWS_DATA);
        const SelectedArticle = NEWS_DATA.filter((article) => article.id == id)[0];
        console.log(SelectedArticle );*/
        console.log(KOCHI_DATA);
        return (
            <div className="overview">
          {  Restaurant.map((rest) => (
               // <MenuItem key={id} title={title} imageUrl={imageUrl} id={id} details={details}/>
            
     
        <div className='rcontent'>
            <img src={rest.imageUrl}/>
           
            <h1 className='title'>{rest.title}</h1>
            <span className='subtitle'>{rest.details}</span>
            
            </div>  
       
        ))}
        </div>
            )
    }


export default   Restaurant ;

