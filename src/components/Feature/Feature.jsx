import React from "react";
import Cards from "./Cards";


const Feature=()=>{
    return(
        <>

          <section id="feature">
          <div className="my-8">
                <div className=" text-center mt-[5rem] mb-6">
                <h2 className="text-red-600">--Features--</h2>
                <h1 className=" text-white text-[2rem]">Things I DO</h1>
                </div>
                <Cards/>
            </div>
          </section>

        </>
    )
}

export default Feature;