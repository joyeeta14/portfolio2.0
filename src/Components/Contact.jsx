import React from 'react';

const Contact = () => {
    return (
        <div id='Contact'>
             <h1 className="text-center my-20 text-violet-500 font-bold text-5xl">Contact Me</h1>
             <div>
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center mx-20 lg:text-left">
      <h1 className="text-5xl font-bold">Would Love to Hear from You! Lets stay  
      <span className='text-violet-500'> Connected</span> !
      </h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea name="Message" id="" cols="60" className="input input-bordered" rows="50"></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Send Email</button>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Contact;