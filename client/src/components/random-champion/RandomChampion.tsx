import { FC, useEffect, useState } from "react";
import ChampionService from "../../services/ChampionService";
import { ChampionSummary } from "../../services/Types";



const RandomChampionComponent: FC<{ }> = ({ }) => {
    const [championList, setChampionList] = useState<ChampionSummary[]>([]);

    

    useEffect(() => {
        const championList = ChampionService.getChampionList();
        setChampionList(championList);

        console.log('use effect set champion list');

        // Update the document title using the browser API
    });

    const championElements = championList.map((championSummary, key) => {
        return (
            <div>{championSummary.name}</div>
        )
    });

    return (
        <div>
            {championElements}
        </div>
    );
}

export default RandomChampionComponent;