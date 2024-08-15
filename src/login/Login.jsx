import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

import data from '../db.json'; // Importing the JSON dat

export default function Login() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const navigate=useNavigate()


  function submitHandler(e){
    e.preventDefault()
    const findUser=data.admin.find((value)=>value.email==email && value.password==password)
    if(findUser){
      Swal.fire({
        icon: 'success',
        title: 'connexion .....',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true
    });
      navigate('/dasboard')
    }else {
     Swal.fire({
      icon: 'warning',
      title: 'email or password incorrect',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true
  });
    }
  }

  return ( <div>
<div class="bg-no-repeat bg-cover bg-center relative" style={{backgroundImage: "url(https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80)"}} ><div class="absolute bg-gradient-to-b from-green-500 to-green-400 opacity-75 inset-0 z-0"></div>
  <div class="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
      <div class="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
        <div class="self-start hidden lg:flex flex-col  text-white">
          <img src="" class="mb-3"/>
          </div>
      </div>
      <div class="flex justify-center self-center  z-10">
        <form onSubmit={submitHandler}>

        
        <div class="p-12 bg-white mx-auto rounded-2xl w-100 ">
            <div class="mb-4">
              <h3 class="font-semibold text-2xl text-gray-800">connexion</h3>
            </div>
            <div class="space-y-5">
                        <div class="space-y-2">
                              <label class="text-sm font-medium text-gray-700 tracking-wide">Email</label>
              <input class=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="mail@gmail.com"/>
              </div>
                          <div class="space-y-2">
              <label class="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                Password
              </label>
              <input class="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400" type='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password"/>
            </div>
             
            <div>
              <button type="submit" class="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500">
                Sign in
              </button>
            </div>
            </div>
            <div class="pt-5 text-center text-gray-400 text-xs">
              <span>
                Copyright © Abderahmen
                <a href="https://codepen.io/uidesignhub" rel="" target="_blank" title="Ajimon" class="text-green hover:text-green-500 ">AJI</a></span>
            </div>
        </div>
        </form>
      </div>
  </div>
</div>
    </div>
  )
}
