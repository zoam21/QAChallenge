import {t} from 'testcafe';

class BasePage{
    clickOnElement = async(incommingElement) =>{
        await t.click(incommingElement);
    }

    sendTextToElement = async(incommingElement,incommingText) =>{
        await t.typeText(incommingElement,incommingText,{paste:true});
    }

    checkIfElementExists = async(incommingElement) =>{
        return (await incommingElement.exists);
    }

    getTextFromElement = async(incommingElement) =>{
        return await incommingElement.innerText;
    }

}export default BasePage;