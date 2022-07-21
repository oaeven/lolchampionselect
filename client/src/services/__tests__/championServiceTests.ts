import ChampionService from '../ChampionService';

it('Get all champions', () => {
    expect(ChampionService.getChampionList().length).toEqual(161)
});

it('Get champion with all fields', () => {
    const firstChampion = ChampionService.getChampionList()[0];

    expect(firstChampion.name).toEqual('Aatrox');
    expect(firstChampion.blurb).toContain('Once honored defenders of Shurima against the Void, Aatrox');
    expect(firstChampion.id).toEqual('Aatrox');
    expect(firstChampion.key).toEqual('266');
    expect(firstChampion.title).toEqual('the Darkin Blade');
    expect(firstChampion.version).toEqual('12.13.1');

    expect(ChampionService.getChampionList().length).toEqual(161)
});

it('Get random champion with all fields', () => {
    const randomChampion = ChampionService.getRandomChampion();
    expect(randomChampion.name.length).toBeGreaterThan(3);
});
