import React from 'react'
import './styles.css'

const Carousel = ({proyecto, index}) => {
    return (
        <>
            {/* <!-- Carousel wrapper --> */}
            <div id={`carousel${index}`} className="carousel slide carousel-fade" data-mdb-ride="carousel" data-mdb-interval="false">
                {/* <!-- Indicators --> */}
                <div className="carousel-indicators" style={{display: "none"}}>
                    <button
                        type="button"
                        data-mdb-target={`#carousel${index}`}
                        data-mdb-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-mdb-target={`#carousel${index}`}
                        data-mdb-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-mdb-target={`#carousel${index}`}
                        data-mdb-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>

                {/* <!-- Inner --> */}
                <div className="carousel-inner rounded-5 shadow-5">
                    {/* <!-- Single item --> */}
                    <div className="carousel-item active" >
                        <img src={proyecto.img+"1.jpg"} className="d-block w-100" alt="portfolio img 1" />
                    </div>

                    {/* <!-- Single item --> */}
                    <div className="carousel-item" >
                        <img src={proyecto.img+"2.jpg"} className="d-block w-100" alt="portfolio img 2" />
                    </div>

                    {/* <!-- Single item --> */}
                    <div className="carousel-item" >
                        <img src={proyecto.img+"3.jpg"} className="d-block w-100" alt="portfolio img 3" />
                    </div>
                </div>
                {/* <!-- Inner --> */}

                {/* <!-- Controls --> */}
                <button className="carousel-control-prev" type="button" data-mdb-target={`#carousel${index}`} data-mdb-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-mdb-target={`#carousel${index}`} data-mdb-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* <!-- Carousel wrapper --> */}
        </>
    )
}

export default Carousel