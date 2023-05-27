import React, { useState } from 'react';
import { HiOutlineSearch, HiSun, HiMoon } from "react-icons/hi";

const logo = `

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>

  <link rel="stylesheet" href="./style.css">
</head>
<body>
<div class="container">
<svg >
  <symbol id="s-text">
    <text text-anchor="middle" x="50%" y="80%">SCIEC</text>
  </symbol>

  <g class = "g-ants">
    <use xlink:href="#s-text" class="text-copy"></use>
    <use xlink:href="#s-text" class="text-copy"></use>
    <use xlink:href="#s-text" class="text-copy"></use>
    <use xlink:href="#s-text" class="text-copy"></use>
    <use xlink:href="#s-text" class="text-copy"></use>
  </g>
</svg>
</div>
</body>
</html>
`;




const Header = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <div className='flex items-center p-3'>
      <div dangerouslySetInnerHTML={{ __html: logo }} />
      <div className='flex bg-slate-200 p-2 w-full items-center mx-5 rounded-full'>
        <HiOutlineSearch className='w-[1rem] h-[1rem]'/>
        <input type='text' placeholder='Search Games' className='px-2 w-full bg-transparent outline-none' />
      </div>
      <div>
        {toggle?<HiMoon className='text-[35px] h-10 w-10 bg-slate-200 text-black p-1 rounded-full cursor-pointer' onClick={()=>setToggle(!toggle)} />:
        <HiSun className='text-[35px] h-10 w-10 bg-slate-200 text-black p-1 rounded-full cursor-pointer' onClick={()=>setToggle(!toggle)} />}
      </div>
      
    </div>
  )
};

export default Header;