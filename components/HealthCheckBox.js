import Image from 'next/image';
import React from 'react'

const HealthCheckBox = ({ ImageData, setImageData }) => {


    const handleOriginal = (idx) => { 

        setImageData(ImageData.map((el, index) => {
            if (index === idx) {

                return {
                    ...el,
                    original: {
                        ...el?.original,
                        isChecked: !el.original.isChecked
                    },
                    duplicate: el.duplicate.map((el2, index2) => {
                        return {
                            ...el2,
                            isChecked: !el.original.isChecked
                        }
                    })
                }
                
            } else {
                return el;
            }
        }));
    }
    
    
    const handleDuplicate = (idx,dup_idx) => {
        console.log("duplicate", idx, dup_idx);
        
        let dummy = ImageData.map((el, index) => { 
            if (index === idx) {
                return {
                    ...el,
                    duplicate: el.duplicate.map((el2, index2) => { 
                        if (index2 === dup_idx) {
                            return {
                                ...el2,
                                isChecked : !el2.isChecked
                            }
                        } else { 
                            return el2;
                        }
                    })
                }
            } else { 
                return el;
            }
        })

        setImageData(dummy.map((el, index) => { 
            if (index === idx) {
                let isAllDupChecked = el.duplicate.every((dup) => dup.isChecked);
                console.log("isAllDupChecked", isAllDupChecked);
                
                return {
                    ...el,
                    original: {
                        ...el.original,
                        isChecked : isAllDupChecked,
                    }
                }
                
            } else { 
                return el;
            }
        }))
        
    }

    


    return (
        <div className='w-full flex flex-col p-2 justify-center gap-4'>
            
            

            {
                ImageData.map(({ original, duplicate }, idx) => {

                    return (
                        <div className='flex flex-row items-center justify-center gap-4' key={idx}>
                            <div className='flex justify-center items-start'>
                                <input checked={original?.isChecked } onClick={() => { handleOriginal(idx)}} type="checkbox" name="" id="" />
                                <Image
                                    alt={"original"}
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
                                                <input checked={ dup_img?.isChecked} onClick={() => { handleDuplicate(idx,dup_idx)}} type="checkbox" name="" id="" />
                                                <Image
                                                    key={dup_idx}
                                                    alt={"dup_img"}
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
