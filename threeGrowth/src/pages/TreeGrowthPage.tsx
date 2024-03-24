import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TreeForm from './TreeForm';
import { TreeFormData } from './types'; // Импортируем TreeFormData из файла с интерфейсами

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

    const handleAddTree = async (formData: TreeFormData) => {
        try {
            // Отправить данные о новом дереве на ваш сервер
            const response = await axios.post('your_api_endpoint', formData);
            setTreeGrowthData([...treeGrowthData, response.data]);
        } catch (error) {
            setError('Failed to add tree');
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Tree Growth Data</h1>
            <TreeForm onSubmit={(formData: TreeFormData) => handleAddTree(formData)} />
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
