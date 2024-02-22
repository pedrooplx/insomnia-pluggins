module.exports.templateTags = [
    {
      name: 'randomCurrencyPair',
      displayName: 'Random Currency Pair',
      description: 'Returns a random currency pair',
      async run(context) {
        const currencyPairs = ['USD/EUR', 'USD/GBP', 'EUR/USD', 'EUR/GBP', 'GBP/USD', 'GBP/EUR']; // Adicione mais pares de moedas conforme necessário
        const randomIndex = Math.floor(Math.random() * currencyPairs.length);
        return currencyPairs[randomIndex];
      },
    },
    {
      name: 'randomLetters',
      displayName: 'Random Letters',
      description: 'Returns 7 random letters as a string',
      async run(context) {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let result = '';
        for (let i = 0; i < 7; i++) {
          const randomIndex = Math.floor(Math.random() * letters.length);
          result += letters[randomIndex];
        }
        return result;
      },
    },
  ];