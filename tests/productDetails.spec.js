const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // Teste se productDetails é uma função.
    expect(typeof(productDetails)).toBe('function');
    // Teste se o retorno da função é um array.
    expect(productDetails('Alvejante', 'Detergente')).toMatchObject([
      { name: 'Alvejante', details: { productId: 'Alvejante123' } },
      { name: 'Detergente', details: { productId: 'Detergente123' } }
    ]);
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('perfume', 'desodorante')).toHaveLength(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    const isObject = productDetails('Alvejante', 'Detergente');
    expect(isObject[0]).toMatchObject({ name: 'Alvejante', details: { productId: 'Alvejante123' } });
    expect(isObject[1]).toMatchObject({ name: 'Detergente', details: { productId: 'Detergente123' } });
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails('granola', 'pasta de amendoim')).toEqual([
      { name: 'granola', details: { productId: 'granola123' } },
      {
        name: 'pasta de amendoim',
        details: { productId: 'pasta de amendoim123' }
      }
    ]);
    // Teste se os dois productIds terminam com 123.
    const results = productDetails('suco', 'cerveja');
    const detailsSuco = results[0].details.productId;
    const detailsCerveja = results[1].details.productId;
    const regex = /123$/;
    expect(regex.test(detailsSuco)).toEqual(true);
    expect(regex.test(detailsCerveja)).not.toEqual(false);
  });
});
