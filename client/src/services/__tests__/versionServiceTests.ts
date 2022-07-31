import VersionService from '../VersionService';

describe('VersionService', () => {
    test('Get all versions', async () => {
        expect(VersionService.getVersionsMock().length).toEqual(400)
    });
   
    test('Get latest version', () => {
        expect('12.13.1').toEqual(VersionService.getLatestVersionMock());
    });
});  
