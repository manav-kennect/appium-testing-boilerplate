// const { remote } = require("webdriverio");

async function main() {
  // const caps = {
  //   "appium:deviceName": "Pixel_3a_API_34_extension_level_7_x86_64",
  //   "appium:platformName": "android",
  //   "appium:appPackage": "in.solutions.kennect",
  //   "appium:appActivity": "in.solutions.kennect.MainActivity",
  //   "appium:automationName": "UiAutomator2",
  //   "appium:newCommandTimeout": 3600,
  //   "appium:connectHardwareKeyboard": true,
  // };

  // const driver = await remote({
  //   protocol: "http",
  //   hostname: "127.0.0.1",
  //   port: 4723,
  //   path: "/",
  //   capabilities: caps,
  // });

  const el1 = await driver.$("id:com.android.permissioncontroller:id/permission_allow_button");
  await el1.click();
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const el2 = await driver.$('xpath://android.widget.EditText[@resource-id="input-0"]');
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const el3 = await driver.$('xpath://android.widget.EditText[@resource-id="input-2"]');
  await new Promise((resolve) => setTimeout(resolve, 1000));

  await el2.addValue("shantanu@kennect.io");
  await el3.addValue("HsXEP8DQ");
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const el4 = await driver.$('xpath://android.widget.Button[@text="Login"]');
  await el4.click();

  await driver.pause(5000);
  await driver.deleteSession();
}

main().catch(console.log);

