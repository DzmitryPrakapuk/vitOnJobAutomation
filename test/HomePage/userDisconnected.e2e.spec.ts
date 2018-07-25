import {homePageElements} from "../../elements/elements";
import {browser} from "protractor";
import {homepage} from "../../testData/homePageInfo";
import {ButtonExtend} from "../../controls/button";
import {Waiters as w } from "../../js/core/helper/waiters";


describe('User disconnected mode', () =>{

    beforeEach(async () =>{
        await browser.get('/');
        await w.waitUntilElementIsDisplayed(homePageElements.homePageHeader);
        await w.waitUntilElementNotDisplayed(homePageElements.homePageTost);
        await w.waitUntilElementNotDisplayed(homePageElements.tostMessage);
    });

    it('Testing "Recherche" button C1a', async () =>{
        await ButtonExtend.clickButtonElement(homePageElements.headerButtons.get(0), homePageElements.homePageAllert);
        await expect(await homePageElements.homePageAllert.getText()).toEqual(homepage.allertMessage);
        await ButtonExtend.clickButtonElement(homePageElements.homeAllertButton.get(0), homePageElements.connecterButton);
        await expect(homePageElements.pageTitleLogin.isDisplayed()).toBeTruthy();
        await expect(await homePageElements.pageTitleLogin.getText()).toEqual(homepage.connexionTitle);
    });


    it('Testing "Recherche" button C1b', async () =>{
        await ButtonExtend.clickButtonElement(homePageElements.headerButtons.get(0), homePageElements.homePageAllert);
        await expect(await homePageElements.homePageAllert.getText()).toEqual(homepage.allertMessage);
        await ButtonExtend.clickButtonElement(homePageElements.homeAllertButton.get(1), homePageElements.connecterButton);
        await expect(homePageElements.pageTitleSignUp.isDisplayed()).toBeTruthy();
        await expect(await homePageElements.pageTitleSignUp.getText()).toEqual(homepage.inscriptionTitle);
    });

    it('Testing "Mon CV " button C2a', async () =>{
        await ButtonExtend.clickButtonElement(homePageElements.headerButtons.get(1), homePageElements.homePageAllert);
        await expect(await homePageElements.homePageAllert.getText()).toEqual(homepage.allertMessage);
        await ButtonExtend.clickButtonElement(homePageElements.homeAllertButton.get(0), homePageElements.connecterButton);
        await expect(homePageElements.pageTitleLogin.isDisplayed()).toBeTruthy();
        await expect(await homePageElements.pageTitleLogin.getText()).toEqual(homepage.connexionTitle);
    });

    it('Testing "Mon CV" button C2b', async () =>{
        await ButtonExtend.clickButtonElement(homePageElements.headerButtons.get(1), homePageElements.homePageAllert);
        await expect(await homePageElements.homePageAllert.getText()).toEqual(homepage.allertMessage);
        await ButtonExtend.clickButtonElement(homePageElements.homeAllertButton.get(1), homePageElements.connecterButton);
        await expect(homePageElements.pageTitleSignUp.isDisplayed()).toBeTruthy();
        await expect(await homePageElements.pageTitleSignUp.getText()).toEqual(homepage.inscriptionTitle);
    });
    it('Testing "Mission" button C3a', async () =>{
        await ButtonExtend.clickButtonElement(homePageElements.headerButtons.get(2), homePageElements.homePageAllert);
        await expect(await homePageElements.homePageAllert.getText()).toEqual(homepage.allertMessage);
        await ButtonExtend.clickButtonElement(homePageElements.homeAllertButton.get(0), homePageElements.connecterButton);
        await expect(homePageElements.pageTitleLogin.isDisplayed()).toBeTruthy();
        await expect(await homePageElements.pageTitleLogin.getText()).toEqual(homepage.connexionTitle);
    });
    it('Testing "Mission" button C3b', async () =>{
        await ButtonExtend.clickButtonElement(homePageElements.headerButtons.get(2), homePageElements.homePageAllert);
        await expect(await homePageElements.homePageAllert.getText()).toEqual(homepage.allertMessage);
        await ButtonExtend.clickButtonElement(homePageElements.homeAllertButton.get(1), homePageElements.connecterButton);
        await expect(homePageElements.pageTitleSignUp.isDisplayed()).toBeTruthy();
        await expect(await homePageElements.pageTitleSignUp.getText()).toEqual(homepage.inscriptionTitle);
    });
});
