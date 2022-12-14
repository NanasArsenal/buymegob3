import React from 'react'

const Card = ({children}) => {
  return (
    <div className='flex justify-center w-[320px] md:w-[350px] h-full overflow-y-auto pb-3 shadow-xl bg-slate-100 rounded-md'>
        {children}
    </div>
  )
}

export default Card