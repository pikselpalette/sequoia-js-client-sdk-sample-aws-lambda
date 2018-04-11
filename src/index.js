import 'isomorphic-fetch';
import Client from '@pikselpalette/sequoia-js-client-sdk/lib/client';

exports.handler = async (event, context, callback) => {
  try {
    const client = new Client(
      'demo',
      'https://registry-euw1shared.sequoia.piksel.com'
    );
    await client.setTenancy('demo');
    await client.generate();
    const service = await client.service('metadata');
    return service;
  } catch (e) {
    console.log('Caught Error');
    console.error(e);
    return 'error';
  }
};
