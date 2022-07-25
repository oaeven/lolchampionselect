import VersionService from '../VersionService';

it('Get all versions', () => {
    expect(VersionService.getVersions().length).toEqual(400)
});

it('Get latest version', () => {
    expect('12.13.1').toEqual(VersionService.getLatestVersion());
});
