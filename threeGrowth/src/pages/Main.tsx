import React from 'react'

interface isGrowthDate {
    threeType: string;
    // наименование дерева
    gazolineForType: string;
    // наименование удобрения для дерева(вода)
    countGazoline: number;
    // количество литров
}

const isGrowth = ({threeType, gazolineForType,countGazoline}:isGrowthDate):JSX.Element => {
    return (
        <>
            <div>{threeType}</div>
            <div>{gazolineForType }</div>
            <div>{ countGazoline }</div>
        </>
    )
}


export const isGrowthFunc = () => {
    return (
            <isGrowth threeType="three" />

    )
}