import React, { useState } from 'react'
import style from './menu.module.css'
import { NavLink } from 'react-router-dom'

const Menu =()=>{
    return(
        <div className={style.menu}>
             <ul className={style.menuList}>
      <li>
          <NavLink activeClassName={style.activ} to='/animals'>Animals</NavLink>
      </li>
      <li>
          <NavLink activeClassName={style.activ} to='/cities'>
        Cities
        </NavLink>
      </li>
      <li>
          <NavLink activeClassName={style.activ} to='/nature'>
      Nature
      </NavLink>
      </li>

      <li>
      <NavLink activeClassName={style.activ} to='/cars'>
      Cars
      </NavLink>
      </li>

      <li>
          <NavLink activeClassName={style.activ} to='/girls'>
      Girls
      </NavLink>
      </li>
    </ul>
        </div>
    )
}

export default Menu