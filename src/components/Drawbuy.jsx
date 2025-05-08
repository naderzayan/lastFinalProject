import{ React,  useRef,useContext,useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

import Homepage from './Homepage'
import Navbar from './Navbar'
import Thecart from './Thecart'

import Watchapi from './watchapi'
import { CounterContext } from './CounterContextt'












export default function Drawbuy({ image, title, price, image2 ,myq}) {








  const myclick = () => {
    const input = document.getElementById('5')
    const light = document.getElementById('6')
    const lightt = document.getElementById('7')
    input.style.display = "none";
    light.style.display = 'block';
    lightt.style.display = 'none';
  }
  const myclick2 = () => {
    const input = document.getElementById('5')
    const lightt = document.getElementById('7')
    const light = document.getElementById('6')
    input.style.display = "none";
    lightt.style.display = 'block';
    light.style.display = 'none';


  }

  const store = () => {
    const newItem = {
      title: title,
      price: price,
      image: image,
      quantity:myq
      
      
      
      
    };

   
   
   

    
    // let items = JSON.parse(localStorage.getItem("savedItems")) || [];
     let items=JSON.parse(localStorage.getItem("savedItems")) || [];
    

  
  
    

    // Check if item already exists based on title
    const exists = items.some((item) => item.title === newItem.title);

    if (!exists) {
      items.push(newItem); // Add new item
      
      localStorage.setItem("savedItems", JSON.stringify(items)); // Save updated array
    
    } else {
    newItem
    }
    let itemIndex = items.findIndex(item => item.price === price);

    if (   items[itemIndex].quantity ===0) {
        
        items[itemIndex].quantity = 1;
          
    } else {
        
        items
    }
    localStorage.setItem("savedItems", JSON.stringify(items)); // Save upda
 
   
  

  };

      
      
      

 
  
  const {myCounter,setmyCounter}= useContext(CounterContext);
   
  
  
   useEffect(()=>{
    const uc=()=>{
      let itemz=JSON.parse(localStorage.getItem("savedItems")) || [];
      const total=itemz.reduce((sum,item)=>sum+item.quantity,0
    
  
  
      )
      setmyCounter(total)
    
    }
    uc();
   
  },[   
    
   
    
        ])
          const [Counter,setCounter]= useState(0);
          useEffect(()=>{
            const ucc=()=>{
              let cart = JSON.parse(localStorage.getItem("savedItems")) || [];
              let itemIndex = cart.findIndex(item => item.price === price);
        
              if (itemIndex !== -1) {
                  
            
                  setCounter(
                    cart[itemIndex].quantity)
              
            
          
          
              
          
            
            }}
            ucc();
           
          },[   
            
           
            
                ])
       
        const que =()=> {
 
          let cart = JSON.parse(localStorage.getItem("savedItems")) || [];
        
        
          let itemIndex = cart.findIndex(item => item.price === price);
        
          if (itemIndex !== -1) {
              
              cart[itemIndex].quantity += 1;
             
        
                
          } else {
              
              cart.push({ id: product, quantity: 1 });
          }
        
          // Save the updated cart back to localStorage
          localStorage.setItem("savedItems", JSON.stringify(cart));
        
          
        }
        
        const quee =()=> {
         
          let cart = JSON.parse(localStorage.getItem("savedItems")) || [];
        
        
          let itemIndex = cart.findIndex(item => item.price === price);
        
          if (itemIndex !== -1 && cart[itemIndex].quantity!==0) {
              
              cart[itemIndex].quantity -= 1;
           
          } else {
              
              cart.push({ id: product, quantity: 1 });
          }
        
          // Save the updated cart back to localStorage
          localStorage.setItem("savedItems", JSON.stringify(cart));
        
          
        }
        
        
        
        
        
          
          
          
  
 
  


 


   

  

 
   





  return (




    <div>
   

      <div>
        <Homepage  />
      </div>
<div className='mymain'>

      <div className='firstdiv'>
        
        
        <div className='bigclock'>

        <div id='7' className='hide'>
          <img src={` ${image} `} alt="" />
        
        </div>

        <div className='hideme' id='6'>
          <img src={` ${image2} `} alt="" />
        </div>

        <div id="5">
          <img src={` ${image} `} alt="" />
          
        </div>
        </div>

      




<div className='miniclocks'>

        <div onClick={myclick} id="1" >
          <img src={` ${image2} `} alt="" />
          
          
          


        </div>
        <div id="2 " onClick={myclick2}  >
          <img src={` ${image} `} alt="" />


        </div>
        <div id="3">

          <img src={` ${image2} `} alt="" />
        

        </div>
        </div>
      </div>






      <div className='seconddiv'>
        <div className='mycategory'>

          Category:
          {title}

        </div>
        <div className='mytext'>
        Pellentesque habitant morbi tristique senectus et netus et malesuada
         fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget,
          tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
         Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
        </div>
        <div className='myprice'> 
          {price}
        </div>

      
<div className='mycart'>
  <div className='minusplus'>
        
      
        <div className='plusss'>
          <button onClick={que}> +</button></div>
        
          <div className='plusss'>
          {Counter}
          </div>
          <div className='plusss'> 
          <button onClick={quee}> -</button></div>
          
        </div>
        <button className='cartbutton'  price={price} image={image} title={title} quantity={myq} onClick={store} >
          
       

add to cart




</button>


  

</div>
       

      </div>
      </div>


    </div>







  )
}

