import Champions from '../assets/champions.json';
import AxiosHttpClient from './AxiosHttpClient';
import { ChampionSource, ChampionSummary } from './Types';
import VersionService from './VersionService';

const getChampionList = async () : Promise<ChampionSummary[]> => {
    // http://ddragon.leagueoflegends.com/cdn/12.14.1/data/en_US/champion.json
    const version = await VersionService.getLatestVersion();

    return AxiosHttpClient.get<any, ChampionSource>(`cdn/${version}/data/en_US/champion.json`).then(result => {
        return parseChampionDataObject(result);
    });
};

const getChampionListMock = () : ChampionSummary[] => {
    const championData: ChampionSource = Champions;
    return parseChampionDataObject(championData);
};

function parseChampionDataObject(championData : ChampionSource) : ChampionSummary[]{
    const championArray : ChampionSummary[] = [];

    Object.entries(championData.data).forEach(([key, value] : [string, any]) => {
        const championSummary : ChampionSummary = value;
        championArray.push(championSummary);
    });

    return championArray;
}

const getRandomChampions = async (count: number) : Promise<ChampionSummary[]> => {
    var championList = await getChampionList();
    return getRandomChampionList(count, championList);
};

const getRandomChampionsMock = (count: number) : ChampionSummary[] => {
    var championList = getChampionListMock();
    return getRandomChampionList(count, championList);
};

function getRandomChampionList(count : number, championList : ChampionSummary[]) : ChampionSummary[] {
    let currentCount = 0;
    let randomChampionList : ChampionSummary[] = [];
    
    while(currentCount < count) {
        const randomChampion = championList[getRandomInt(championList.length)];

        if(!randomChampionList.some(c => c.name === randomChampion.name)){
            randomChampionList.push(randomChampion);
            currentCount++;
        }
    }

    return randomChampionList;
};

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
};

const ChampionService = {
    getChampionList,
    getChampionListMock,
    getRandomChampions,
    getRandomChampionsMock
};

export default ChampionService;
