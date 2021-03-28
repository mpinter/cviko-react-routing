import React from 'react';
import { useLandpadsWikisQuery } from '../graphql';

const GettingData: React.FC = () => {
    const { data, loading, error, refetch } = useLandpadsWikisQuery();

    let content = data ? JSON.stringify(data, null, 2) : null;
    if (loading) content = 'Loading...';
    if (error) content = `Error! ${error}`;
    return (
        <div>
            <div>SpaceX Launches</div>
            <div>
                <button type="button" onClick={() => refetch()}>
                    Refresh
                </button>
            </div>
            <code style={{ fontSize: 14 }}>{content}</code>
        </div>
    );
};

export default GettingData;
