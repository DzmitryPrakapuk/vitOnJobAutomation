import {browser, Config} from "protractor";

import {initializeReporters} from "./js/core/helper/reporters";//root after copy will should be "./core/helper/reporters"

export let config: Config = {
    directConnect: true, //it's only for chrome, for IE and FireFox should be false and need to run tests with protractorWithServer
    allScriptsTimeout: 60000,
    capabilities: {
        shardTestFiles: false, //if true will be parallel run
        //maxInstances: 3,
        browserName: 'chrome',

        chromeOptions: {
            'args': [
                'disable-infobars=true', //do not show infobar that browser is under automation
                'safebrowsing-disable-download-protection', //do not show keep or save when you download a file
                // '--headless',// headless mode
                // '--window-size=1920x1080', //screen resolution
            ],
            prefs: {
                'safebrowsing' : {
                    'enabled' : true,
                    'disable_download_protection': true, //do not show keep or save when you download a file
                },
                'download': {
                    'behavior': 'allow',
                    'directory_upgrade': true,
                    'prompt_for_download': false, //no need permission for download
                    'default_directory': __dirname + '.\\downloads\\' // path to download files
                },
            }
        }

    },
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

    specs: [
        './test/*/*.e2e.spec.js',
    ],

    exclude: [ ],

    suites:{
    },

    baseUrl:'https://oscardien.github.io/',
    params: {
        apiBaseUrl: 'http://apibaseurl',
        waitWebElementMaxTimeout: 30000,
        takeScreenShotFromEachAllureStep: false,

    },


    onPrepare: async () => {
        await browser.waitForAngularEnabled(false);
        await browser.manage().window().maximize();
        await initializeReporters();
    },

    onComplete: async () => {

    },

    jasmineNodeOpts: {
        defaultTimeoutInterval: 70000,
    }
};