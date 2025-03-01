import React, { useState } from 'react';
import straw from '../assets/23.png'
const Sidebar = ({ history }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="flex">
              
           
                {/* Sidebar */}
                <div className=" h-96 w-60 lg:h-full lg:w-full mt-14 ml-4 lg:ml-12 md:ml-12">
                   <img src={straw} alt="" className='h-full w-full mt-32'/>
                    
                     
                </div>
            </div>
        </>
    );
};

export default Sidebar;
