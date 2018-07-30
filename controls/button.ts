import {Button} from "../js/core/controls/button";
import {allureStep} from "../js/core/helper/allure/allureSteps";
import {browser, ElementFinder} from "protractor";
import {Waiters as w} from "../js/core/helper/waiters";
import {homePageElements} from "../elements/elements";

export class ButtonExtend extends  Button{

    public static async clickButtonElement(button: ElementFinder, waitElem: ElementFinder){
        await allureStep(`Click on the button '${button}`, async () =>{
            await w.waitUntilElementNotDisplayed(homePageElements.homePageTost);
            await w.waitUntilElementNotDisplayed(homePageElements.tostMessage);
            await w.waitUntilElementNotDisplayed(homePageElements.toastButton);
            await browser.sleep(1000);
            await w.waitUntilElementNotDisplayed(homePageElements.clickBlock);
            await w.waitUntilElementIsDisplayed(button);
            await w.waitUntilElementIsClickable(button);
            await button.click();
            await w.waitUntilElementNotDisplayed(homePageElements.homePageTost);
            await w.waitUntilElementNotDisplayed(homePageElements.tostMessage);
            await w.waitUntilElementNotDisplayed(homePageElements.toastButton);
            await w.waitUntilElementIsDisplayed(waitElem);
            await w.waitUntilElementNotDisplayed(homePageElements.homePageTost);
            await w.waitUntilElementNotDisplayed(homePageElements.tostMessage);
            await w.waitUntilElementNotDisplayed(homePageElements.toastButton);

        });
    };

    public static async clickButtonElementWithoutWaut(button: ElementFinder){
        await allureStep(`Click on the button '${button}`, async () =>{
            await w.waitUntilElementIsDisplayed(button);
            await w.waitUntilElementIsClickable(button);
            await button.click();
        });
    };


}