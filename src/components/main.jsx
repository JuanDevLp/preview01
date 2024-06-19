import React from "react";
import ImageGallery from "react-image-gallery";
import CarImgOne from '../assets/img-cr01.jpeg'
import CarImgTwo from '../assets/img-cr02.jpg'
import CarImgThree from '../assets/img-cr03.jpg'
import "react-image-gallery/styles/css/image-gallery.css"
import logoIm from '../assets/logo.png'
import FaceLogo from '../assets/facebook-logo.svg'
import InstaLogo from '../assets/instagram-logo.svg'
import WhastLogo from '../assets/whastapp-logo.svg'
import TwitterLogo from '../assets/twitter-logo.svg'
import OlaImg from '../assets/ola-main.svg'
import starIm from '../assets/star.svg'
import UsImg from '../assets/01.png'

function Main() {

    const images = [
        {
            original: CarImgTwo,
            thumbnail: CarImgTwo,
        },
        {
            original: CarImgOne,
            thumbnail: CarImgOne,
        },
        {
            original: CarImgThree,
            thumbnail: CarImgThree,
        },
    ];

    return (
        <main className="mn-1">
            <ImageGallery items={images}
                showPlayButton={false}
                showFullscreenButton={false}
                showThumbnails={false}
                showBullets={false}
                showNav={false}
                autoPlay={true}
            />

            <div className="mn-info-1" id="aboutEnv">
                <img src={logoIm} alt="Stellardine Logo" className="mn-info-im" />
                <section className="mn-info-csc">
                    <h1> STELLARDINE </h1>
                    <h1> Nosotros somos stellar</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, fugiat! Commodi doloremque atque magnam sint. Amet, harum quo cupiditate illo, dolores odit, praesentium consequatur ratione itaque quasi libero porro saepe?
                    </p>
                    <div className="mn-info-opti">
                        <button className="opti-btn">
                            VER MAS . . .
                        </button>

                        <div class="social-icons">
                            <a href="https://www.facebook.com/" target="_blank">
                                <img className="fa-facebook" src={FaceLogo} alt="" />
                            </a>
                            <a href="https://www.instagram.com/" target="_blank">
                                <img className="fa-instagram" src={InstaLogo} alt="" />
                            </a>
                            <a href="https://twitter.com/" target="_blank">
                                <img className="fa-x-twitter" src={TwitterLogo} alt="" />
                            </a>
                            <a href="https://wa.me/3193865914" target="_blank">
                                <img className="fa-whatsapp" src={WhastLogo} alt="" />
                            </a>
                        </div>
                    </div>
                </section>
            </div>

            <div className="about-us">
                <img src={OlaImg} className="about-us-ola-1" />
                <section className="us-ctn">
                    <nav className="us-info-1">
                        <h1 id="aboutreal"> Conoce nuestro servicio</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum non illo laborum nemo quibusdam ratione necessitatibus doloribus quas laboriosam deserunt odit nostrum blanditiis quae, quidem magni sed enim? Vel, nam!F
                        </p>
                    </nav>
                    <div className="info-cards">
                        <section className="card-info">
                            <img src={starIm} alt="star-Image" />
                            <p>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                        </section>
                        <section className="card-info">
                            <img src={starIm} alt="star-Image" />
                            <p>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                        </section>
                        <section className="card-info">
                            <img src={starIm} alt="star-Image" />
                            <p>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </p>
                        </section>
                    </div>
                </section>

                <img src={OlaImg} className="about-us-ola-2" />
            </div>

            <div className="us-group">
                <h1 id="teamrel"> NUESTRO EQUIPO </h1>
                <section className="us-grid">
                    <div className="card-us">
                        <img src={UsImg} alt="Us-Photo" />
                        <p>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                    </div>
                    <div className="card-us">
                        <img src={UsImg} alt="Us-Photo" />
                        <p>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                    </div>
                    <div className="card-us">
                        <img src={UsImg} alt="Us-Photo" />
                        <p>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                    </div>
                    <div className="card-us">
                        <img src={UsImg} alt="Us-Photo" />
                        <p>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Main 