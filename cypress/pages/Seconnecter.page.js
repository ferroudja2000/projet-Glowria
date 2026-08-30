class   Seconnecter{
    //elements

    elements ={
        //Btn_Userr: ()=> cy.get(".icon-account"),
        email_CNX:()=> cy.get('#email'),
        password:()=> cy.get('#password'),
        Btn_Seconnecter:() => cy.get('input[type="submit"][value="Se connecter"]'),
    }

   // clickBtn_Userr(){
    //    this.elements.Btn_Userr().click()
    //}
    Saisiremail_cnx(mail){
        this.elements.email_CNX().type(mail)
    }

    Saisirpassword(pass){
        this.elements.password().type(pass)
    }
    clickBtn_seconnecter(){
        this.elements.Btn_Seconnecter().click()
    }

    Se_connecter(mail,pass){
       // this.clickBtn_Userr()
        this.Saisiremail_cnx(mail)
        this.Saisirpassword(pass)
        this.clickBtn_seconnecter()
    }
   


}

export default new Seconnecter()