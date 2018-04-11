// import 'isomorphic-fetch';
import 'cross-fetch/polyfill';
import Client from '@pikselpalette/sequoia-js-client-sdk/lib/client';

exports.handler = async (event, context, callback) => {
  try {
    console.log('try fetch');
    const client = new Client(
      'discovery-dmc-dev',
      'https://registry-use1shared.sequoia.piksel.com'
    );
    await client.setTenancy('discovery-dmc-dev');
    await client.generate();
    console.log('result');
    const service = await client.service('metadata');
    return service;
  } catch (e) {
    console.log('caught error');
    console.error(e);
    return 'error';
  }
};
