import React from 'react';
import Slider from 'react-slick';
import {carouselConfigs,pressSlider} from './Constants'


function SliderPress() {
 
    return (
        <div className="xl:flex hidden justify-center h-20 items-center  ">
          <link rel="stylesheet" type="text/css"  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            <Slider  className=" max-w-screen-xl bg-white "  {...carouselConfigs}>
              
            {pressSlider.map(i=>{
              return(
                
                <div key={i.label} className="flex items-center justify-center">
                 <i.Icon className="fill-current text-gray-400 hover:text-secondary"/>
                </div>
              )
            })}
            </Slider>

        </div>
    )
}

export default SliderPress
