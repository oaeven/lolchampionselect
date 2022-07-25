import Champions from '../assets/champions.json';
import { ChampionSource, ChampionSummary } from './Types';

const getChampionList = () : ChampionSummary[] => {
    const champions: ChampionSource = Champions;
    const championArray : ChampionSummary[] = [];

    Object.entries(champions.data).forEach(([key, value] : [string, any]) => {
        const championSummary : ChampionSummary = value;
        championArray.push(championSummary);
    });

    return championArray;
};

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

const getRandomChampions = (count: number) : ChampionSummary[] => {
    var championList = getChampionList();

    var randomChampionList : ChampionSummary[] = [];
    for(let i = 0; i < count; i++){
        randomChampionList.push(championList[getRandomInt(championList.length)]);
    }

    return randomChampionList;
}

const ChampionService = {
    getChampionList,
    getRandomChampions
};

export default ChampionService;
