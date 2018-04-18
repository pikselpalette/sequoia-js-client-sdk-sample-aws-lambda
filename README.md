[![Piksel Palette](https://pikselgroup.com/broadcast/wp-content/uploads/sites/3/2017/09/P-P.png)](https://piksel.com/product/piksel-palette/)

# Sample AWS Lambda application using Sequoia JS Client SDK

See the [Piksel Palette Javascript Client SDK](https://github.com/pikselpalette/sequoia-js-client-sdk) for more information.

This sample is an AWS Lambda function which shows you how to use the SDK. See `src/index.js` to see how simple it is to get started.

To change the zip name, see the `package` script.
To change the handler name, update the webpack output filename.

## Build & Deploy

Build and package. This will generate `dist/test.zip` which can be deployed to AWS Lambda.

```
npm run package
```

Deploy. Either via the AWS Console, or using the AWS CLI. The default handler is `test.handler`

```
aws lambda update-function-code --function-name MyFunction --zip-file fileb://./dist/test.zip
```
