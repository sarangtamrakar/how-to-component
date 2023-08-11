import Image from 'next/image';
import React from 'react'

const HealthCheckBox = ({ ImageData, setImageData }) => {


    const handleOriginal = (idx) => { 
        console.log("original", idx);
        let seletedBox = ImageData[idx]

        
        
        // setImageData((ImageData)=>[...ImageData])
    }
    
    
    const handleDuplicate = (idx,dup_idx) => {
        console.log("duplicate" , idx,dup_idx);
    }

    


    return (
        <div className='w-full flex flex-col p-2 justify-center gap-4'>
            
            

            {
                ImageData.map(({ original, duplicate }, idx) => {

                    return (
                        <div className='flex flex-row items-center justify-center gap-4' key={idx}>
                            <div className='flex justify-center items-start'>
                                <input onClick={() => { handleOriginal(idx)}} type="checkbox" name="" id="" />
                                <Image
                                    alt={original?.img_url}
                                    src={original?.img_url}
                                    width={200}
                                    height={200}
                                    className='rounded'
                                />
                            </div>
                            <div className='flex gap-2 max-w-5xl overflow-x-scroll overflow-y-hidden'>
                                {
                                    duplicate.map((dup_img, dup_idx) => {
                                        return (
                                            <>
                                                <input onClick={() => { handleDuplicate(idx,dup_idx)}} type="checkbox" name="" id="" />
                                                <Image
                                                    key={dup_idx}
                                                    alt={dup_img?.img_url}
                                                    src={dup_img?.img_url}
                                                    width={200}
                                                    height={200}
                                                    className='rounded'
                                                />
                                            </>
                                        )
                                    })
                                }




                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default HealthCheckBox;
