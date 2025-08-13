import {Login} from '../pages/login';
import testdata from '../fixtures/login_data.json'
import { Validations } from '../utils/validations';


describe('Login Tests', () => {
    const loginPage = new Login();
    const val = new Validations();
    beforeEach(()=>{
        cy.visit('/')
    });

    testdata.forEach((user)=>{
        it(`Login from ${user.username}`,()=>{
            cy.allure()
              .severity('critical')
              .owner('Abhishek :SDET')
              .feature('Authentication')
              .story('User Login');
            loginPage.loginAll(user.username,user.password)
            val.validate(user.Validation)
        })
    })
});