
/**
 * User check if name is correct
 */
const enteredCorrectName = (name) => {
    cy.get('#name').contains(name).should('exist')
};

/**
 * User check if email is correct
 */
const enteredCorrectEmail = (email) => {
    cy.get('#email').contains(email).should('exist')
};

/**
 * User check message for chgeckbox is correct
 */

const correctTextDisplays = () => {
    cy.get('#result > :nth-child(1)').contains('You have selected').should('exist')
};

/**
 * User check that option selected in radio button displays coprrectly
 */

const correctTextForYesDisplays = () => {
    cy.get('.text-success').contains('Yes').should('exist')
};
export default {

    enteredCorrectName,
    enteredCorrectEmail,
    correctTextDisplays,
    correctTextForYesDisplays


};