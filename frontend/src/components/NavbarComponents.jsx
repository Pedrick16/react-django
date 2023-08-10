import React from 'react'
import styles from './NavbarComponents.module.css'


const NavbarComponents = () => {
  return (
    <>
        <nav className={styles.navbar}>
            <div className={ styles.logo}>
                <h4 >Logo</h4>
            </div>
            <ul className={styles["menu-container"]}>
                <li><a>Home</a></li>
                <li ><a >About</a></li>
                <li><a >Contacts</a></li>
            </ul>
        </nav>
    </>
  )
}

export default NavbarComponents