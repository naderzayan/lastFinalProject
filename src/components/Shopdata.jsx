mport React, {useEffect,  useState} from 'react'
import { shopdata } from './Homedata'
import Smallcatergory from './Smallcatergory'
import Myinput from './Myinput'

export default function Shopdata( ) {

  
  
     const [searchposts,setsearchposts]=useState(shopdata)
    
      useEffect(()=>{
          shopdata.filter  ((ele)=>ele.title
      )
      setsearchposts(shopdata)}
       
      ,[shopdata])
  
  
  
 

  
  
  return (
    <div className='shopp'>

    {searchposts.map((ele,index)=> 
       ( <Smallcatergory key={ele.id} title={ele.title}  amount={ele.amount}/>))}
      </div>
          
       
  )
}
