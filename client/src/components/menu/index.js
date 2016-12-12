import React from 'react'
import Icon from '../icon'
import { menu } from './menu.scss'

const Menu = () => <nav className={menu}>
  <ul>
    <li><a href="#"><Icon name="fileOutline" /> Records</a></li>
    <li><a href="#"><Icon name="envelopeOutline" /> Messages</a></li>
    <li><a href="#"><Icon name="balanceScale" /> Expenses</a></li>
    <br />
    <li><a href="#"><Icon name="userOutline" /> Doctors</a></li>
    <li><a href="#"><Icon name="hospitalOutline" /> Hospitals</a></li>
  </ul>
</nav>

export default Menu
