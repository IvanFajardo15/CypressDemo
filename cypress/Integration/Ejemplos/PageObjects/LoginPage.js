class LoginPage{
 
getLinkLogin(){
    return cy.get('#login2');
}

getUserName(){
    return cy.get('#loginusername')
}
getPassword(){
    return cy.get('#loginpassword')
}
getClickLoginButton(){
    return cy.get("[type='button']")
}
}

export default LoginPage;