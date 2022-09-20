import React from "react";
import Card from "./components/Card";
import portrait from './assets/portrait.jpeg'

function App() {
  return (
    <div className="bg-blue-100 h-screen flex justify-center py-2">
       <Card>
         <div className="busness-card">
            <div className=" bg-blue-300 w-[320px] md:w-[350px] h-[140px] relative flex justify-center">
               <img src="https://imgs.search.brave.com/zGqID8FRKYSH7265i-jvHQGt89bDJf4xHT374DaQo0I/rs:fit:1200:1200:1/g:ce/aHR0cDovL3BsdXNw/bmcuY29tL2ltZy1w/bmcvY29kZXItcG5n/LXNvdXJjZS1jb2Rl/LWljb24tMTYwMC5w/bmc" alt="" />
               <div className="portrait bg-gray-500 h-[110px] w-[110px] rounded-[100%] absolute mt-[100px] ">
                   <img src={portrait}alt="" className=" rounded-[100%]"/>
               </div>
            </div>
            <div className="description text-center mt-[100px]">
              <h1 className="pt-4 text-2xl font-bold">HI 👋🏾!!</h1>
              <h1 className="text-xl font-bold">I am Nana Kweku Otoo</h1>
              <p className="mt-2 text-[20px] font-semibold">I am a Frontend Engineer from Ghana <span>🇬🇭</span></p>
              <p className="px-4 mt-2 text-[15px] ">I build beautiful,responsive and interactive web applications for the best of user experiences💯.</p>
              <p className="px-4 mt-2 text-[15px] ">To write efficient code for you, I need fuel for my mind and body. Unlike most developers who burn <span className="font-bold text-[16px] ">Coffee<span>🥤</span></span> into code, I am allergic to <span className="font-bold text-[16px] ">Coffee<span>🥤</span></span>. So no offense my <span className="font-bold text-[16px] ">Coffee<span>🥤</span></span> devs.</p>

              <p className="px-4 mt-2 text-[16px] ">So abeg show me some love<span className="text-[19px] ">❤️‍🔥</span> by clicking the <span className="font-bold">button</span> below to buy me a pack of <span className="font-bold">Gob3<span>🥘</span></span></p>
             
             <div className="flex  justify-center mt-5">
                <button >
                  <div className=" border border-1 border-black px-5 align-middle w-full h-[50px] py-3">      
                        Buy me a pack Gob3 <span>🥘</span>
                  </div>
                </button>
              </div>
 
            </div>
         </div>

       </Card>
    </div>
  );
}

export default App;
