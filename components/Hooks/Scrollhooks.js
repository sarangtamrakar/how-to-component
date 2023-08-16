// import { eslint } from '@/next.config';
import axios from 'axios'
// import { ESLint } from 'eslint';
import React, { useEffect, useState } from 'react'

const Scrollhooks = ({ query, pageNumber, sethasMore }) => {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);


    function fetchQuery(query,pageNumber) {
        let cancel;
        axios.get(
            "https://openlibrary.org/search.json", {
            params: {
                q: query,
                page: pageNumber
            },
            cancelToken: new axios.CancelToken(c => cancel = c)
        }
        ).then(response => {
            console.log("called");
            setData((prevData) => [...response.data.docs.map((el) => el.title)]);
            sethasMore(response?.data?.docs?.length > 0);
        }).catch((error) => {
            if (axios.isCancel(error)) return;
            setError(error);
        }).finally(() => {
            setLoading(false);
        })
        return () => cancel();
    }

    useEffect(() => {
        setLoading(true);
        fetchQuery(query,pageNumber);
        // eslint-disable-next-line
    }, [query, pageNumber]);



    return {
        loading,
        error,
        data
    }
}

export default Scrollhooks
