import React,{useState} from "react";
import Card from "./components/Card";
import portrait from './assets/portrait.jpeg'
import PaystackPop from '@paystack/inline-js';
import swal from 'sweetalert';


function App() {
  const [openModal,setOpenModal]= useState(false)

  return (
    <div className="bg-blue-100 h-screen flex justify-center py-5">
       <Card>
         <div className="busness-card ">
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
              <p className="px-4 mt-2 text-[15px] ">I build beautiful,responsive and interactive web applications using Reactjs & Tailwindcss for the best of user experiences <span className="text-[19px] ">🚀💯</span> .</p>
              <p className="px-4 mt-2 text-[15px] ">To write efficient code for you, I need fuel for my mind and body. Unlike most developers who burn <span className="font-bold text-[16px] ">Coffee<span>🥤</span></span> into code, I am allergic to <span className="font-bold text-[16px] ">Coffee<span>🥤</span></span>. So no offense my <span className="font-bold text-[16px] ">Coffee<span>🥤</span></span> devs.</p>

              <p className="px-4 mt-2 text-[16px] ">So abeg show me some love<span className="text-[19px] ">❤️‍🔥</span> by clicking the <span className="font-bold">button</span> below to buy me a pack of <span className="font-bold">Gob3<span>🥘</span></span></p>
             
             <div className="flex  justify-center mt-5">
                <button onClick={(e)=> setOpenModal(true)} >
                  <div className=" border border-1 border-black px-5 align-middle w-full h-[50px] py-3">      
                        Buy me a pack of Gob3 <span>🥘</span>
                  </div>
                </button>
              </div>
 
            </div>
         </div>

       </Card>

       <PaymentModal  open={openModal} close={()=>setOpenModal(!openModal)} />
    </div>
  );
}

export default App;



const PaymentModal = ({open,close,}) => {
  const [email, setEmail] = useState("");
  const [packs ,setPacks] = useState(0);
  let price = packs*10;
 
  const [firstname, setFirstname]= useState("");
  const [lastname,setLastname] = useState("")

  const PaywithPaystack = (e)=>{
    
    e.preventDefault();
    const paystack = new PaystackPop();

    paystack.newTransaction({
      key:"pk_live_dce275894c6952273b938d73440b1521f4edbf3a",
      amount:price*100,
      email,
      firstname,
      lastname,
      onSuccess(transaction){
        let message = `Payment Completed ${transaction.reference}`
        swal("Transaction succesful",message,"success");
        window.location.reload();
      },
      onCancel(){
        swal('You cancelled this transaction',"Transaction cancelled","warning")
      }
    })
  }

  if(!open) return null

    
  
  
  return (

    <div className="   bg-[rgba(68,85,109,0.4)] fixed inset-0 z-50   ">
  
    <div className="flex h-screen justify-center items-center opacity-100">

        <div className="flex-col justify-center absolute opacity-100  bg-white py-4 px-4 w-[300px]  md:w-[500px]  rounded-lg ">

            <div className="flex  text-lg  text-zinc-600 justify-between  mb-7 border-b py-2 border-b-slate-100"  >
              <p className='text-xl font-bold '>Enter your Payment Details to gift me a pack of gob3</p>
              <p onClick={close} className=' cursor-pointer text-slate-400 font-bold '>x</p>
            </div>

            <div className='title text-left'>
               <p className='font-bold text-[14px]'>Email</p>
                <input type="text" name="" required value={email} onChange={(e)=> setEmail(e.target.value)} placeholder={"Email"} className='outline-none  text-[14px] border-[2.5px] h-9 px-2 mt-2 w-[250px] md:w-[450px] border-slate-400' />
            </div>

            <div className='title text-left'>
               <p className='font-bold text-[14px]'>How many packs</p>
               <input type="number" name="" id="" value={packs} onChange={(e) => setPacks(e.target.value)} placeholder={"payable amount"} className='outline-none  text-[14px] border-[2.5px] h-9 px-2 mt-2 w-[250px] md:w-[450px] border-slate-400' />
            </div>

            <div className='title text-left'>
               <p className='font-bold text-[14px]'>Amount Payable</p>
               <input type="text" name="" id=""disabled value={price} placeholder={"payable amount"} className='outline-none  text-[14px] border-[2.5px] h-9 px-2 mt-2 w-[250px] md:w-[450px] border-slate-400' />
            </div>

            <div className='title text-left'>
               <p className='font-bold text-[14px]'>Firstname</p>
                <input type="text" name="" value={firstname} onChange={(e)=> setFirstname(e.target.value)} placeholder={"Firstname"} className='outline-none  text-[14px] border-[2.5px] h-9 px-2 mt-2 w-[250px] md:w-[450px] border-slate-400' />
            </div>

            <div className='title text-left'>
               <p className='font-bold text-[14px]'>Lastname</p>
                <input type="text" name="" value={lastname} onChange={(e)=> setLastname(e.target.value)} placeholder={"Lastname"} className='outline-none  text-[14px] border-[2.5px] h-9 px-2 mt-2 w-[250px] md:w-[450px] border-slate-400' />
            </div>


            <div className='flex justify-center mt-4'>
                <button onClick={PaywithPaystack} className={'bg-white border-[1px] border-slate-900 px-[10px] pt-[7px] pb-[16px] w-[220px]  rounded-md h-[40px]  '}><p className=''>Pay</p></button>
            </div>
      

        </div>
    </div>
</div>

  )
}
