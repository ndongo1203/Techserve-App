import React from 'react'


function ServiceCompenente({icon, title}) {
    return (
        <div className='servicecompenente col-md-6'>
            <div className="d-flex">
                <div className="">
                    <i class={icon}></i>
                </div>
                <div className="p-3">
                    <h5>{title}</h5>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nam aliquid reprehenderit culpa, deserunt voluptatum totam.</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceCompenente