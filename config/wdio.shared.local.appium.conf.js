import { config as baseConfig } from './wdio.shared.conf.js';

export const config = {
    ...baseConfig,

    //
    // ======
    // Appium
    // ======
    //
    // port: 4723,

    // services: [
    //     ...baseConfig.services || [],
    //     [
    //         'appium',
    //         {
    //             // This will use the globally installed version of Appium
    //             command: 'appium',
    //             args: {
    //                 // This is needed to tell Appium that we can execute local ADB commands
    //                 // and to automatically download the latest version of ChromeDriver
    //                 relaxedSecurity: true,
    //                 longStacktrace: true,
    //                 logStimestamp: true,
    //                 address: "127.0.0.1",
    //                 // Write the Appium logs to a file in the root of the directory
    //                 // log: './logs/appium.log',
    //             },
    //         },
    //     ],
    // ],
    services: [
        ...baseConfig.services || [],
        [
            'appium',
            {
                // This will use the globally installed version of Appium
                // command: 'appium',
                args: {
                    // This is needed to tell Appium that we can execute local ADB commands
                    // and to automatically download the latest version of ChromeDriver
                    relaxedSecurity: true,
                    longStacktrace: true,
                    logStimestamp: true,
                    // Write the Appium logs to a file in the root of the directory
                    log: './logs/appium.log',
                },
            },
        ],
    ],
    // port: 4723,
    before: async ()=> {
        // Only update the setting for Android, this is needed to reduce the timeout for the UiSelector locator strategy,
        // which is also used in certain tests, so it will not wait for 10 seconds if it can't find an element
        if (driver.isAndroid){
            // console.log("TESTING DRIVER INSIDE BEFORE HOOK",driver)
            await driver.updateSettings({
                // This reduces the timeout for the UiUiSelector from 10 seconds to 3 seconds
                waitForSelectorTimeout: 3 * 1000
            });
        }
    }
};
