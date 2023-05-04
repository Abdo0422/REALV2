import { useState } from 'react';


export default function Auth({ user, header, children }) {

    return ( 
        <>
        <div class="navbar bg-base-100" >
   <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href={route('dashboard')} active={route().current('dashboard')}>Dashboard</a></li>
        <li><a href={route('categories.view')} active={route().current('categories.view')}>Categories</a></li>
        <li tabindex="0">
          <a class="justify-between">
            Products
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul class="p-2">
            <li><a href={route('product.form_add')} active={route().current('product.form_add')}>New Product</a></li>
            <li><a href={route('products.show')} active={route().current('products.show')}>Show all</a></li>
          </ul>
        </li>
        <li><a href={route('order.view')} active={route().current('order.view')}>Orders</a></li>
      </ul>
    </div>
    <a href="/dashboard">
         <h1 className='' style={{fontWeight:"bolder",fontSize:"35px",letterSpacing:"5px",fontStyle:"italic"}}><span style={{color:"#5B06E5"}}>R</span>EAL</h1>
    </a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
    <li><a href={route('dashboard')} active={route().current('dashboard')}>Dashboard</a></li>
        <li><a href={route('categories.view')} active={route().current('categories.view')}>Categories</a></li>
      <li tabindex="0">
        <a>
          Products
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20px" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul class="p-2" >
            <li style={{ height :"35px" }}><a href={route('product.form_add')} active={route().current('product.form_add')}>New Product</a></li>
            <li style={{ height :"35px" ,paddingBottom:"10px"}}><a href={route('products.show')} active={route().current('products.show')}>Show all</a></li>
          </ul>
        </li>
        <li><a href={route('order.view')} active={route().current('order.view')}>Orders</a></li>
      </ul>
  </div>
  <div class="dropdown dropdown-end">
    
        <button className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150">
        {user.name}
        </button>
    
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a class="justify-between" href={route('profile.edit')}>
            Profile
          </a>
        </li>
        <li><a href={route('logout')} method="post" as="button">Logout</a></li>
      </ul>
    </div>
</div>
{header && (
    <header className=" shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
    </header>
)}<div style={{ backgroundColor:"yellow" }}>
<main style={{ position:"absolute", textAlign: "center",alignItems :'center' ,alignContent:"center",width:"100%",height:"100%"}}>{children}</main></div>
    </>)}