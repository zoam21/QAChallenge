import { Selector, t } from "testcafe";
import BasePage from "../BasePage";

class LoginPage extends BasePage{
    constructor(){
        super();
        this.iFrameLogin = Selector('._3ga5X');
        this.txtEmail = Selector('#email');
        this.txtPassword = Selector('#password');
        this.btnLogin = Selector('button.submit_btn');
        this.lblLoginErrorMessage = Selector('.error_msg>span');
    }

    login = async (incommingUsername,incommingPassword) =>{
                await t.switchToIframe(this.iFrameLogin);
                
                if (incommingUsername) {await this.sendTextToElement(this.txtEmail,incommingUsername);}
                if (incommingPassword) {await this.sendTextToElement(this.txtPassword,incommingPassword);}
                this.clickOnElement(this.btnLogin)
                
                await t.switchToMainWindow();
    }

    getErrorMessage = async () =>{
        await t.switchToIframe(this.iFrameLogin);
            const errorMessage = this.getTextFromElement(this.lblLoginErrorMessage);
        await t.switchToMainWindow();
        return errorMessage;
    }
}export default LoginPage;