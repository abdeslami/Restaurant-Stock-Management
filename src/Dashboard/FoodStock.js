
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import items from '../db.json'; // Importing the JSON data

export default function FoodStock() {
    const [data, setData] = useState([]);

    useEffect(() => {
       setData(items.menu)
       console.log(items.menu)
    }, [items]);




    const handleAddToCartButtonClick = () => {
        Swal.fire({
            icon: 'success',
            title: 'Added to fruit or legume',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true
        });
    };
    return (
        <div className='flex'>
            <div id="sidebar" className="lg:block hidden bg-white w-64 h-screen sticky rounded-none border-none mr-5">
                <div className="p-4 space-y-4">
                    <a href="/dasboard" aria-label="dashboard" className="relative px-4 py-3 flex items-center space-x-4 rounded-lg text-white bg-gradient-to-r from-sky-600 to-cyan-400">
                        <i className="fas fa-home text-white"></i>
                        <span className="-mr-1 font-medium">Home</span>
                    </a>
                    <a href="/utilisateur" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group">
                        <i className="fas fa-users"></i>
                        <span>Employees</span>
                    </a>
                    <a href="/menu" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group">
                        <i className="fas fa-store"></i>
                        <span>Menu</span>
                    </a>
                   
                 
                   
                    <a href="/" className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-500 group">
                        <i className="fas fa-sign-out-alt"></i>
                        <span>Logout</span>
                    </a>
                </div>
            </div>

            <div className="lg:w-full">
                <div className="bg-white rounded-full border-none p-3 mb-4 shadow-md">
                    <div className="flex items-center">
                        <i className="px-3 fas fa-search ml-1"></i>
                        <input type="text"  placeholder="Seach..." className="ml-3 focus:outline-none w-full" />
                    </div>
                </div>

                <div className="lg:flex gap-4 items-stretch">
                    <div className="bg-white md:p-2 p-6 rounded-lg border border-gray-200 mb-4 lg:mb-0 shadow-md lg:w-[35%]">
                        <div className="flex justify-center items-center space-x-5 h-full">
                            <div>
                                <p>Saldo actual</p>
                                <h2 className="text-4xl font-bold text-gray-600">50.365</h2>
                                <p>25.365 $</p>
                            </div>
                            <img src="https://www.emprenderconactitud.com/img/Wallet.png" alt="wallet" className="h-24 md:h-20 w-38" />
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded-lg xs:mb-4 max-w-full shadow-md lg:w-[30%]">
                        <div className="flex flex-wrap justify-between h-full">
                            <div className="flex-1 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2">
                                <i className="fas fa-hand-holding-usd text-white text-4xl"></i>
                                <p className="text-white">Depositar</p>
                            </div>
                            <div className="flex-1 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2">
                                <i className="fas fa-exchange-alt text-white text-4xl"></i>
                                <p className="text-white">Transferir</p>
                            </div>
                            <div className="flex-1 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-lg flex flex-col items-center justify-center p-4 space-y-2 border border-gray-200 m-2">
                                <i className="fas fa-qrcode text-white text-4xl"></i>
                                <p className="text-white">Canjear</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-md my-4">
                    <main className="grid grid-cols-3 gap-4 place-items-center w-full bg-gray-100">
                    {items.menu.map((value) => (
                          <a class="p-8 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
                          href="#">
                          <img src={value.image} class=" w-full shadow rounded-lg overflow-hidden border" alt="jj" />
                          <div class="mt-8">
                              <h4 class="font-bold text-xl">{value.titre}</h4>
                              
                              
                              <div class="mt-5">
                                  <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">{value.prix}</button>
                              </div>
                          </div>
                      </a>
                        ))}
                    </main>
                </div>
            </div>
        </div>
    );
}
