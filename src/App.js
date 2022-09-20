import React from "react";
import Card from "./components/Card";

function App() {
  return (
    <div className="bg-blue-100 h-screen flex justify-center py-10">
       <Card>
         <div className="busness-card">
            <div className=" bg-blue-300 w-[320px] md:w-[350px] h-[140px] relative flex justify-center">
               bagran
               <div className="portrait bg-gray-500 h-[110px] w-[110px] rounded-[100%] absolute mt-16 ">
                   <img src="" alt="" />
               </div>
            </div>
            <div className="description mt-12 text-center">
              <h1 className="pt-4 text-2xl font-bold">HI 👋🏾!!</h1>
              <h1 className="text-xl font-bold">I am Nana Kweku Otoo</h1>
              <p className="mt-2 text-[20px] font-semibold">I am a Frontend Engineer from Ghana <span>🇬🇭</span></p>
              <p className="px-4 mt-2 text-[15px] ">I build beautiful,responsive and interactive web applications for the best of user experiences.</p>
              <p className="px-4 mt-2 text-[15px] ">To write efficient code for you, I need fuel for my mind and body. Unlike most developers who burn <span className="font-bold text-[16px] ">Coffee<span>🥤</span></span> into code, I am allergic to <span className="font-bold text-[16px] ">Coffee<span>🥤</span></span>. No offense my <span className="font-bold text-[16px] ">Coffee<span>🥤</span></span> devs.</p>

              <p className="px-4 mt-2 text-[16px] ">So abeg show me some love<span className="text-[19px] ">❤️‍🔥</span> by clicking the <span className="font-bold">button</span> below to buy me a pack of <span className="font-bold">Gob3<span>🥘</span></span></p>
             
             <div className="flex  justify-center mt-5">
                <button >
                  <div className=" border border-1 border-black px-5 align-middle w-52 h-[50px] py-3">      
                        Buy me some Gob3 <span>🥘</span>
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
