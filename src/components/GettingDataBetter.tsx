import React from 'react';
import useSWR from 'swr';

const GettingData: React.FC = () => {
    const { data, error, isValidating, mutate } = useSWR(
        'https://api.spacex.land/rest/launches',
        async () => {
            const res = await fetch('https://api.spacex.land/rest/launches');
            if (!res.ok) throw new Error(res.statusText);
            return res.json();
        },
    );

    let content = data ? JSON.stringify(data, null, 2) : null;
    if (isValidating) content = 'Loading...';
    if (error) content = `Error! ${error}`;
    return (
        <div>
            <div>SpaceX Launches</div>
            <div>
                <button type="button" onClick={() => mutate()}>
                    Refresh
                </button>
            </div>
            <code style={{ fontSize: 14 }}>{content}</code>
        </div>
    );
};

export default GettingData;
