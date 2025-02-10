import { useEffect, useState } from "react";

const CounterF =() => {
                      console.log("CounterF : render");
                      const [count,setCount] =useState(10);
                      const [loading,setLoading] =useState(false);


                      useEffect( ( ) => {

                                            const timer = setTimeout(()=>setTimeout(false),
                                            3000)
                                            return () => clearTimeout(timer);
                                            }, [])
                                            useEffect(() =>{
                                                                  console.log("Component did update");

                                            },[count])

                  
const handelClick = () => setCount((prev) => prev +5) 
const handelClick1 = () => setCount((prev) => prev -5) 
const reset = ()  => setCount(10)

return (
                      <>
                          {loading ? (
                              <p>Loading...</p>
                          ) : (
                              <>
                                  <p>Count = {count}</p>
                                  <button onClick={handelClick}>+1</button>
              
                                  <button onClick={handelClick1}>-1</button>

                                  <button onClick={reset}>Reset</button>
                              </>
                          )}
                      </>
                  );
              };
              export default CounterF;