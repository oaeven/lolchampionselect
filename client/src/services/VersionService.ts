import Versions from '../assets/versions.json';

const getVersions = () : string[] => {
    const versions: string[] = Versions;
    return versions;
};

const getLatestVersion = () : string => {
    return getVersions()[0];
};

const VersionService = {
    getVersions,
    getLatestVersion
};

export default VersionService;