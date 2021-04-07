
const sum = require('./index');

test('Roucoul VS Racaillou Speed, Roucoul Win', () => {
    expect(sum.speedTest(sum.pokemon1,sum.pokemon2)).toBe("Roucoul");
  });

