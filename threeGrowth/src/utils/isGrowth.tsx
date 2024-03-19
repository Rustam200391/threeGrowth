import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface TreeGrowthData {
    threeType: string;
    gazolineForType: string;
    countGazoline: number;
}

const TreeGrowthPage: React.FC = () => {
    const [treeGrowthData, setTreeGrowthData] = useState<TreeGrowthData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTreeGrowthData = async () => {
            try {
                const response = await axios.get('your_api_endpoint');
                setTreeGrowthData(response.data);
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch tree growth data');
                setLoading(false);
            }
        };

        fetchTreeGrowthData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Tree Growth Data</h1>
            {treeGrowthData.map((data, index) => (
                <IsGrowth key={index} {...data} />
            ))}
        </div>
    );
};

const IsGrowth: React.FC<TreeGrowthData> = ({ threeType, gazolineForType, countGazoline }) => {
    return (
        <>
            <div>Tree Type: {threeType}</div>
            <div>Gazoline For Type: {gazolineForType}</div>
            <div>Count of Gazoline: {countGazoline}</div>
        </>
    );
};

export default TreeGrowthPage;
