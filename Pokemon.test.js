
const sum = require('./index');

test('Roucoul VS Racaillou Speed, Roucoul Win', () => {
    expect(sum.speedTest(sum.pokemon1,sum.pokemon2)).toBe("Roucoul");
  });



  test('Racillou life should be at 20 after a Charge (Showdown Verification)', () => {
    expect(sum.attackPokemon(sum.pokemon1,sum.pokemon2,sum.Charge)).toBe(20);
  });

