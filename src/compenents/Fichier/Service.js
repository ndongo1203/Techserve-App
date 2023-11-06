import React from 'react';
import ServiceCompenente from './ServiceCompenente';

function Service() {
    return (
        <div className='service mt-5 container'>
            <div className="text-center">
                <h3>Our Services</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ut sed. Dolorem quis impedit alias ipsam itaque.</p>
            </div>
            <div className='d-flex flex-wrap'>
                <ServiceCompenente icon={"text-primary fs-1 bi bi-cash-coin"} title={"Corpore Finance"} />
                <ServiceCompenente icon={"text-primary fs-1 bi bi-credit-card-2-front"} title={"Information Management"} />
                <ServiceCompenente icon={"text-primary fs-1 bi bi-signpost-split-fill"} title={"Operation Management"} />
                <ServiceCompenente icon={"text-primary fs-1 bi bi-inboxes"} title={"Strategy And Optimisation"} />
                <ServiceCompenente icon={"text-primary fs-1 bi bi-patch-exclamation"} title={"Risk Management"} />
                <ServiceCompenente icon={"text-primary fs-1 bi bi-gender-trans"} title={"Technologies And Innovations"} />
                
            </div>
        </div>
    )
}

export default Service;