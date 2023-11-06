import React from 'react';
import ClientTestimonial from './ClientTestimonial';
import Profile1 from '../Images/Profile1.jpg';
import Profile_2 from '../Images/Profile_2.jpg';
import Profile_3 from '../Images/Profile_3.jpg';
import './Techserve.css'

function Client() {
  return (
    <div className='container mt-5'>
    <div className="text-center">
                <h3>Client's Testimonials</h3>
            </div>
        <div className='d-flex flex-wrap mt-5 test'>
            <ClientTestimonial image={Profile1} title={"Kelly Riley"} description={"Redsky"} /> 
            <ClientTestimonial className="my-custom-class" image={Profile_2} title={"Oliver Robinson"} description={"Yesgroup"} /> 
            <ClientTestimonial image={Profile_3} title={"Nicole Brown"} description={"Good Box"} /> 
        </div>
    </div>
  );
}

export default Client;
