import {Selector} from 'testcafe'
import BasePage from '../BasePage';

class NavigationBar extends BasePage{
    constructor() {
        super();
        this.btnLogin = Selector('.xC29i');
    }

    clickOnLoginButton = async () =>{
        this.clickOnElement(this.btnLogin);
    }

    isPageDisplayed = async () =>{
        return this.checkIfElementExists(this.btnLogin);
    }

}export default NavigationBar;