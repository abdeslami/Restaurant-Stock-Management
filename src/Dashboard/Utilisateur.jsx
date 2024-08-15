import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import data from '../db.json'; // Importing the JSON data

export default function Utilisateur() {
    const [search, setSearch] = useState('');
    const [utilisateur, setUtilisateur] = useState([]);
    const [editUser, setEditUser] = useState(null);
    const [addUser, setAddUser] = useState(false);
    const [AddUserList, setAddUserList] = useState(false);



    useEffect(() => {
        setUtilisateur(data.utilisateur);
    }, []);

   
 
    const handleAddToCartButtonClick = () => {
        Swal.fire({
            icon: 'success',
            title: 'Added to fruit or legume',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true
        });
    };

    const handleEditUser = (user) => {
        setEditUser(user);
    };
    const handleDeleteUser = (id) => {
        setUtilisateur(prevState => {
           return prevState.filter(user => user.id !== id);
            
        });
    
        Swal.fire({
            icon: 'success',
            title: 'Utilisateur est supprimer',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true
        });
    };
    const handleSaveUser = (e) => {
        e.preventDefault();
    
        setUtilisateur(prevState => {
            return prevState.map(user => {
                if (user.cin === editUser.cin) {
                    return {
                        ...user,
                        nom: editUser.nom,
                        prenom: editUser.prenom,
                        role: editUser.role,
                        email: editUser.email,
                        password: editUser.password
                    };
                }
                return user;
            });
        });
    
        Swal.fire({
            icon: 'success',
            title: 'Utilisateur mis à jour',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true
        });
    
        setEditUser(null);
    };
    const handleAddUser = (e) => {
        e.preventDefault();
    
        setUtilisateur(prevState => {
           return [...prevState,{
            id: utilisateur.length +1,
            
            cin: AddUserList.cin,

            nom: AddUserList.nom,
            prenom: AddUserList.prenom,
            role: AddUserList.role,
            email: AddUserList.email,
            password: AddUserList.password
           }]
        });
    
        Swal.fire({
            icon: 'success',
            title: 'Utilisateur à ajouter',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true
        });
    
        setAddUser(false);
    };
    

    const filteredUsers = utilisateur.filter(user => 
        user.nom.toLowerCase().includes(search.toLowerCase()) || 
        user.prenom.toLowerCase().includes(search.toLowerCase()) || 
        user.cin.toLowerCase().includes(search.toLowerCase())
    );

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
                        <input 
                            type="text" 
                            placeholder="Search..." 
                            className="ml-3 focus:outline-none w-full"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
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
                    
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <div className="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 ">
                            <div>
                                <button id="dropdownActionButton" onClick={()=>setAddUser(true)}  className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                    <span className="sr-only">Ajouter User</span>
                                    Ajouter Ut
                                   
                                </button>

                                
                        </div>
                        </div>

                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" class="px-6 py-3">
                    CIN
                </th>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Role
                </th>
                <th scope="col" class="px-6 py-3">
                    Status
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {
                filteredUsers.map((user,value)=>{
                    return(
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td scope="row" class="px-6 py-4">
                                <div class="font-bold text-white">{user.cin}</div>
                             
                        </td>
                        <td scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                            <img class="w-10 h-10 rounded-full" src="profile.png" alt="Jese image" />
                            <div class="ps-3">
                                <div class="text-base font-semibold">{user.nom} {user.prenom}</div>
                                <div class="font-normal text-gray-500">{user.email}</div>
                            </div>  
                        </td>
                        <td class="px-6 py-4">
                        {user.role}
                        </td>
                        <td class="px-6 py-4">
                            <div class="flex items-center">
                                <div class="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div> 
                            </div>
                        </td>
                        <td className="px-6 py-4 ">
                                            <button className="text-blue-600 hover:text-blue-800" onClick={() => handleEditUser(user)}><i className="fas fa-edit"></i></button>
                                            <button className="text-blue-600 hover:text-blue-800 ml-5" onClick={() => handleDeleteUser(user.id)}><i className="fas fa-remove"></i></button>

                         </td>
                    </tr>
                    )
                })
            }
            
        </tbody>
    </table>
                    </div>
                </div>

                {editUser && (
                    <div className="fixed inset-0  w-full flex items-center justify-center  bg-black bg-opacity-50">
                        <div className="bg-white rounded-lg p-8 shadow-lg">
                            <h2 className="text-2xl font-bold mb-4">Edit User</h2>
                            <form onSubmit={handleSaveUser}>
                                
                                <div className="mb-4 w-full">
                                    <label className="block text-gray-700">Nom</label>
                                    <input
                                        type="text"
                                        className="w-full border rounded px-3 py-2"
                                        value={editUser.nom}
                                        onChange={(e) => setEditUser({ ...editUser, nom: e.target.value })}
                                    />
                                </div>
                                <div className="mb-4 w-full">
                                    <label className="block text-gray-700">Prenom</label>
                                    <input
                                        type="text"
                                        className="w-full border rounded px-3 py-2"
                                        value={editUser.prenom}
                                        onChange={(e) => setEditUser({ ...editUser, prenom: e.target.value })}
                                    />
                                </div>
                                <div className="mb-4 w-full">
                                    <label className="block text-gray-700">CIN</label>
                                    <input
                                        type="text"
                                        className="w-full border rounded px-3 py-2"
                                        value={editUser.cin}
                                        onChange={(e) => setEditUser({ ...editUser, cin: e.target.value })}
                                    />
                                </div>
                                <div className="mb-4 w-full">
                                    <label className="block text-gray-700">role</label>
                                    <input
                                        type="text"
                                        className="w-full border rounded px-3 py-2"
                                        value={editUser.role}
                                        onChange={(e) => setEditUser({ ...editUser, role: e.target.value })}
                                    />
                                </div>
                                <div className="mb-4 w-full">
                                    <label className="block text-gray-700">Email</label>
                                    <input
                                        type="text"
                                        className="w-full border rounded px-3 py-2"
                                        value={editUser.email}
                                        onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
                                    />
                                </div>
                                <div className="mb-4 w-full">
                                    <label className="block text-gray-700">Password</label>
                                    <input
                                        type="password"
                                        className="w-full border rounded px-3 py-2"
                                        value={editUser.password}
                                        onChange={(e) => setEditUser({ ...editUser, password: e.target.value })}
                                    />
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        type="button"
                                        className="mr-4 px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                                        onClick={() => setEditUser(null)}
                                    >
                                        Cancel
                                    </button>
                                    <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                { addUser && <div className="fixed inset-0  w-full flex items-center justify-center  bg-black bg-opacity-50">
                        <div className="bg-white rounded-lg p-8 shadow-lg">
                            <h2 className="text-2xl font-bold mb-4">Edit User</h2>
                            <form onSubmit={handleAddUser}>
                                
                                <div className="mb-4 w-full">
                                    <label className="block text-gray-700">Nom</label>
                                    <input
                                        type="text"
                                        className="w-full border rounded px-3 py-2"
                                       
                                        onChange={(e) => setAddUserList({ ...AddUserList, nom: e.target.value })}
                                    />
                                </div>
                                <div className="mb-4 w-full">
                                    <label className="block text-gray-700">Prenom</label>
                                    <input
                                        type="text"
                                        className="w-full border rounded px-3 py-2"
                                       
                                        onChange={(e) => setAddUserList({ ...AddUserList, prenom: e.target.value })}
                                    />
                                </div>
                                <div className="mb-4 w-full">
                                    <label className="block text-gray-700">CIN</label>
                                    <input
                                        type="text"
                                        className="w-full border rounded px-3 py-2"
                                       
                                        onChange={(e) => setAddUserList({ ...AddUserList, cin: e.target.value })}
                                    />
                                </div>
                                <div className="mb-4 w-full">
                                    <label className="block text-gray-700">role</label>
                                    <input
                                        type="text"
                                        className="w-full border rounded px-3 py-2"
                                       
                                        onChange={(e) => setAddUserList({ ...AddUserList, role: e.target.value })}
                                    />
                                </div>
                                <div className="mb-4 w-full">
                                    <label className="block text-gray-700">Email</label>
                                    <input
                                        type="text"
                                        className="w-full border rounded px-3 py-2"
                                       
                                        onChange={(e) => setAddUserList({ ...AddUserList, email: e.target.value })}
                                    />
                                </div>
                                <div className="mb-4 w-full">
                                    <label className="block text-gray-700">Password</label>
                                    <input
                                        type="password"
                                        className="w-full border rounded px-3 py-2"
                                       
                                        onChange={(e) => setAddUserList({ ...AddUserList, password: e.target.value })}
                                    />
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        type="button"
                                        className="mr-4 px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                                        onClick={() => setAddUser(false)}
                                    >
                                        Cancel
                                    </button>
                                    <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>}
            </div>
        </div>
    );
}
