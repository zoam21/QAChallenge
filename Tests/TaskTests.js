import {TASK_NAME} from '../Utils/Constants'
import RoleGenerator from '../Utils/RoleGenerator'
import TodayPage from '../Pages/MainPage/TodayPage';

const roleGenerator = new RoleGenerator();
const todayPage = new TodayPage();

fixture `Todoist Tasks Tests`.beforeEach(async t =>{
//    await t.setTestSpeed(0.1);
    await t.useRole(roleGenerator.regularUser);
});   

test('Create a new Task',async t=>{
    await todayPage.addTaskUsingPredefinedDate(TASK_NAME);
    await t.expect(todayPage.lblTaskName.withText(TASK_NAME).exists).ok();
});

test('Create 10 tasks', async t=>{
    var randomTaskName;
    for (var i=0; i<10;i++){
        randomTaskName = Math.random().toString();
        await todayPage.addTaskUsingPredefinedDate(randomTaskName);
        await t.expect(todayPage.lblTaskName.withText(randomTaskName).exists).ok();
    }  
});
