import React, { useCallback, useEffect, useState } from 'react';

const GettingData: React.FC = () => {
    const [data, setData] = useState<string | null>(null);
    const [dataError, setDataError] = useState(null);
    const [dataLoading, setDataLoading] = useState(true);
    const refreshData = useCallback(async () => {
        try {
            setDataError(null);
            setData(null);
            setDataLoading(true);
            const result = await fetch('https://pokeapi.co/api/v2/pokemon');
            if (result.ok) {
                const json = await result.json();
                setData(JSON.stringify(json, null, 2));
            } else {
                throw new Error(result.statusText);
            }
        } catch (e) {
            setDataError(e.message || 'Something went wrong');
        }
        setDataLoading(false);
    }, []);

    useEffect(() => {
        refreshData();
    }, [refreshData]);

    let content = data;
    if (dataLoading) content = 'Loading...';
    if (dataError) content = `Error! ${dataError}`;
    return (
        <div>
            <div>SpaceX Launches</div>
            <div>
                <button type="button" onClick={refreshData}>
                    Refresh
                </button>
            </div>
            <code style={{ fontSize: 14 }}>{content}</code>
        </div>
    );
};

export default GettingData;
