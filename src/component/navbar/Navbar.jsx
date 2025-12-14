import React from 'react'
import { FaFoursquare } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import { GoPerson } from "react-icons/go";

export default function Navbar() {
  return (
    <div>
      <nav className='flex navbar-expand-lg pt-2 bg-lime-100'>
        <div className='bg-green-600 ms-3 w-7 flex justify-center items-center h-7 rounded-full'>
          <FaFoursquare className='  text-amber-400' />
        </div>
        <div className='flex-10'>
          <ul className='flex list-unstyled  gap-3 justify-center'>
            <li className='nav-item '>
              <a className='text-decoration-none text-dark text-[14px]' href="">Home</a>
            </li>
            <li className='nav-item '>
              <a className='text-decoration-none text-dark text-[14px]' href="">Shop</a>
            </li>
            <li className='nav-item'>
              <a className='text-decoration-none text-dark text-[14px]' href="">Categories</a>
            </li>
            <li className='nav-item'>
              <a className='text-decoration-none text-dark text-[14px]' href="">About us</a>
            </li>
            <li className='nav-item'>
              <a className='text-decoration-none text-dark text-[14px]' href="">Contact</a>
            </li>
            <li className='nav-item'>
              <a className='text-decoration-none text-dark text-[14px]' href="">Blog</a>
            </li>
          </ul>
        </div>
          <div className='flex mt-1 text-x gap-1 m-3'>
            <IoSearch />
            <FcLike className='text-lime-50'/>
            <MdOutlineShoppingCart />
            <GoPerson />
          </div>
      </nav>
    </div>
  )
}

{/* <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav> */}
