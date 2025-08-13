export class Login {

    // Xpaths
    username_field = "input#username"
    password_field = "input#password"
    login_btn = "button#submit"

    enterUsername(uname){
        cy.get(this.username_field).clear().type(uname)
    }

    enterPassword(password){
        cy.get(this.password_field).clear().type(password)
    }

    clickLogin(){
        cy.get(this.login_btn).click()
    }


    loginAll(uname,pass){
        this.enterUsername(uname)
        this.enterPassword(pass)
        this.clickLogin()
    }

}