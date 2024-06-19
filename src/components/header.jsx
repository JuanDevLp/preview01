import { useState } from 'react'
import logoIm from '../assets/logo.png'

function Header (){


    const [isActive , setIsActive] = useState(false)

    const text = isActive ? 'X' : '||| '
    const buttonClassName = isActive
    ? 'nav-obj nav-obj-show'
    : 'nav-obj'

    const handleClick = () =>{
        setIsActive(!isActive)
    }

    return(
        <header className='hd-vh1'>
            <img src={logoIm} alt="Stellardine Logo"  />
            <h1 className='stl-title'> Stellardine </h1>
            <div className='nav-obj-ch-01' onClick={handleClick}>{text}</div>
            <section className={buttonClassName}>
                <div className='hd-obj'>
                    <ul>
                        <li> <a href="#" className='hd-obj-a1'>Home</a> </li>
                        <li> <a href="#aboutEnv" className='hd-obj-a1'>About</a>  </li>
                        <li> <a href="#aboutreal" className='hd-obj-a1'>Service</a> </li>
                        <li> <a href="#teamrel" className='hd-obj-a1'>Team</a> </li>
                        <li> <a href="#contactrel" className='hd-obj-a1'>Contact</a>  </li>
                    </ul>
                </div>

                <button className='hd-btn'> Login </button>
            </section>
        </header>
    )
}

export default Header