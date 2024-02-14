// const { remote } = require("webdriverio")
describe('WebdriverIO and Appium, when interacting with a biometric button,', () => {

  it('should be able to login with a matching touch/faceID/fingerprint', async () => {
    
    const el1 = await $("id:com.android.permissioncontroller:id/permission_allow_button");
    await el1.click();
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const el2 = await driver.$('xpath://android.widget.EditText[@resource-id="input-0"]');
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const el3 = await driver.$('xpath://android.widget.EditText[@resource-id="input-2"]');
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // await el2.addValue("");     // empty values
    // await el3.addValue("");
    await el2.addValue("abcd");    // wrong values
    await el3.addValue("1234");
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const el4 = await $('xpath://android.widget.Button[@text="Login"]');
    await el4.click();

    await driver.pause(5000);
    await driver.deleteSession();
  })
})
// async function main() {
//   // const caps = {
//   //   "appium:deviceName": "Pixel_3a_API_34_extension_level_7_x86_64",
//   //   "appium:platformName": "android",
//   //   "appium:appPackage": "in.solutions.kennect",
//   //   "appium:appActivity": "in.solutions.kennect.MainActivity",
//   //   "appium:automationName": "UiAutomator2",
//   //   "appium:newCommandTimeout": 3600,
//   //   "appium:connectHardwareKeyboard": true,
//   // };

//   // const driver = await remote({
//   //   protocol: "http",
//   //   hostname: "127.0.0.1",
//   //   port: 4723,
//   //   path: "/",
//   //   capabilities: caps,
//   // });

//   const el1 = await $("id:com.android.permissioncontroller:id/permission_allow_button");
//   await el1.click();
//   await new Promise((resolve) => setTimeout(resolve, 1000));

//   const el2 = await driver.$('xpath://android.widget.EditText[@resource-id="input-0"]');
//   await new Promise((resolve) => setTimeout(resolve, 1000));

//   const el3 = await driver.$('xpath://android.widget.EditText[@resource-id="input-2"]');
//   await new Promise((resolve) => setTimeout(resolve, 1000));

//   // await el2.addValue("");     // empty values
//   // await el3.addValue("");
//   await el2.addValue("abcd");    // wrong values
//   await el3.addValue("1234");
//   await new Promise((resolve) => setTimeout(resolve, 1000));

//   const el4 = await $('xpath://android.widget.Button[@text="Login"]');
//   await el4.click();

//   await driver.pause(5000);
//   await driver.deleteSession();
// }

// main().catch(console.log);

