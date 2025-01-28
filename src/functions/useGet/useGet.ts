import { useState } from "react";

export const useGet = (url: string): [() => Promise<void>, any, boolean] => {
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState({});

    const get = async () => {
        setLoading(true);

        const response = await fetch(url);
        const data = await response.json();
        setLoading(false);
        setData(data);
    };

    return [get, data, loading];
}