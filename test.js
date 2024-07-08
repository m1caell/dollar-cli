import { test, describe, before, afterEach, after } from 'node:test';
import assert from 'node:assert'
import nock from 'nock'
import { accessWebsite } from './index.js';

const partialMockBody = `
 <body>
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=G-LGGMRV995P"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<div id="privacy-warning">
    <div>Usamos cookies e tecnologias semelhantes de acordo com a nossa <a href="/politicas/">Política de Privacidade</a>. Ao continuar navegando, você concorda com essas condições.</div>
    <button id="privacy-close">OK</button>
  </div>
  <div id="moeda"><h1>Dolar Hoje</h1></div>
  <div id="cotacao"><span class="cotMoeda estrangeira"><span class="symbol">US$</span><input type="text" id="estrangeiro" value="1,00"/></span><span class="optional"> vale </span><span class="cotMoeda nacional"><span class="symbol">R$</span><input type="text" id="nacional" value="5,45"/></span><span class="optional"> hoje</span><br class="clearfix"/></div>
`
const WEBSITE = 'https://dolarhoje.com/'

describe('Test Application', () => {
    let originalConsoleLog;
    let consoleOutput = [];

    before(() => {
        originalConsoleLog = console.log;
        console.log = (output) => consoleOutput.push(output);
    });

    afterEach(() => {
        nock.cleanAll();
        consoleOutput = [];
    });

    after(() => {
        console.log = originalConsoleLog;
    });

    test('Should get value 5,45 from website', async () => {
        nock(WEBSITE)
            .get('/')
            .reply(200, partialMockBody)

        const expected = 'To get $ 1,00 today we need R$ 5,45'
        await accessWebsite()

        assert.strictEqual(consoleOutput.length, 1);
        assert.strictEqual(consoleOutput[0], expected);
    })

    test('Should handle errors from the website request', async () => {
        nock(WEBSITE)
            .get('/')
            .replyWithError('Request failed');

        await assert.rejects(async () => {
            await accessWebsite();
        }, {
            name: 'Error',
            message: 'Something went wrong: Error: Request failed'
        });
    });
})

