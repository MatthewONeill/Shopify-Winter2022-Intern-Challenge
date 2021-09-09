import React from 'react';

function Navbar() {
    return (
        <div className="py-6">
            <nav class="fixed left-0 right-0 top-0 bg-white">
                <ul className="container mx-auto bg-white h-12 grid grid-cols-2 items-center">
                    <li className="text-xl">Spacestagram</li>
                    <li className="justify-self-end">
                        <div class="bg-gray flex items-center rounded-full shadow-lg border border-gray-300 w-96">
                            <input class="rounded-full py-2 px-4 w-full text-gray-700 leading-tight focus:outline-none " placeholder="Search"></input>
                            <button className="bg-blue-500 text-white rounded-full mr-4 w-9 h-8">
                                <i class="fa fa-search py-2"></i>
                            </button>
                        </div>
                    </li>
                </ul>
                <hr />
            </nav>
        </div>
    );
}


export default Navbar;