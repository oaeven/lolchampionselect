import ChampionService from '../ChampionService';

describe('ChampionService', () => {
    test('Get all champions', () => {
        expect(ChampionService.getChampionListMock().length).toEqual(161)
    });

    test('Get champion with all fields', () => {
        const firstChampion = ChampionService.getChampionListMock()[0];

        expect(firstChampion.name).toEqual('Aatrox');
        expect(firstChampion.blurb).toContain('Once honored defenders of Shurima against the Void, Aatrox');
        expect(firstChampion.id).toEqual('Aatrox');
        expect(firstChampion.key).toEqual('266');
        expect(firstChampion.title).toEqual('the Darkin Blade');
        expect(firstChampion.version).toEqual('12.13.1');

        expect(ChampionService.getChampionListMock().length).toEqual(161)
    });

    test('Get random champion with all fields', () => {
        const randomChampions = ChampionService.getRandomChampionsMock(1);
        expect(randomChampions.length).toBe(1);
        expect(randomChampions[0].name.length).toBeGreaterThan(3);
    });
});
