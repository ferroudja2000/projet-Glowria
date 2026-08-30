///<reference types = 'cypress'/>
import login from "../pages/login.page"
import {faker} from "@faker-js/faker"
import produit from "../pages/AchatProduit.page"
import Seconnecter from "../pages/Seconnecter.page"


describe('parcourir le site Glowria',{ tags: '@E2E @achat' }, () => {
let mail = faker.internet.email()
let prenom = faker.person.firstName()
let nom = faker.person.lastName()
let date_naissance = faker.date.birthdate({ min: 18, max: 70, mode: 'age' }).toLocaleDateString('fr-FR').replaceAll('/', '')
let mot_passe = `Aa1!${faker.string.alphanumeric(8)}`
let adresse = "10 rue de Paris"
let telephone = `06${faker.string.numeric(8)}`



  beforeEach("lien",()=>{
    cy.visit("https://glowria.com/#") 
  })



  it('inscription',{tags: '@inscription'}, () => {
    login.first_inscription(mail)
    login.formulaire(prenom, mail, nom, date_naissance, mot_passe)
  });


  it('acheter un produit', () => {
      produit.clickacheter()
    //assertion
      cy.url().should('include','/personal/presentation')
    // choisir un produit
      produit.clickBTN_je_craque()
    //se connecter 
    Seconnecter.Se_connecter(mail, mot_passe)
    //assertion
    cy.url().should('include','/order/personal/creation/50/')

    //remplissage de formulaire de livraison 
    produit.formulaire(adresse,telephone)
    cy.url().should('include','/order/personal/validation/')

   //3 recaputilatif + paiement 
    produit.recapitulatif()
    

  });

  
})