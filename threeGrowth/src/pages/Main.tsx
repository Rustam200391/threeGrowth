import React from 'react';

interface IsGrowthDate {
    threeType: string;
    gazolineForType: string;
    countGazoline: number;
}

const IsGrowth: React.FC<IsGrowthDate> = ({ threeType, gazolineForType, countGazoline }) => {
    return (
        <>
            <div>{threeType}</div>
            <div>{gazolineForType}</div>
            <div>{countGazoline}</div>
        </>
    );
}

export const IsGrowthFunc = () => {
    // Передаем все ожидаемые пропсы компоненту IsGrowth
    return (
        <IsGrowth threeType="three" gazolineForType="water" countGazoline={10} />
    );
}