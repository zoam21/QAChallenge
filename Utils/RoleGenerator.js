import {EMAIL_ADDRESS, PASSWORD, URL} from '../Utils/Constants'
import {Role} from 'testcafe';
import NavigationBar from '../Pages/LandPage/NavigationBar'
import LoginPage from '../Pages/LandPage/LoginPage';

class RoleGenerator{

    regularUser = Role(URL, async () =>{
        const navigationBar = new NavigationBar();
        const loginPage = new LoginPage();

        await navigationBar.clickOnLoginButton();
        await loginPage.login(EMAIL_ADDRESS,PASSWORD);
    },{preserveUrl:true});

} export default RoleGenerator;