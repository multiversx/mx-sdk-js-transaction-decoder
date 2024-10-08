import { TransactionDecoder, TransactionMetadata } from './../src/transaction.decoder';

test('Simple wallet to wallet transfer with dummy data text', () => {
  const decoder = new TransactionDecoder();
  const metadata = decoder.getTransactionMetadata({
    sender: 'erd18w6yj09l9jwlpj5cjqq9eccfgulkympv7d4rj6vq4u49j8fpwzwsvx7e85',
    receiver: 'erd1lkrrrn3ws9sp854kdpzer9f77eglqpeet3e3k3uxvqxw9p3eq6xqxj43r9',
    data: 'ZHVtbXlUZXh0',
    value: '10000000000000000',
  });

  expect(metadata).toEqual<TransactionMetadata>({
    sender: 'erd18w6yj09l9jwlpj5cjqq9eccfgulkympv7d4rj6vq4u49j8fpwzwsvx7e85',
    receiver: 'erd1lkrrrn3ws9sp854kdpzer9f77eglqpeet3e3k3uxvqxw9p3eq6xqxj43r9',
    value: BigInt('10000000000000000'),
    functionName: 'transfer',
  });
});

test('Smart contract call without arguments', () => {
  const decoder = new TransactionDecoder();
  const metadata = decoder.getTransactionMetadata({
    sender: 'erd18w6yj09l9jwlpj5cjqq9eccfgulkympv7d4rj6vq4u49j8fpwzwsvx7e85',
    receiver: 'erd1qqqqqqqqqqqqqpgqmua7hcd05yxypyj7sv7pffrquy9gf86s535qxct34s',
    data: 'bXlFbmRwb2ludA==',
    value: '0',
  });

  expect(metadata).toEqual<TransactionMetadata>({
    sender: 'erd18w6yj09l9jwlpj5cjqq9eccfgulkympv7d4rj6vq4u49j8fpwzwsvx7e85',
    receiver: 'erd1qqqqqqqqqqqqqpgqmua7hcd05yxypyj7sv7pffrquy9gf86s535qxct34s',
    value: BigInt('0'),
    functionName: 'myEndpoint',
    functionArgs: [],
  });
});

test('NFT Smart contract call', () => {
  const decoder = new TransactionDecoder();
  const metadata = decoder.getTransactionMetadata({
    sender: 'erd18w6yj09l9jwlpj5cjqq9eccfgulkympv7d4rj6vq4u49j8fpwzwsvx7e85',
    receiver: 'erd18w6yj09l9jwlpj5cjqq9eccfgulkympv7d4rj6vq4u49j8fpwzwsvx7e85',
    data: 'RVNEVE5GVFRyYW5zZmVyQDRjNGI0ZDQ1NTgyZDYxNjE2MjM5MzEzMEAyZmI0ZTlAZTQwZjE2OTk3MTY1NWU2YmIwNGNAMDAwMDAwMDAwMDAwMDAwMDA1MDBkZjNiZWJlMWFmYTEwYzQwOTI1ZTgzM2MxNGE0NjBlMTBhODQ5ZjUwYTQ2OEA3Mzc3NjE3MDVmNmM2YjZkNjU3ODVmNzQ2ZjVmNjU2NzZjNjRAMGIzNzdmMjYxYzNjNzE5MUA=',
    value: '0',
  });

  expect(metadata).toEqual<TransactionMetadata>({
    sender: 'erd18w6yj09l9jwlpj5cjqq9eccfgulkympv7d4rj6vq4u49j8fpwzwsvx7e85',
    receiver: 'erd1qqqqqqqqqqqqqpgqmua7hcd05yxypyj7sv7pffrquy9gf86s535qxct34s',
    value: BigInt('1076977887712805212893260'),
    functionName: 'swap_lkmex_to_egld',
    functionArgs: [
      '0b377f261c3c7191',
      '',
    ],
    transfers: [
      {
        value: BigInt('1076977887712805212893260'),
        properties: {
          collection: 'LKMEX-aab910',
          identifier: 'LKMEX-aab910-2fb4e9',
        },
      },
    ],
  });
});

