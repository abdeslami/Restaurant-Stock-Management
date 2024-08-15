import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import data from '../db.json'; // Import du fichier JSON

export default function Dashboard() {
    const [nbr, setNbr] = useState('');
    const [isLiked, setIsLiked] = useState(false);
    const [search, setSearch] = useState('');
    const [datae, setDatae] = useState([]);

    useEffect(() => {
        setDatae(data.items); // Initialisation de 'datae' avec les données importées du fichier JSON
    }, []);

    const handleLikeButtonClick = () => {
        setIsLiked(!isLiked); // Inversion de la valeur de 'isLiked'
    };

    function handleStock(id) {
        alert(id + " " + nbr); // Affichage de l'identifiant et de 'nbr'

        setDatae(prevState => {
            return prevState.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        nbr: nbr, // Mise à jour du champ 'nbr' avec la valeur actuelle de 'nbr'
                    };
                }
                return item;
            });
        });

        handleAddToCartButtonClick(); // Appel de la fonction 'handleAddToCartButtonClick'
        setNbr(''); // Réinitialisation de 'nbr' à une valeur vide
    }

    const handleAddToCartButtonClick = () => {
        Swal.fire({
            icon: 'success',
            title: 'Added to fruit or legume', // Titre du message de succès
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
                    <main className="grid grid-cols-3 gap-4 place-items-center w-full bg-gray-100">
                        {datae.map((value) => ( // Utilisation de 'datae' pour afficher les articles
                            <section key={value.id} className="flex flex-col md:flex-row gap-11 py-10 px-5 bg-white rounded-md shadow-lg w-3/4 md:max-w-2xl">
                                <div className="text-indigo-500 flex flex-col justify-between">
                                    <img src={value.image} alt={value.name} />
                                </div>
                                <div className="text-indigo-500">
                                    <small className="uppercase">{value.name}</small>
                                    <h3 className="uppercase text-black text-2xl font-medium">{value.type}</h3>
                                    <h3 className="text-2xl font-semibold mb-7">{value.nbr} g</h3>
                                    <div className="flex gap-0.5">
                                        <input
                                            type="number"
                                            className="border-2 py-2 w-10"
                                            value={nbr}
                                            onChange={(e) => setNbr(e.target.value)} // Met à jour 'nbr' avec la valeur entrée par l'utilisateur
                                        />
                                        <button
                                            onClick={() => handleStock(value.id)} // Appel de 'handleStock' avec l'id correspondant
                                            className="bg-indigo-600 hover:bg-indigo-500 focus:outline-none transition text-white uppercase px-8 py-3"
                                        >
                                            Ajouter
                                        </button>
                                    </div>
                                </div>
                            </section>
                        ))}
                    </main>
                </div>
            </div>
        </div>
    );
}
