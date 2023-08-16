import React, { useState } from 'react'
import Scrollhooks from './Hooks/Scrollhooks';

const AutoSuggestion = () => {

    const [query, setquery] = useState("");
    const [pageNumber, setpageNumber] = useState(1);
    const [hasMore, setsethasMore] = useState(true);


    const {
        loading,
        error,
        data
    } = Scrollhooks({ query, pageNumber, setsethasMore });

    console.log(console.log(data.slice(0, 10)))

    return (
        <div>
            {/* <h3> Auto Suggestion </h3> */}

            <div className='relative bg-red-300 h-[calc(100vh-1rem)]'>
                <input value={query} className='absolute top-[20%] left-[40%]' placeholder='Serch here' onChange={(e) => setquery(e.target.value)} type="text" />
            </div>


            {
                loading ? <p className='absolute top-[25%] left-[40%]'>loading ...</p> : (

                    query?.length>0 && (
                        <div className='p-0 absolute top-[25%] left-[40%] bg-gray-200 overflow-x-hidden overflow-y-auto w-1/4 h-[calc(100vh-25rem)]'>

                            {

                                data.slice(0, 10).map((d, i) => {
                                    return (
                                        <p onClick={() => setquery(d)} key={i} className='bg-red-300 p-1 hover:bg-slate-500 transition'> {d}</p>
                                    );
                                })

                            }

                        </div>
                    )


                )
            }







        </div>
    )
}

export default AutoSuggestion;