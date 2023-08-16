import React, { useState } from 'react'
import HealthCheckBox from '@/components/HealthCheckBox'


const HealthCheck = () => {
    
    const [ImageData, setImageData] = useState([
        {
            original: {
                img_url: "https://images.unsplash.com/photo-1690747233612-02f3021c5e0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60"
            },
            duplicate: [
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },

            ]
        },
        {
            original: {
                img_url: "https://images.unsplash.com/photo-1690747233612-02f3021c5e0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60"
            },
            duplicate: [
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },

            ]
        },
        {
            original: {
                img_url: "https://images.unsplash.com/photo-1690747233612-02f3021c5e0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60"
            },
            duplicate: [
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },

            ]
        },
        {
            original: {
                img_url: "https://images.unsplash.com/photo-1690747233612-02f3021c5e0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60"
            },
            duplicate: [
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },

            ]
        },
        {
            original: {
                img_url: "https://images.unsplash.com/photo-1690747233612-02f3021c5e0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60"
            },
            duplicate: [
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },
                {
                    img_url: "https://images.unsplash.com/photo-1682687220336-bbd659a734e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
                },

            ]
        },


    ]);


    return (
        <div>
            <HealthCheckBox ImageData={ImageData} setImageData={setImageData} />
        </div>
    )
}

export default HealthCheck