test('MultiESDTNFTTransfer', () => {
  const decoder = new TransactionDecoder();
  const metadata = decoder.getTransactionMetadata({
    sender: 'erd1lkrrrn3ws9sp854kdpzer9f77eglqpeet3e3k3uxvqxw9p3eq6xqxj43r9',
    receiver: 'erd1lkrrrn3ws9sp854kdpzer9f77eglqpeet3e3k3uxvqxw9p3eq6xqxj43r9',
    data: 'TXVsdGlFU0RUTkZUVHJhbnNmZXJAMDAwMDAwMDAwMDAwMDAwMDA1MDBkZjNiZWJlMWFmYTEwYzQwOTI1ZTgzM2MxNGE0NjBlMTBhODQ5ZjUwYTQ2OEAwMkA0YzRiNGQ0NTU4MmQ2MTYxNjIzOTMxMzBAMmZlM2IwQDA5Yjk5YTZkYjMwMDI3ZTRmM2VjQDRjNGI0ZDQ1NTgyZDYxNjE2MjM5MzEzMEAzMTAyY2FAMDEyNjMwZTlhMjlmMmY5MzgxNDQ5MUA3Mzc3NjE3MDVmNmM2YjZkNjU3ODVmNzQ2ZjVmNjU2NzZjNjRAMGVkZTY0MzExYjhkMDFiNUA=',
    value: '0',
  });

  expect(metadata).toEqual<TransactionMetadata>({
    sender: 'erd1lkrrrn3ws9sp854kdpzer9f77eglqpeet3e3k3uxvqxw9p3eq6xqxj43r9',
    receiver: 'erd1qqqqqqqqqqqqqpgqmua7hcd05yxypyj7sv7pffrquy9gf86s535qxct34s',
    value: BigInt('0'),
    functionName: 'swap_lkmex_to_egld',
    functionArgs: [
      '0ede64311b8d01b5',
      '',
    ],
    transfers: [
      {
        value: BigInt('45925073746530627023852'),
        properties: {
          collection: 'LKMEX-aab910',
          identifier: 'LKMEX-aab910-2fe3b0',
        },
      },
      {
        value: BigInt('1389278024872597502641297'),
        properties: {
          collection: 'LKMEX-aab910',
          identifier: 'LKMEX-aab910-3102ca',
        },
      },
    ],
  });
});

test('ESDT Transfer', () => {
  const decoder = new TransactionDecoder();
  const metadata = decoder.getTransactionMetadata({
    sender: 'erd1jvc6nyyl73q2yardw7dj8235h5zqaum4qyc8wlgs6aa26seysuvsrp48x2',
    receiver: 'erd1flqg2zf3knya94lcupscdwmrud029mes8a85r202rvwpzjyk5tjqxt8dxu',
    data: 'RVNEVFRyYW5zZmVyQDUwNGM0MTU0NDEyZDM5NjI2MTM2NjMzM0AwMTJhMDVmMjAw',
    value: '0',
  });

  expect(metadata).toEqual<TransactionMetadata>({
    sender: 'erd1jvc6nyyl73q2yardw7dj8235h5zqaum4qyc8wlgs6aa26seysuvsrp48x2',
    receiver: 'erd1flqg2zf3knya94lcupscdwmrud029mes8a85r202rvwpzjyk5tjqxt8dxu',
    value: BigInt('5000000000'),
    transfers: [
      {
        value: BigInt('5000000000'),
        properties: {
          identifier: 'PLATA-9ba6c3',
        },
      },
    ],
  });
});

