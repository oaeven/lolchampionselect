import AxiosHttpClient from './AxiosHttpClient';
import Versions from '../assets/versions.json';

const getVersions = () : Promise<string[]> => {
    //https://ddragon.leagueoflegends.com/api/versions.json
    return AxiosHttpClient.get('api/versions.json');
};

const getVersionsMock = () : string[] => {
    const versions: string[] = Versions;
    return versions;
};

const getLatestVersion = async () : Promise<string> => {
    var versions = await getVersions();
    return versions[0];
};

const getLatestVersionMock = () : string => {
    var versions = getVersionsMock();
    return versions[0];
};

const VersionService = {
    getVersionsMock,
    getVersions,
    getLatestVersion,
    getLatestVersionMock
};

export default VersionService;
