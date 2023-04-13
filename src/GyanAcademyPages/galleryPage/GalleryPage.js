import React from 'react';
import img1 from './asserts/img-1.png';
import img2 from './asserts/img-2.png';
import img3 from './asserts/img-3.png';
import img4 from './asserts/img-4.png';
import img5 from './asserts/img-5.png';
import img6 from './asserts/img-6.png';
import img7 from './asserts/img-7.png';
import img8 from './asserts/img-8.png';

function GalleryPage() {

    const data =[
        {
            imgsrc: img1,
        },
        {
            imgsrc: img2,
        },
        {
            imgsrc: img3,
        },
        {
            imgsrc: img4,
        },
        {
            imgsrc: img5,
        },
        {
            imgsrc: img6,
        },
        {
            imgsrc: img7,
        },
        {
            imgsrc: img8,
        }
    ]

  return (
    <div className='ml-[8%] mr-[8%] mb-[15px]
    md:ml-[30px] md:mr-[30px]
    sm:ml-[30px] sm:mr-[30px]'>
        <div className=''>
            <h1 className='flex justify-center text-[50px] font-medium mt-[38px] mb-[28px] 
            md:text-[40px] md:mt-[20px] md:mb-[20px]
            sm:text-[30px] sm:mt-[15px] sm:mb-[15px]'>
            Gallery
            </h1>
        </div>
        <div className='columns-2 row-2 gap-[15px] sm:columns-1'>
        {
            data.map((obj,key) => {
                return (

                        <div key={key} className='w-full h-full overflow-hidden mb-[10px] rounded-[10px] sm:rounded-[5px]'>

                        <img src={obj.imgsrc} alt="img" className='w-full h-full rounded-[10px] ease-out duration-[2000ms] hover:scale-110 sm:rounded-[5px]' />


                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default GalleryPage