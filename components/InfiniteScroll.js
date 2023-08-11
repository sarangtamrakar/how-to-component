import React, { useCallback, useRef, useState } from "react";
import Scrollhooks from "./Hooks/Scrollhooks";

const InfiniteScroll = () => {
    const [query, setquery] = useState("");
    const [pageNumber, setPageNumber] = useState(1);
    const [hasMore, sethasMore] = useState(true);
    const { loading, error, data } = Scrollhooks({
        query,
        pageNumber,
        sethasMore,
    });

    // ref & callback & interceptor logic here
    // ref for observer
    // useCallbak or any function called when last component will rendered
    // interceptor when last component is in screen visible.

    const observer = useRef();
    const lastComponentRef = useCallback((node) => {
        //   if loading we will not call infinite scrolling
        if (loading) return;
        // if we have any previous node observer so disconnect it & assign new one
        if (observer.current) observer.current.disconnect();

        // attach InterSection Observer to current ref & keep on observing last node
        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasMore) {
                console.log("visible");
                setPageNumber((prev) => prev + 1);
            }
        })

        if (node) observer.current.observe(node);

    }, [loading, hasMore]);

    return (
        <div>
            <h4>Infine Scroll</h4>

            <input
                type="text"
                className="bg-slate-600"
                value={query}
                onChange={(e) => setquery(e.target.value)}
            />

            {data.map((doc, idx) => {
                return (
                    <div key={idx}>
                        {idx === data.length - 1 ? <span ref={lastComponentRef}>{doc}</span> :
                            <span>{doc}</span>
                        }
                    </div>

                );
            })}

            {loading && <p>Loading ...</p>}

            {error && <p>Error Occured{error?.message} ...</p>}
        </div>
    );
};

export default InfiniteScroll;
