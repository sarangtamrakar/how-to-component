import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const CarouselComponent = ({ ImageArray }) => {

    const [currIdx, setcurrIdx] = useState(0);

    const [isShow, setisShow] = useState(true);


    useEffect(() => { 
        console.log("currIdx" , currIdx);
        
    },[currIdx])


    

    function handleClick(type) {
        switch (type) {
            
            case "prev":
                setcurrIdx((prev) => prev === 0 ? ImageArray?.length - 1 : prev - 1);
                break;
            
            case "next":
                setcurrIdx((prev) => prev === ImageArray.length - 1 ? 0 : prev + 1);
                break;
            
            default:
                setcurrIdx(type);
                break;
        }
    }

    
    

    return (
        <div>
            <div className='relative m-4'>
                <button className='absolute left-0 top-[50%]' onClick={(e)=>handleClick("prev")}>Prev</button>
                <div className='flex gap-5 w-80 h-80 mx-72'>

                    <Image
                        src={ImageArray[currIdx]?.origin_img?.img_url}
                        alt={ImageArray[currIdx]?.origin_img?.img_name}
                        width={0}
                        height={0}
                        sizes='10vw'
                        className='slider'
                        style={{
                            objectFit: "fill",
                            width: "100%",
                            height: "100%",
                            borderBottomRightRadius: "0.5rem",
                            borderBottomLeftRadius: "0.5rem",
                            borderTopLeftRadius: "0.5rem",
                            borderTopRightRadius: "0.5rem",
                            marginBottom: "2px",
                            boxShadow: "1px 2px 10px rgba(10,10,10)",
                        }}
                    />


                    <Image
                        src={ImageArray[currIdx]?.result_img?.img_url}
                        alt={ImageArray[currIdx]?.result_img?.img_name}
                        width={0}
                        height={0}
                        sizes='10vw'
                        className='slider'
                        style={{
                            objectFit: "fill",
                            width: "100%",
                            height: "100%",
                            borderBottomRightRadius: "0.5rem",
                            borderBottomLeftRadius: "0.5rem",
                            borderTopLeftRadius: "0.5rem",
                            borderTopRightRadius: "0.5rem",
                            marginBottom: "2px",
                            boxShadow: "1px 2px 10px rgba(10,10,10)",
                        }}
                    />
                </div>
                <button className='absolute right-0 top-[50%]' onClick={(e)=>handleClick("next")}>Next</button>
            </div>

            { 

                isShow && 
                (
                    <div className='flex max-w-3xl gap-8 sidenavbar h-48 overflow-y-hidden overflow-x-scroll whitespace-nowrap rounded  p-4 bg-gray-200'>
                {
                    ImageArray?.map((data, idx) => {
                        return (
                            <Image
                                onClick={(e)=>handleClick(idx)}
                                key={idx}
                                src={data?.origin_img?.img_url}
                                alt={data?.origin_img?.img_name}
                                width={0}
                                height={0}
                                sizes='10vw'
                                style={{
                                    objectFit: "fill",
                                    width: "200px",
                                    height: "100%",
                                    borderBottomRightRadius: "0.5rem",
                                    borderBottomLeftRadius: "0.5rem",
                                    borderTopLeftRadius: "0.5rem",
                                    borderTopRightRadius: "0.5rem",
                                    marginBottom: "2px",
                                    boxShadow: "1px 2px 10px rgba(10,10,10)",
                                }}
                            />
                        )
                    })
                }


            </div>
                )
            }

            <button onClick={(e)=> setisShow(!isShow)}>Show</button>
            



        </div>
    );
}

export default CarouselComponent;
