import Champions from '../assets/champions.json';
import AxiosHttpClient from './AxiosHttpClient';
import { ChampionSource, ChampionSummary } from './Types';
import VersionService from './VersionService';

const getChampionList = async () : Promise<ChampionSummary[]> => {
    // http://ddragon.leagueoflegends.com/cdn/12.14.1/data/en_US/champion.json
    const version = await VersionService.getLatestVersion();

    return AxiosHttpClient.get(`cdn/${version}/data/en_US/champion.json`).then(result => {
        return parseChampionDataObject(result.data);
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

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
};

const getRandomChampions = async (count: number) : Promise<ChampionSummary[]> => {
    var championList = await getChampionList();

    var randomChampionList : ChampionSummary[] = [];
    for(let i = 0; i < count; i++){
        randomChampionList.push(championList[getRandomInt(championList.length)]);
    }

    return randomChampionList;
};

const getRandomChampionsMock = (count: number) : ChampionSummary[] => {
    var championList = getChampionListMock();

    var randomChampionList : ChampionSummary[] = [];
    for(let i = 0; i < count; i++){
        randomChampionList.push(championList[getRandomInt(championList.length)]);
    }

    return randomChampionList;
};

const ChampionService = {
    getChampionList,
    getChampionListMock,
    getRandomChampions,
    getRandomChampionsMock
};

export default ChampionService;
