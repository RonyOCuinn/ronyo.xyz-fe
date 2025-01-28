import React, { useState, useEffect } from "react";
import { useGet } from "../functions/useGet/useGet";

export function Counter() {
    
    const [get, data, loading] = useGet('https://jsonplaceholder.typicode.com/posts?_limit=10');

    useEffect(() => {
        get();
    }, [])

    if(!data[0]) {
        return (
            <>{loading}</>
        );
    } else {
        return(
            <>{data[0].id}</>
        )
    }

}