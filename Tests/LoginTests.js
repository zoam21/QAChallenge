import {EMAIL_ADDRESS, PASSWORD, INVALID_PASSWORD, URL} from '../Utils/Constants'
import NavigationBar from '../Pages/LandPage/NavigationBar'
import LoginPage from '../Pages/LandPage/LoginPage';

fixture `Todoist Login Tests`.page `${URL}`;   

const navigationBar = new NavigationBar();
const loginPage = new LoginPage();

test('Login with valid credentials', async t =>{
    await navigationBar.clickOnLoginButton();
    await loginPage.login(EMAIL_ADDRESS,PASSWORD);
    await t.expect(await navigationBar.isPageDisplayed()).notOk();
});

test.only('Login with invalid password', async t =>{
    await navigationBar.clickOnLoginButton();
    await loginPage.login(EMAIL_ADDRESS,INVALID_PASSWORD);
    await t.expect(await loginPage.getErrorMessage()).eql('Wrong email or password.');
});

test('Login with no password', async t =>{
    await navigationBar.clickOnLoginButton();
    await loginPage.login(EMAIL_ADDRESS,'');
    await t.expect(await loginPage.getErrorMessage()).eql('Blank password.');
});

test('Login with no username', async t =>{
    await navigationBar.clickOnLoginButton();
    await loginPage.login('',PASSWORD); 
    await t.expect(await loginPage.getErrorMessage()).eql('Invalid email address.');
});

test('Login with empty username and password', async t =>{
    await navigationBar.clickOnLoginButton();
    await loginPage.login('','');
    await t.expect(await loginPage.getErrorMessage()).eql('Invalid email address.');
});