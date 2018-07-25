import {Button} from "../js/core/controls/button";
import {allureStep} from "../js/core/helper/allure/allureSteps";
import {browser, ElementFinder} from "protractor";
import {Waiters as w} from "../js/core/helper/waiters";

export class ButtonExtend extends  Button{

    public static async clickButtonElement(button: ElementFinder, waitElem: ElementFinder){
        await allureStep(`Click on the button '${button}`, async () =>{
            await button.click();
            await w.waitUntilElementIsClickable(waitElem);
        });
    };


}