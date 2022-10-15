import React from 'react';
import logo from '../assets/logo.png';


function Recipe() {

  return (
            <div class="p-3">
                <li class="flex py-4 first:pt-0 last:pb-0">
                    <img class="h-10 w-10 rounded-full" src={logo} alt="" />
                    <div class="ml-3 overflow-hidden">
                        <p class="text-md font-medium text-white">Recipe Name</p>
                        <p class="text-md text-slate-200 truncate">Recipe description</p>
                    </div>
                </li>
            </div>
  );
}

export default Recipe;