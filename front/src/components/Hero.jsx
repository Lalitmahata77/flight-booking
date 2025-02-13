import React from 'react'
import { Link } from 'react-router'

const Hero = () => {
  return (
    <div className="hero bg-base-200 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="../../src/assets/hi.png"
      className=" rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <Link to="/package">
      
      <button className="btn btn-primary">Book now</button>
      </Link>
    </div>
  </div>
</div>
  )
}

export default Hero