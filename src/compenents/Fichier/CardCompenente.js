import React from 'react';

function CardCompenente({ image, title, button}) {
    return (
        <div className='CardCompenente'>
            <div className="container">
                <div className="row g-0 d-flex">
                    <div className="col-lg-6">
                        <div><img src={image} alt="" className="img-fluid" /></div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card-position">
                            <div className="card p-4 bg-white shadow-sm border-0">
                                <h4>{title}</h4>
                                <div>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim sequi quo provident dolor, odit molestias?</p>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, voluptatibus!</p>
                                </div>
                            </div>
                            <div className="btn-card text-end">
                                <button type={button} class="btn text-white rounded-pill btn-sm free-btn"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardCompenente;
