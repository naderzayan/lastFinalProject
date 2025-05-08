import { createContext,useState } from 'react'


  const CounterContext= createContext();



   function CounterProvider ({children})


  {
    const [myCounter, setmyCounter] = useState(0);
  
return(

<CounterContext.Provider value={{myCounter,setmyCounter}   } > 
  {children}

</CounterContext.Provider>
)


  }
  export{CounterProvider,CounterContext}



 
  








