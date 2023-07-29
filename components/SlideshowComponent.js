import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const SlideshowComponent = () => {

  let ImageArray = [
    "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/36762/scarlet-honeyeater-bird-red-feathers.jpg?auto=compress&cs=tinysrgb&w=600"
  ]

  const [currImage, setcurrImage] = useState(0);

  useEffect(() => { 
    let timer = setTimeout(() => {
      handleButtonClick("next");
    }, 3000);
    //eslint-disable-next-line
  },[currImage])

  function handleButtonClick(type) { 
    console.log(type);
    switch (type) { 
      case "prev":
        let Pidx = currImage === 0 ? ImageArray.length - 1 : currImage - 1;
        setcurrImage(Pidx);
        break;
      
      default:
        let Nidx = currImage === ImageArray.length-1 ? 0 : currImage + 1;
        setcurrImage(Nidx);
        break;
    }
  }

  return (
    <div>
      <h2>Slide Show</h2>
      <div className='block'>
        
        <div className='w-[30%] h-[22rem] m-auto flex justify-center items-center gap-4 mt-7'>
          <button onClick={()=>handleButtonClick("prev")} className='px-10 py-2 bg-[whitesmoke] transition hover:bg-black hover:text-white rounded'>Prev</button>
          <Image
            src={ImageArray[currImage]}
            alt="Projects"
            width={0}
            height={0}
            sizes="10vw"
            className='transition-all hover:opacity-80 image-animation'
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
          <button onClick={()=>handleButtonClick("next")} className='px-10 py-2 bg-[whitesmoke] hover:bg-black hover:text-white rounded'>next</button>

        </div>
      </div> 
    </div>
  );
}

export default SlideshowComponent;