import React from 'react'

function ClientTestimonial({ image, title, description }) {
    return (
        <div className='ClientTestimonial col-md-4 mb-4'>
            <div className="card border-0 bg-white shadhaw-sm me-3 p-3 mb-4">
                <div className="text-center">
                    <img src={image} className="card-img-top rounded-circle" alt="" />
                    <div className="card-body">
                        <h5>{title}</h5>
                        <p className='text-primary'>{description}</p>
                        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, totam voluptates? Atque at odio, eligendi sed quisquam laboriosam totam ex repudiandae earum quidem, pariatur neque eaque recusandae ipsum magni nesciunt consequatur modi, voluptate nostrum reiciendis eveniet laudantium dolorem? Architecto.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientTestimonial