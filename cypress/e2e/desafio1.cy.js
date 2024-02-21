describe('Actividad - Desafio 1',()=>{
    const tarea ="cocinar"
    beforeEach("Login",()=>{
        cy.visit('');
        cy.get('#user').type(Cypress.env().usuario +Math.floor(Math.random()*10000))
        cy.get('#pass').type(Cypress.env().contraseña)
        cy.get('[data-cy="Male"]').click({force:true})
        cy.get('#submitForm' ,{timeout:10000}).click()
        cy.get('#todolistlink').click()
    })
    it("Agregar tarea", () =>{
        //agregar 3 tareas y sacar una foto a la pantalla completa
        cy.get('[data-cy="removeAll"]',{timeout:60000})
        cy.get('#task',{timeout:5000}).type(tarea)
        cy.get('#sendTask').click()
        cy.xpath("//p[starts-with(text(),'cocinar')]").click()
    
        cy.wait(5000)
    })  

})