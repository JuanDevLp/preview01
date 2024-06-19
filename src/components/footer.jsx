import FaceLogo from '../assets/facebook-logo.svg'
import InstaLogo from '../assets/instagram-logo.svg'
import WhastLogo from '../assets/whastapp-logo.svg'
import TwitterLogo from '../assets/twitter-logo.svg'

function Footer() {
    return (
        <footer id='contactrel'>

            <section className='ft-1'>

                <div className='ft-op'> 

                    <h1> Movement </h1>

                    <ul>
                        <li>Movement</li>
                        <li>Suppor Us</li>
                        <li>Pricing</li>
                        <li>Renting</li>
                    </ul>

                </div>

                <div className='ft-op'> 

                    <h1> Movement </h1>

                    <ul>
                        <li>Movement</li>
                        <li>Suppor Us</li>
                        <li>Pricing</li>
                        <li>Renting</li>
                    </ul>

                </div>

                <div className='ft-op'> 

                    <h1> Movement </h1>

                    <ul>
                        <li>Movement</li>
                        <li>Suppor Us</li>
                        <li>Pricing</li>
                        <li>Renting</li>
                    </ul>

                </div>

                <div className='ft-op-2'>
                    <h1> Movement </h1>
                    <nav>
                        <img src={FaceLogo} alt="Facebook" />
                        <img src={InstaLogo} alt="Instagram" />
                        <img src={WhastLogo} alt="WhastApp" />
                        <img src={TwitterLogo} alt="Twitter" />
                    </nav>
                </div>

            </section>

            <section className='ft-der'>
                <p>&copy; 2024 Derechos reservados a Stellardine</p>
            </section>

        </footer>
    )
}

export default Footer