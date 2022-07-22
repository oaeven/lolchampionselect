import React, { useState, useEffect, FC } from 'react';
import ChampionService from '../../services/ChampionService';
import { ChampionSummary } from '../../services/Types';

const ChampionListComponent: FC<{}> = ({ }) => {
    const [championList, setChampionList] = useState<ChampionSummary[]>([]);

    useEffect(() => {
        const championList = ChampionService.getChampionList();
        setChampionList(championList);

        console.log('use effect set champion list');

        // Update the document title using the browser API
    }, []);

    const championElements = championList.map((championSummary, key) => {
        return (
            <div key={key}>{championSummary.name}</div>
        )
    });

    return (
        <div className="pt-5">
            <h2>Complete champion list</h2>
            {championElements}
        </div>
    );
}

export default ChampionListComponent;
