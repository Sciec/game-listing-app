import React from 'react';

function Home() {
  return (
    <div className='grid grid-cols-4'>
      <div className='bg-red-500 h-full hidden md:block'>Genre</div>
      <div className='bg-blue-500 col-span-4 md:col-span-3'>Game List</div>
    </div>
  )
}

export default Home;