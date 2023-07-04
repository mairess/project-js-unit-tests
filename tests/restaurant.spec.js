const { createMenu } = require('../src/restaurant');
 
describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    // Escreva todos os testes aqui.
    expect(createMenu()).toHaveProperty('fetchMenu');
    expect(typeof(createMenu().fetchMenu)).toBe('function');
    expect(createMenu({ food: {}, drinks: {} }).fetchMenu()).toStrictEqual({ food: {}, drinks: {} });
    expect(createMenu({ food: {}, drinks: {} }).fetchMenu()).toMatchObject({ food: {}, drinks: {} });
    expect(createMenu({ food: {}, drinks: {} }).consumption).toEqual([]);
    const objetoRetornadoCreateMenu = createMenu({ food: { coxinha: 3.90, sanduiche: 9.90 }, drinks: { agua: 3.90, cerveja: 6.90 } });
    expect(() => objetoRetornadoCreateMenu.order('café')).toThrow(Error(('Item indisponível')));
    try {
      objetoRetornadoCreateMenu.order('leite');
    } catch (error) {
      expect(objetoRetornadoCreateMenu.consumption).toHaveLength(0);
      expect(objetoRetornadoCreateMenu.consumption).toStrictEqual([]);
    }
    objetoRetornadoCreateMenu.order('coxinha');
    objetoRetornadoCreateMenu.order('sanduiche');
    objetoRetornadoCreateMenu.order('agua');
    expect(objetoRetornadoCreateMenu.consumption).toHaveLength(3);
    expect(objetoRetornadoCreateMenu.consumption).toStrictEqual([ 'coxinha', 'sanduiche', 'agua' ]);
    objetoRetornadoCreateMenu.order('coxinha');
    expect(objetoRetornadoCreateMenu.consumption).toHaveLength(4);
    expect(objetoRetornadoCreateMenu.consumption).toStrictEqual([ 'coxinha', 'sanduiche', 'agua', 'coxinha' ]);
    expect(objetoRetornadoCreateMenu.pay()).toEqual(23.76);
    objetoRetornadoCreateMenu.order('cerveja');
    expect(objetoRetornadoCreateMenu.pay()).toEqual(31.35);
  });
});
