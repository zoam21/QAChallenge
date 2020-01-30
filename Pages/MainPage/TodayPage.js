import BasePage from "../BasePage";
import {Selector} from "testcafe";

class TodayPage extends BasePage{ 
    constructor(){
        super();
        this.lblToday = Selector('.view_header');
        this.btnAddTask = Selector('.agenda_add_task');
        this.btnFormAddTask = Selector('button.item_editor_submit');
        this.txtFormTaskName = Selector('.public-DraftEditor-content');
        this.btnFormTaskCancel = Selector('button.cancel');
        this.lblTaskName = Selector('span');//.withText('QAFrontEnd');
    }

    isPageVisible = async () => {
        return this.checkIfElementExists(this.lblToday);
    }

    addTaskUsingPredefinedDate = async (incommingTaskName) =>{
        this.clickOnElement(this.btnAddTask);
        this.sendTextToElement(this.txtFormTaskName,incommingTaskName);
        this.clickOnElement(this.btnFormAddTask);
        this.clickOnElement(this.btnFormTaskCancel);
    }
}export default TodayPage;