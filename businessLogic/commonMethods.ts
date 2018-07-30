import {browser} from "protractor";
import {homePageElements} from "../elements/elements";
import {ButtonExtend} from "../controls/button";
import {Waiters as w} from "../js/core/helper/waiters";
export class CommonMethods {

    public static async goToHomePage() {
        await browser.get('/');
        await w.waitUntilElementIsDisplayed(homePageElements.homePageHeader);
        await w.waitUntilElementNotDisplayed(homePageElements.homePageTost);
        await w.waitUntilElementNotDisplayed(homePageElements.tostMessage);
    }

    public static async removeToastAlert() {
        await ButtonExtend.clickButtonElementWithoutWaut(homePageElements.clickBlock);
    };
}