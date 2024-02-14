import { config as baseConfig } from './wdio.shared.local.appium.conf.js';

export const config = {
    ...baseConfig,

    // ============
    // Specs
    // ============
    specs: [
        '../tests/specs/*.js',
    ],

    // ============
    // Capabilities
    // ============
    // For all capabilities please check
    // https://github.com/appium/appium-uiautomator2-driver
    capabilities: [
        {
            // The defaults you need to have in your config
            platformName: 'Android',
            maxInstances: 1,
            'appium:deviceName': 'Pixel_7_Pro_Android_14_API_34',
            "appium:platformName": "Android",
            "appium:appPackage": "in.solutions.kennect",
            "appium:appActivity": "in.solutions.kennect.MainActivity",
            "appium:automationName": "UiAutomator2",
            "appium:newCommandTimeout": 3600,
            "appium:connectHardwareKeyboard": true,
            'appium:platformVersion': '14.0',
            'appium:orientation': 'PORTRAIT',
            'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',
         
        },
    ],
    
};
