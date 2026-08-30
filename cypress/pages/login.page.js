class Login {
    //elements

    elements ={
        Btn_User: ()=> cy.get(".icon-account"),
        email: ()=> cy.get("#newEmail"),
        Inscription: ()=> cy.get('input[type="submit"][value="Inscription"]'),


    prenom: ()=> cy.get("#customer_firstName"),
    nom: ()=> cy.get("#customer_lastName"),
    confirmation_mail: ()=> cy.get("#customer_emailConfirm"),
    mot_passe: ()=> cy.get("#customer_password"),  
    date_naissance: ()=> cy.get("#customer_birthday"),
    checkBox1 :()=> cy.get("#customer_subscribeNewsletter"),
    checkBox2 :()=> cy.get("#customer_optinPartnerNewsletter"),
    checkBox3 :()=> cy.get("#legalmentions"),
    BTN_Inscription: ()=> cy.get('#submitBtn'),

    
    }
//first inscription
    ClickBtn_User(){
        this.elements.Btn_User().click()
    }
    Saisiremail(email){
        this.elements.email().type(email)
    }
    ClickInscription(){
        this.elements.Inscription().click()
    }

    first_inscription(mail){
        this.ClickBtn_User()
        this.Saisiremail(mail)
        this.ClickInscription()
    }

//remplir le formulaire

    Saisiprenom(prenom){
        this.elements.prenom().type(prenom)
    }
    Saisirnom(nom){
        this.elements.nom().type(nom)
    }
    Saisirconfirmation_mail(mail){
        this.elements.confirmation_mail().type(mail)
    }
    Saisirmot_passe(mot_passe){
        this.elements.mot_passe().type(mot_passe)
    }
    Saisirdate_naissance(date_naissance){
        this.elements.date_naissance().type(date_naissance)
    }
    ClickcheckBox1(){
        this.elements.checkBox1().check({ force: true })
    }
    ClickcheckBox2(){
        this.elements.checkBox2().check({ force: true })
    }
    ClickcheckBox3(){
        this.elements.checkBox3().check({ force: true })
    }
    ClickBTN_inscription(){
        this.elements.BTN_Inscription().click()
    }

    //formulaire
    formulaire(prenom,mail,nom,date_naissance,mot_passe){
        this.Saisiprenom(prenom)
        this.Saisirnom(nom)
        this.Saisirconfirmation_mail(mail)
        this.Saisirdate_naissance(date_naissance)
        this.Saisirmot_passe(mot_passe)
        this.ClickcheckBox1()
        this.ClickcheckBox2()
        this.ClickcheckBox3()
        this.ClickBTN_inscription()
    }
    

}

export default new Login()