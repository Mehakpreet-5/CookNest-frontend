import React from 'react'
import one from '../assets/hjj.png';

// import one from '../assets/hjj.png';
import one1 from '../assets/gallery/1.png'
import one2 from '../assets/gallery/2.jpg'

import one3 from '../assets/gallery/3.jpg'
import one4 from '../assets/gallery/4.jpg'
import one5 from '../assets/gallery/5.jpg'
import one6 from '../assets/gallery/6.jpg'
import one7 from '../assets/gallery/7.png'

import one8 from '../assets/gallery/122.png'
import one9 from '../assets/gallery/9.jpg'
import one10 from '../assets/gallery/10.jpg'
import one11 from '../assets/gallery/11.jpg'
import one12 from '../assets/gallery/12.jpg'
import one123 from '../assets/gallery/123.png'

function gallery() {
    return (
        <div >

            <div class="grid grid-cols-2  md:grid-cols-4 gap-4 w-10/12 ml-12 lg:ml-32 mt-16 lg:mt-14"
                data-aos="fade-up" data-aos-delay="900" data-aos-easing="ease-in-out" data-aos-duration="700">
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full  rounded-lg"
                            src={one} alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg"
                            src={one1} alt="" />        </div>
                    <div>

                        <img class="h-auto max-w-full  rounded-lg"
                            src={one3} alt="" className='w-full' />        </div>
                </div>
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg"
                            src={one2} alt="" />
                    </div>

                    <div>
                        <img class="h-auto max-w-full rounded-lg"
                            src={one4} alt="" className='lg:h-96  rounded-lg ' />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg"
                            src={one5} alt="" className='lg:h-80 w-96  rounded-lg' />
                    </div>
                </div>
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg"
                            src={one6} alt="" className='lg:h-96  rounded-lg' />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg"
                            src={one8} alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg"
                            src={one7} alt="" className='lg:h-96  rounded-lg ' />
                    </div>
                </div>
                <div class="grid gap-4">
                    <div>
                        <img class="h-auto max-w-full rounded-lg"
                            src={one9} alt="" className=' h-96 hidden sm:block' />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg"
                            src={one10} alt="" className='lg:h-80 h-64 object-cover lg:object-none rounded-lg' />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg"
                            src={one11} alt="" className='lg:h-72  rounded-lg' />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg"
                            src={one123} alt="" className='lg:h-64  rounded-lg' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default gallery
