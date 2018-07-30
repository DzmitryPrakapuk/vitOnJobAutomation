import {by, element, ElementArrayFinder, ElementFinder} from "protractor";

export const homePageElements: any = {

    homePageHeader: element.all(by.css('.header')).get(0),
    headerButtons: element.all(by.css('.menu-wrapper .menu-item span')),
    homePageAllert: element(by.css('.alert-message')),
    homeAllertButton: element.all(by.css('.alert-button-group .alert-button .button-inner')),
    homePageTost: element(by.css('.click-block.click-block-enabled.click-block-active')),
    clickBlock: element(by.css('.click-block-active')),
    tostMessage: element(by.css('.toast-message')),
    toastButton: element(by.css('.toast-button')),
    pageTitleLogin: element(by.css('login-page .page-header-title')),
    pageTitleSignUp: element(by.css('sign-up-page .page-header-title')),
    connecterButton: element(by.css('.custom-btn.titlecase-btn .button-inner')),
};