import React from 'react';
import logo from '../assets/logo.png';

const lye = 126.4;
const liquid = 264;
const weight = 800;
const name = "Recipe Name";
const description = "A bit of a description.";
const creator = "Joe Courtney";
const oil = "Olive oil";



function Recipe() {

  return (
            <div className="p-3 bg-slate-700">
                <li className="flex justify-center py-4 first:pt-0 last:pb-0">
                    <img className="h-10 w-10 rounded-full" src={logo} alt="" />
                    <div className="ml-3 overflow-hidden">
                        <p className="text-md font-medium text-white">{name}</p>
                        <p className="text-md text-slate-200 truncate">{description}</p>
                        <dl className=" text-white">
                            <dt className='text-sm '>Oils</dt>
                            <dd>
                               {oil}
                            </dd>
                            <dt>Lye</dt>
                            <dd>
                                {lye}
                            </dd>
                            <dt>Liquid</dt>
                            <dd>
                                {liquid}
                            </dd>
                            <dt>Weight</dt>
                            <dd>
                                {weight}
                            </dd>
                            <dt>Creator</dt>
                            <dd>
                                {creator}
                            </dd>
                        </dl>
                    </div>
                </li>
            </div>
  );
}

export default Recipe;