test('MultiESDTNFTTransfer fungible (with 00 nonce) + meta', () => {
  const decoder = new TransactionDecoder();
  const metadata = decoder.getTransactionMetadata({
    sender: 'erd1lkrrrn3ws9sp854kdpzer9f77eglqpeet3e3k3uxvqxw9p3eq6xqxj43r9',
    receiver: 'erd1lkrrrn3ws9sp854kdpzer9f77eglqpeet3e3k3uxvqxw9p3eq6xqxj43r9',
    data: 'TXVsdGlFU0RUTkZUVHJhbnNmZXJAMDAwMDAwMDAwMDAwMDAwMDA1MDBkZjNiZWJlMWFmYTEwYzQwOTI1ZTgzM2MxNGE0NjBlMTBhODQ5ZjUwYTQ2OEAwMkA0YzRiNGQ0NTU4MmQ2MTYxNjIzOTMxMzBAMmZlM2IwQDA5Yjk5YTZkYjMwMDI3ZTRmM2VjQDU1NTM0NDQzMmQzMzM1MzA2MzM0NjVAMDBAMDEyNjMwZTlhMjlmMmY5MzgxNDQ5MUA3MDYxNzk1ZjZkNjU3NDYxNWY2MTZlNjQ1ZjY2NzU2ZTY3Njk2MjZjNjVAMGVkZTY0MzExYjhkMDFiNUA=',
    value: '0',
  });

  expect(metadata).toEqual<TransactionMetadata>({
    sender: 'erd1lkrrrn3ws9sp854kdpzer9f77eglqpeet3e3k3uxvqxw9p3eq6xqxj43r9',
    receiver: 'erd1qqqqqqqqqqqqqpgqmua7hcd05yxypyj7sv7pffrquy9gf86s535qxct34s',
    value: BigInt('0'),
    functionName: 'pay_meta_and_fungible',
    functionArgs: [
      '0ede64311b8d01b5',
      '',
    ],
    transfers: [
      {
        value: BigInt('45925073746530627023852'),
        properties: {
          collection: 'LKMEX-aab910',
          identifier: 'LKMEX-aab910-2fe3b0',
        },
      },
      {
        value: BigInt('1389278024872597502641297'),
        properties: {
          token: 'USDC-350c4e',
        },
      },
    ],
  });
});

test('MultiESDTNFTTransfer fungibles (00 and missing nonce)', () => {
  const decoder = new TransactionDecoder();
  const metadata = decoder.getTransactionMetadata({
    sender: 'erd1lkrrrn3ws9sp854kdpzer9f77eglqpeet3e3k3uxvqxw9p3eq6xqxj43r9',
    receiver: 'erd1lkrrrn3ws9sp854kdpzer9f77eglqpeet3e3k3uxvqxw9p3eq6xqxj43r9',
    data: 'TXVsdGlFU0RUTkZUVHJhbnNmZXJAMDAwMDAwMDAwMDAwMDAwMDA1MDBkZjNiZWJlMWFmYTEwYzQwOTI1ZTgzM2MxNGE0NjBlMTBhODQ5ZjUwYTQ2OEAwMkA1MjQ5NDQ0NTJkMzAzNTYyMzE2MjYyQDAwQDA5Yjk5YTZkYjMwMDI3ZTRmM2VjQDU1NTM0NDQzMmQzMzM1MzA2MzM0NjVAQDAxMjYzMGU5YTI5ZjJmOTM4MTQ0OTE=',
    value: '0',
  });

  expect(metadata).toEqual<TransactionMetadata>({
    sender: 'erd1lkrrrn3ws9sp854kdpzer9f77eglqpeet3e3k3uxvqxw9p3eq6xqxj43r9',
    receiver: 'erd1qqqqqqqqqqqqqpgqmua7hcd05yxypyj7sv7pffrquy9gf86s535qxct34s',
    value: BigInt('0'),
    transfers: [
      {
        value: BigInt('45925073746530627023852'),
        properties: {
          token: 'RIDE-05b1bb',
        },
      },
      {
        value: BigInt('1389278024872597502641297'),
        properties: {
          token: 'USDC-350c4e',
        },
      },
    ],
  });
});