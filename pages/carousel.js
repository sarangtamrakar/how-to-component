import CarouselComponent from '@/components/CarouselComponent';
import React from 'react';

const Carousel = () => {

    let ImageArray = [
    
        {
            origin_img: {
                img_url: "https://images.pexels.com/photos/16883535/pexels-photo-16883535/free-photo-of-woman-in-white-dress-posing-in-building-door.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
            },
            result_img: {
                img_url: "https://images.pexels.com/photos/15679391/pexels-photo-15679391/free-photo-of-spikes-and-painting-in-home-decor.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        },
        
        {
            origin_img: {
                img_url: "https://images.pexels.com/photos/17564359/pexels-photo-17564359/free-photo-of-beverage-with-straw-in-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
            },
            result_img: {
                img_url: "https://images.pexels.com/photos/15134001/pexels-photo-15134001.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        },
        {
            origin_img: {
                img_url: "https://images.pexels.com/photos/16883535/pexels-photo-16883535/free-photo-of-woman-in-white-dress-posing-in-building-door.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
            },
            result_img: {
                img_url: "https://images.pexels.com/photos/15679391/pexels-photo-15679391/free-photo-of-spikes-and-painting-in-home-decor.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        },
        
        {
            origin_img: {
                img_url: "https://images.pexels.com/photos/17564359/pexels-photo-17564359/free-photo-of-beverage-with-straw-in-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
            },
            result_img: {
                img_url: "https://images.pexels.com/photos/15134001/pexels-photo-15134001.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        },
        {
            origin_img: {
                img_url: "https://images.pexels.com/photos/16883535/pexels-photo-16883535/free-photo-of-woman-in-white-dress-posing-in-building-door.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
            },
            result_img: {
                img_url: "https://images.pexels.com/photos/15679391/pexels-photo-15679391/free-photo-of-spikes-and-painting-in-home-decor.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        },
        
        {
            origin_img: {
                img_url: "https://images.pexels.com/photos/17564359/pexels-photo-17564359/free-photo-of-beverage-with-straw-in-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
            },
            result_img: {
                img_url: "https://images.pexels.com/photos/15134001/pexels-photo-15134001.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        },
        {
            origin_img: {
                img_url: "https://images.pexels.com/photos/16883535/pexels-photo-16883535/free-photo-of-woman-in-white-dress-posing-in-building-door.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
            },
            result_img: {
                img_url: "https://images.pexels.com/photos/15679391/pexels-photo-15679391/free-photo-of-spikes-and-painting-in-home-decor.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        },
        
        {
            origin_img: {
                img_url: "https://images.pexels.com/photos/17564359/pexels-photo-17564359/free-photo-of-beverage-with-straw-in-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
            },
            result_img: {
                img_url: "https://images.pexels.com/photos/15134001/pexels-photo-15134001.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        },
        {
            origin_img: {
                img_url: "https://images.pexels.com/photos/16883535/pexels-photo-16883535/free-photo-of-woman-in-white-dress-posing-in-building-door.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
            },
            result_img: {
                img_url: "https://images.pexels.com/photos/15679391/pexels-photo-15679391/free-photo-of-spikes-and-painting-in-home-decor.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        },
        
        {
            origin_img: {
                img_url: "https://images.pexels.com/photos/17564359/pexels-photo-17564359/free-photo-of-beverage-with-straw-in-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
            },
            result_img: {
                img_url: "https://images.pexels.com/photos/15134001/pexels-photo-15134001.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        },
        {
            origin_img: {
                img_url: "https://images.pexels.com/photos/16883535/pexels-photo-16883535/free-photo-of-woman-in-white-dress-posing-in-building-door.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
            },
            result_img: {
                img_url: "https://images.pexels.com/photos/15679391/pexels-photo-15679391/free-photo-of-spikes-and-painting-in-home-decor.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        },
        
        {
            origin_img: {
                img_url: "https://images.pexels.com/photos/17564359/pexels-photo-17564359/free-photo-of-beverage-with-straw-in-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
            },
            result_img: {
                img_url: "https://images.pexels.com/photos/15134001/pexels-photo-15134001.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        },
        {
            origin_img: {
                img_url: "https://images.pexels.com/photos/16883535/pexels-photo-16883535/free-photo-of-woman-in-white-dress-posing-in-building-door.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
            },
            result_img: {
                img_url: "https://images.pexels.com/photos/15679391/pexels-photo-15679391/free-photo-of-spikes-and-painting-in-home-decor.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        },
        
        {
            origin_img: {
                img_url: "https://images.pexels.com/photos/17564359/pexels-photo-17564359/free-photo-of-beverage-with-straw-in-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
            },
            result_img: {
                img_url: "https://images.pexels.com/photos/15134001/pexels-photo-15134001.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        },
        {
            origin_img: {
                img_url: "https://images.pexels.com/photos/16883535/pexels-photo-16883535/free-photo-of-woman-in-white-dress-posing-in-building-door.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
            },
            result_img: {
                img_url: "https://images.pexels.com/photos/15679391/pexels-photo-15679391/free-photo-of-spikes-and-painting-in-home-decor.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        },
        
        {
            origin_img: {
                img_url: "https://images.pexels.com/photos/17564359/pexels-photo-17564359/free-photo-of-beverage-with-straw-in-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
            },
            result_img: {
                img_url: "https://images.pexels.com/photos/15134001/pexels-photo-15134001.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        },
        {
            origin_img: {
                img_url: "https://images.pexels.com/photos/16883535/pexels-photo-16883535/free-photo-of-woman-in-white-dress-posing-in-building-door.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
            },
            result_img: {
                img_url: "https://images.pexels.com/photos/15679391/pexels-photo-15679391/free-photo-of-spikes-and-painting-in-home-decor.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        },
        
        {
            origin_img: {
                img_url: "https://images.pexels.com/photos/17564359/pexels-photo-17564359/free-photo-of-beverage-with-straw-in-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
            },
            result_img: {
                img_url: "https://images.pexels.com/photos/15134001/pexels-photo-15134001.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        },
        {
            origin_img: {
                img_url: "https://images.pexels.com/photos/16883535/pexels-photo-16883535/free-photo-of-woman-in-white-dress-posing-in-building-door.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
            },
            result_img: {
                img_url: "https://images.pexels.com/photos/15679391/pexels-photo-15679391/free-photo-of-spikes-and-painting-in-home-decor.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        },
        
        {
            origin_img: {
                img_url: "https://images.pexels.com/photos/17564359/pexels-photo-17564359/free-photo-of-beverage-with-straw-in-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
            },
            result_img: {
                img_url: "https://images.pexels.com/photos/15134001/pexels-photo-15134001.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        },
        {
            origin_img: {
                img_url: "https://images.pexels.com/photos/16883535/pexels-photo-16883535/free-photo-of-woman-in-white-dress-posing-in-building-door.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
            },
            result_img: {
                img_url: "https://images.pexels.com/photos/15679391/pexels-photo-15679391/free-photo-of-spikes-and-painting-in-home-decor.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        },
        
        {
            origin_img: {
                img_url: "https://images.pexels.com/photos/17564359/pexels-photo-17564359/free-photo-of-beverage-with-straw-in-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
            },
            result_img: {
                img_url: "https://images.pexels.com/photos/15134001/pexels-photo-15134001.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        },
        {
            origin_img: {
                img_url: "https://images.pexels.com/photos/16883535/pexels-photo-16883535/free-photo-of-woman-in-white-dress-posing-in-building-door.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
            },
            result_img: {
                img_url: "https://images.pexels.com/photos/15679391/pexels-photo-15679391/free-photo-of-spikes-and-painting-in-home-decor.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        },
        
        {
            origin_img: {
                img_url: "https://images.pexels.com/photos/17564359/pexels-photo-17564359/free-photo-of-beverage-with-straw-in-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
            },
            result_img: {
                img_url: "https://images.pexels.com/photos/15134001/pexels-photo-15134001.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        },
        {
            origin_img: {
                img_url: "https://images.pexels.com/photos/16883535/pexels-photo-16883535/free-photo-of-woman-in-white-dress-posing-in-building-door.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
            },
            result_img: {
                img_url: "https://images.pexels.com/photos/15679391/pexels-photo-15679391/free-photo-of-spikes-and-painting-in-home-decor.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        },
        
        {
            origin_img: {
                img_url: "https://images.pexels.com/photos/17564359/pexels-photo-17564359/free-photo-of-beverage-with-straw-in-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
            },
            result_img: {
                img_url: "https://images.pexels.com/photos/15134001/pexels-photo-15134001.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        },
        {
            origin_img: {
                img_url: "https://images.pexels.com/photos/16883535/pexels-photo-16883535/free-photo-of-woman-in-white-dress-posing-in-building-door.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
            },
            result_img: {
                img_url: "https://images.pexels.com/photos/15679391/pexels-photo-15679391/free-photo-of-spikes-and-painting-in-home-decor.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        },
        
        {
            origin_img: {
                img_url: "https://images.pexels.com/photos/17564359/pexels-photo-17564359/free-photo-of-beverage-with-straw-in-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
            },
            result_img: {
                img_url: "https://images.pexels.com/photos/15134001/pexels-photo-15134001.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        },
        {
            origin_img: {
                img_url: "https://images.pexels.com/photos/16883535/pexels-photo-16883535/free-photo-of-woman-in-white-dress-posing-in-building-door.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
            },
            result_img: {
                img_url: "https://images.pexels.com/photos/15679391/pexels-photo-15679391/free-photo-of-spikes-and-painting-in-home-decor.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        },
        
        {
            origin_img: {
                img_url: "https://images.pexels.com/photos/17564359/pexels-photo-17564359/free-photo-of-beverage-with-straw-in-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
            },
            result_img: {
                img_url: "https://images.pexels.com/photos/15134001/pexels-photo-15134001.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        },
        {
            origin_img: {
                img_url: "https://images.pexels.com/photos/16883535/pexels-photo-16883535/free-photo-of-woman-in-white-dress-posing-in-building-door.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
            },
            result_img: {
                img_url: "https://images.pexels.com/photos/15679391/pexels-photo-15679391/free-photo-of-spikes-and-painting-in-home-decor.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        },
        
        {
            origin_img: {
                img_url: "https://images.pexels.com/photos/17564359/pexels-photo-17564359/free-photo-of-beverage-with-straw-in-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
            },
            result_img: {
                img_url: "https://images.pexels.com/photos/15134001/pexels-photo-15134001.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        },
        {
            origin_img: {
                img_url: "https://images.pexels.com/photos/16883535/pexels-photo-16883535/free-photo-of-woman-in-white-dress-posing-in-building-door.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
            },
            result_img: {
                img_url: "https://images.pexels.com/photos/15679391/pexels-photo-15679391/free-photo-of-spikes-and-painting-in-home-decor.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        },
        
        {
            origin_img: {
                img_url: "https://images.pexels.com/photos/17564359/pexels-photo-17564359/free-photo-of-beverage-with-straw-in-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
            },
            result_img: {
                img_url: "https://images.pexels.com/photos/15134001/pexels-photo-15134001.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        },
        {
            origin_img: {
                img_url: "https://images.pexels.com/photos/16883535/pexels-photo-16883535/free-photo-of-woman-in-white-dress-posing-in-building-door.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
            },
            result_img: {
                img_url: "https://images.pexels.com/photos/15679391/pexels-photo-15679391/free-photo-of-spikes-and-painting-in-home-decor.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        },
        
        {
            origin_img: {
                img_url: "https://images.pexels.com/photos/17564359/pexels-photo-17564359/free-photo-of-beverage-with-straw-in-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
            },
            result_img: {
                img_url: "https://images.pexels.com/photos/15134001/pexels-photo-15134001.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        },
        {
            origin_img: {
                img_url: "https://images.pexels.com/photos/16883535/pexels-photo-16883535/free-photo-of-woman-in-white-dress-posing-in-building-door.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
            },
            result_img: {
                img_url: "https://images.pexels.com/photos/15679391/pexels-photo-15679391/free-photo-of-spikes-and-painting-in-home-decor.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        },
        
        {
            origin_img: {
                img_url: "https://images.pexels.com/photos/17564359/pexels-photo-17564359/free-photo-of-beverage-with-straw-in-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
            },
            result_img: {
                img_url: "https://images.pexels.com/photos/15134001/pexels-photo-15134001.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        },
        {
            origin_img: {
                img_url: "https://images.pexels.com/photos/16883535/pexels-photo-16883535/free-photo-of-woman-in-white-dress-posing-in-building-door.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
            },
            result_img: {
                img_url: "https://images.pexels.com/photos/15679391/pexels-photo-15679391/free-photo-of-spikes-and-painting-in-home-decor.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        },
        
        {
            origin_img: {
                img_url: "https://images.pexels.com/photos/17564359/pexels-photo-17564359/free-photo-of-beverage-with-straw-in-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
            },
            result_img: {
                img_url: "https://images.pexels.com/photos/15134001/pexels-photo-15134001.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        },
        {
            origin_img: {
                img_url: "https://images.pexels.com/photos/16883535/pexels-photo-16883535/free-photo-of-woman-in-white-dress-posing-in-building-door.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
            },
            result_img: {
                img_url: "https://images.pexels.com/photos/15679391/pexels-photo-15679391/free-photo-of-spikes-and-painting-in-home-decor.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        },
        
        {
            origin_img: {
                img_url: "https://images.pexels.com/photos/17564359/pexels-photo-17564359/free-photo-of-beverage-with-straw-in-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
            },
            result_img: {
                img_url: "https://images.pexels.com/photos/15134001/pexels-photo-15134001.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        },
        {
            origin_img: {
                img_url: "https://images.pexels.com/photos/16883535/pexels-photo-16883535/free-photo-of-woman-in-white-dress-posing-in-building-door.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
            },
            result_img: {
                img_url: "https://images.pexels.com/photos/15679391/pexels-photo-15679391/free-photo-of-spikes-and-painting-in-home-decor.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        },
        
        {
            origin_img: {
                img_url: "https://images.pexels.com/photos/17564359/pexels-photo-17564359/free-photo-of-beverage-with-straw-in-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
            },
            result_img: {
                img_url: "https://images.pexels.com/photos/15134001/pexels-photo-15134001.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        },
        {
            origin_img: {
                img_url: "https://images.pexels.com/photos/16883535/pexels-photo-16883535/free-photo-of-woman-in-white-dress-posing-in-building-door.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
            },
            result_img: {
                img_url: "https://images.pexels.com/photos/15679391/pexels-photo-15679391/free-photo-of-spikes-and-painting-in-home-decor.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        },
        
        {
            origin_img: {
                img_url: "https://images.pexels.com/photos/17564359/pexels-photo-17564359/free-photo-of-beverage-with-straw-in-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
            },
            result_img: {
                img_url: "https://images.pexels.com/photos/15134001/pexels-photo-15134001.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        },
        {
            origin_img: {
                img_url: "https://images.pexels.com/photos/16883535/pexels-photo-16883535/free-photo-of-woman-in-white-dress-posing-in-building-door.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
            },
            result_img: {
                img_url: "https://images.pexels.com/photos/15679391/pexels-photo-15679391/free-photo-of-spikes-and-painting-in-home-decor.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        },
        
        {
            origin_img: {
                img_url: "https://images.pexels.com/photos/17564359/pexels-photo-17564359/free-photo-of-beverage-with-straw-in-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
            },
            result_img: {
                img_url: "https://images.pexels.com/photos/15134001/pexels-photo-15134001.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        },
        {
            origin_img: {
                img_url: "https://images.pexels.com/photos/16883535/pexels-photo-16883535/free-photo-of-woman-in-white-dress-posing-in-building-door.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
            },
            result_img: {
                img_url: "https://images.pexels.com/photos/15679391/pexels-photo-15679391/free-photo-of-spikes-and-painting-in-home-decor.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        },
        
        {
            origin_img: {
                img_url: "https://images.pexels.com/photos/17564359/pexels-photo-17564359/free-photo-of-beverage-with-straw-in-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
            },
            result_img: {
                img_url: "https://images.pexels.com/photos/15134001/pexels-photo-15134001.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        },
        {
            origin_img: {
                img_url: "https://images.pexels.com/photos/16883535/pexels-photo-16883535/free-photo-of-woman-in-white-dress-posing-in-building-door.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
            },
            result_img: {
                img_url: "https://images.pexels.com/photos/15679391/pexels-photo-15679391/free-photo-of-spikes-and-painting-in-home-decor.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        },
        
        {
            origin_img: {
                img_url: "https://images.pexels.com/photos/17564359/pexels-photo-17564359/free-photo-of-beverage-with-straw-in-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600"
            },
            result_img: {
                img_url: "https://images.pexels.com/photos/15134001/pexels-photo-15134001.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                img_name: "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
        },
        

       



    ]

    return (
        <div>
            <CarouselComponent ImageArray={ ImageArray} />
        </div>
    );
}

export default Carousel;
