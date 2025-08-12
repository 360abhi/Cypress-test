import {Login} from '../pages/login';
import testdata from '../fixtures/login_data.json'

describe('Login Tests', () => {
    const loginPage = new Login();

    beforeEach(()=>{
        cy.visit('https://practicetestautomation.com/practice-test-login/')
    });

    testdata.forEach((user)=>{
        it(`Login from ${user.username}`,()=>{
            loginPage.loginAll(user.username,user.password)
        })
    })
});