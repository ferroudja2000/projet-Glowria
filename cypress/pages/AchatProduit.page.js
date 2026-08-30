class produit{
    //elements

    elements ={
        acheter :()=> cy.get('.navbar__submenu').contains("L'ACHETER"),
        BTN_je_craque:()=> cy.get('[data-name="glplan12"]'),

        //cordonnées livraison:

        adresse :()=> cy.get('#user_input_autocomplete_address'),
        telephone :()=> cy.get('#subscription_deliveryContact_phoneNumber'),
        modeLivraison :()=> cy.get('.list-card__option__label').contains('Colissimo (recommandé)'),
        BTN_valider:()=> cy.get('#submit-creation-form'),

        //recapitulatif de commande 
        checkbox :()=> cy.get("#terms"),
        BTN_payer:()=> cy.get('#submit-validation-form'),



    }

    clickacheter(){
        this.elements.acheter().click({force: true})
    }
    clickBTN_je_craque(){
        this.elements.BTN_je_craque().click()
    }


    Saisiradresse(adresse){
        this.elements.adresse().type(adresse)
        cy.get('.pac-item').first().click()
    }
    Saisirtelephone(telephone){
        this.elements.telephone().type(telephone)
    }
    
    
    clickmodeLivraison(){
        this.elements.modeLivraison().click()
    }
    clickBTNValider(){
        this.elements.BTN_valider().click()
    }


    //formulaire de livraison
    formulaire(adresse,telephone,){
        this.Saisiradresse(adresse)
        this.Saisirtelephone(telephone)
        //this.Saisircomplementadresse(cmpl)
        this.clickmodeLivraison()
        this.clickBTNValider()

    }

    Clickcheckbox(){
        this.elements.checkbox().check()
    }
    clickboutonpayer(){
        this.elements.BTN_payer().click()
    }

    //recap

    recapitulatif(){
        this.Clickcheckbox()
        this.clickboutonpayer()
    }
    
}


export default new produit()