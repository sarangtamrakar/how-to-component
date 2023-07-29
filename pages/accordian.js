import AccordianComponent from '@/components/AccordianComponent'
import React from 'react'

const Accordian = () => {

    const data = [
        {
            heading: "heading 1",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illo dolor vel totam. Tempore reprehenderit fugiat deserunt laudantium, nobis vel."
        },
        {
            heading: "heading 2",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illo dolor vel totam. Tempore reprehenderit fugiat deserunt laudantium, nobis vel."
        },
        {
            heading: "heading 3",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis illo dolor vel totam. Tempore reprehenderit fugiat deserunt laudantium, nobis vel."
        },
    ]

    return (
        <div>
            <h3 className='mx-auto h-28'>Accordian</h3>
            <AccordianComponent/>
        </div>
    )
}

export default Accordian
