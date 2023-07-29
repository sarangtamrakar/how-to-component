import React, { useState } from "react";

const AccordianComponent = () => {
    const data = [
        {
            heading: "Heading 1",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illo dolor vel totam. Tempore reprehenderit fugiat deserunt laudantium, nobis vel.",
        },
        {
            heading: "Heading 2",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illo dolor vel totam. Tempore reprehenderit fugiat deserunt laudantium, nobis vel.",
        },
        {
            heading: "Heading 3",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illo dolor vel totam. Tempore reprehenderit fugiat deserunt laudantium, nobis vel.",
        },
        {
            heading: "Heading 4",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illo dolor vel totam. Tempore reprehenderit fugiat deserunt laudantium, nobis vel.",
        },
    ];

    const initialState = {
        0: false,
        1: false,
        2: false,
        3: false,
    }

    const [toggle, settoggle] = useState(initialState);

    function handleClick(e) {
        e.target.nextElementSibling.classList.toggle("toggle");
    }

    function handleState(type) {
        switch (type) {
            case 0:
                if (toggle[type]) {
                    settoggle((prev) => ({ ...prev, [type] : false }))
                } else {
                    settoggle((prev) => ({ ...prev, [type]: true }))
                }
                break;
            
            case 1:
                if (toggle[type]) {
                    settoggle((prev) => ({ ...prev, [type] : false }))
                } else {
                    settoggle((prev) => ({ ...prev, [type]: true }))
                }
                break;
            
            case 2:
                if (toggle[type]) {
                    settoggle((prev) => ({ ...prev, [type] : false }))
                } else {
                    settoggle((prev) => ({ ...prev, [type]: true }))
                }
                break;
            
            default:
                if (toggle[type]) {
                    settoggle((prev) => ({ ...prev, [type] : false }))
                } else {
                    settoggle((prev) => ({ ...prev, [type]: true }))
                }
                break;
        }
    }

    function handleStateOneOpenOnly(type) { 

        switch (type) {
            case 0:
                if (toggle[type]) {
                    settoggle({ ...initialState, [type] : false })
                } else {
                    settoggle({ ...initialState, [type]: true })
                }
                break;
            
            case 1:
                if (toggle[type]) {
                    settoggle({ ...initialState, [type] : false })
                } else {
                    settoggle({ ...initialState, [type]: true })
                }
                break;
            
            case 2:
                if (toggle[type]) {
                    settoggle({ ...initialState, [type] : false })
                } else {
                    settoggle({ ...initialState, [type]: true })
                }
                break;
            
            default:
                if (toggle[type]) {
                    settoggle({ ...initialState, [type] : false })
                } else {
                    settoggle({ ...initialState, [type]: true })
                }
                break;
        }

    }


    return (
        <div>
            {/* Via core java script */}
            {data.map((content, idx) => {
                return (
                    
                    <div key={idx} className="max-w-2xl p-2 rounded mx-auto">
                        <h4
                            className="text-sm font-semibold p-1 cursor-pointer"
                            onClick={(e) => handleClick(e)}
                        >
                            javascript way
                            {content?.heading}
                            
                        </h4>
                        <p className="toggle max-w-xs whitespace-normal rounded p-1 bg-red-400  image-animation">
                            {content?.desc}
                        </p>
                    </div>
                );
            })}

            {/* via useState */}
             {/* {data.map((content, idx) => {
                return (
                    <div key={idx} className="max-w-2xl p-2 rounded mx-auto">
                        <h4
                            className="text-sm font-semibold p-1 cursor-pointer"
                            onClick={(e) => handleState(idx)}
                        >
                            useState way
                            {content?.heading}
                        </h4>
                        {toggle[idx] && (
                            <p className="max-w-xs whitespace-normal rounded p-1 bg-red-400  image-animation">
                                {content?.desc}
                            </p>
                        )
                        }
                    </div>
                );
            })} */}


            { console.log(toggle)}

             {/* via useState only one accordian open at a time */}
             {data.map((content, idx) => {
                return (
                    <div key={idx} className="max-w-2xl p-2 rounded mx-auto">
                        <h4
                            className="text-sm font-semibold p-1 cursor-pointer"
                            onClick={(e) => handleStateOneOpenOnly(idx)}
                        >
                            useState way only open 1
                            {content?.heading}
                        </h4>
                        {toggle[idx] && (
                            <p className="max-w-xs whitespace-normal rounded p-1 bg-red-400  sidenavbar">
                                {content?.desc}
                            </p>
                        )
                        }
                    </div>
                );
            })}



        </div>
    );
};

export default AccordianComponent;
