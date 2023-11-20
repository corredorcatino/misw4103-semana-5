const { chromium } = require('playwright');
const MyPage = require('./page');
const MyPage1 = require('./settings');
const config = require('./config.json');
const fs = require('fs');

(async () => {
  if (config.browsers.length === 0) {
    return;
  }

  let resultInfo = {};
  let datetime = new Date().toISOString().replace(/:/g, ".");

  for (const browserType of config.browsers) {
    if (!['chromium', 'webkit', 'firefox'].includes(browserType)) {
      return;
    }

    if (!fs.existsSync(`./results/${datetime}`)) {
      fs.mkdirSync(`./results/${datetime}`, { recursive: true });
    }

    const browser = await chromium.launch({ headless: true, viewport: { width: config.viewportWidth, height: config.viewportHeight } });
    const page = await browser.newPage();
    const settings = page;
    const myPage = new MyPage(page);
    const myPage1 = new MyPage1(settings);

    try {
      await myPage.navigateTo(config.url);
      await myPage.emailTxt1("davideslava9522@gmail.com");
      await myPage.passwordTxt1("prueba123!");
      await myPage.clickLoginBtn1();
      await myPage.isOnPage();
      await myPage1.clickSettingsBtn();
      await myPage1.clickGeneral();
      await myPage1.clickEditTitleBtn1();
      await myPage1.typeTitle1("UniAndes 2.0.1");
      await myPage1.clickSaveTitle1();
      await myPage.takeScreenshot(`./results/${datetime}/before-${browserType}.png`);
    } finally {
      await browser.close();
    }
  }

  for (const browserType of config.browsers) {
    if (!['chromium', 'webkit', 'firefox'].includes(browserType)) {
      return;
    }

    if (!fs.existsSync(`./results/${datetime}`)) {
      fs.mkdirSync(`./results/${datetime}`, { recursive: true });
    }

    const browser = await chromium.launch({ headless: true, viewport: { width: config.viewportWidth, height: config.viewportHeight } });
    const page = await browser.newPage();
    const settings = page;
    const myPage = new MyPage(page);
    const myPage1 = new MyPage1(settings);

    try {
      await myPage.navigateTo("http://localhost:2369/ghost/#/signin");
      await myPage.emailTxt("davideslava9522@gmail.com");
      await myPage.passwordTxt("prueba123!");
      await myPage.clickLoginBtn();
      await myPage.isOnPage();
      await myPage1.clickSettingsBtn();
      await myPage1.clickGeneral();
      await myPage1.clickEditTitleBtn1();
      await myPage1.typeTitle1("UniAndes 2.0.1");
      await myPage1.clickSaveTitle();
      await myPage.takeScreenshot(`./results/${datetime}/after-${browserType}.png`);
    } finally {
      await browser.close();
    }



  }

  fs.writeFileSync(`./results/${datetime}/report.html`, createReport(datetime, resultInfo));
  fs.copyFileSync('./index.css', `./results/${datetime}/index.css`);

  console.log('------------------------------------------------------------------------------------');
  console.log("Execution finished. Check the report under the results folder");
})();

function browser(b, info){
    return `<div class=" browser" id="test0">
    <div class=" btitle">
        <h2>Browser: ${b}</h2>
        <p>Data: ${JSON.stringify(info)}</p>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Reference</span>
        <img class="img2" src="before-${b}.png" id="refImage" label="Reference">
      </div>
      <div class="imgcontainer">
        <span class="imgname">Test</span>
        <img class="img2" src="after-${b}.png" id="testImage" label="Test">
      </div>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Diff</span>
        <img class="imgfull" src="./compare-${b}.png" id="diffImage" label="Diff">
      </div>
    </div>
  </div>`;
}

function createReport(datetime, resInfo){
    return `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report for 
                 <a href="${config.url}"> ${config.url}</a>
            </h1>
            <p>Executed: ${datetime}</p>
            <div id="visualizer">
                ${config.browsers.map(b=>browser(b, resInfo[b])).join('')}
            </div>
        </body>
    </html>`;
}
