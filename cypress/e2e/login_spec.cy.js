
// describe('My First Test', () => {
//     it('Does not do much!', () => {
//       expect(true).to.equal(true)
//     })
//   })
// describe('My First Test', () => {
//     it('Does not do much!', () => {
//       expect(true).to.equal(false)
//     })
//   })



describe('Login Dashboard',() => {
  beforeEach(()=>{
      cy.visit('http://localhost:3000/Dashboard-hotel');
     
  })

  it('page login can be opened', () => {
    cy.visit('http://localhost:3000/Dashboard-hotel');
    cy.url().should('include', '/login');  
    cy.get('button[type=submit]').click();
  })
  it('username and password', () => {
    cy.get("input[type = 'text']").type('Celia');
    cy.get("input[type= 'password']").type('12345');
  })


  
})