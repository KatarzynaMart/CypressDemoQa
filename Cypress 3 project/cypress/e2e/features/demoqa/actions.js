/**
 * User check Elements
 */

const userOpensElements = (button) => {
    cy.wait(200)
    cy.get(':nth-child(1) > :nth-child(1) > .card-body > h5').contains(button).click()
};

/**
 * User check Text box field 
 */
const userOpensTextBox = () => {
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-0 > .text').click()
};

/**
 * User fills his name
 */
const userFillsName = (name) => {
    cy.get('#userName').type(name)
};

/**
 * User fills his email
 */
const userFillsEmail = (email) => {
    cy.get('#userEmail').type(email)
};

/**
 * User fills his current address
 */
const userFillsCurrentAddress = () => {
    cy.get('#currentAddress').type('Valencia')
};

/**
 * User fills his permanent address
 */
const userFillsPermanentAddress = () => {
    cy.get('#permanentAddress').type('Malaga')
};

/**
 * User submits the form
 */
const userSubmits = () => {
    cy.get('#submit').click()
};

/**
 * User Open check box field 
 */
const userOpensCheckBox = () => {
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-1 > .text').click()
};

/**
 * User checks check box field 
 */
const userClicksOncheckBox = () => {
    cy.get('.rct-checkbox > .rct-icon').click()
};

/**
 * User opens radio button table
 */
const userOpensRadioButtons = () => {
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-2 > .text').click()
};

/**
 * User select Yes option
 */

const userSelectYesOption = () => {
    cy.get(':nth-child(2) > .custom-control-label').click()
};

/**
 * User opens Buttons tab
 */
const userOpensButtons = () => {
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-4').click()
};

/**
 * User double click first button
 */
const userDoubleClicks = () => {
    cy.get('#doubleClickBtn').dblclick()
};

/**
 * User right click second button
 */
const userRightClicks = () => {
    cy.get('#rightClickBtn').rightclick()
};


/**
 * User press web tables button 
 */
const userOpensWebTables = () => {
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-3 > .text').click()
};

/**
 * User press Add button, to add new table's row
 */
const userAddsNewRow = () => {
    cy.get('#addNewRecordButton').click()
};

/**
 * User fills his name
 */
const userTypesFirstName = (name) => {
    cy.wait(200)
    cy.get('#firstName').type(name)
};

/**
 * User fills his last name
 */
const userFillsLastName = (lastname) => {
    cy.wait(200)
    cy.get('#lastName').type(lastname)
};
/**
 * User fills his email
 */
const userTypesHisEmail = (email) => {
    cy.wait(200)
    cy.get('#userEmail').type(email)
};

const userFillsAge = (age) => {
    cy.wait(200)
    cy.get('#age').type(age)
};

const userFillsSalary = (salary) => {
    cy.wait(200)
    cy.get('#salary').type(salary)
};

const userFillsDepartment = (department) => {
    cy.wait(200)
    cy.get('#department').type(department)
};

/**
 * User opend upload and download element
 */
const userOpensUpAndDown = () => {
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-7 > .text').click()
};



export default {

    userOpensElements,
    userOpensTextBox,
    userFillsName,
    userFillsEmail,
    userFillsCurrentAddress,
    userFillsPermanentAddress,
    userSubmits,
    userOpensCheckBox,
    userClicksOncheckBox,
    userOpensRadioButtons,
    userSelectYesOption,
    userOpensButtons,
    userDoubleClicks,
    userRightClicks,
    userOpensWebTables,
    userAddsNewRow,
    userFillsLastName,
    userFillsAge,
    userFillsSalary,
    userFillsDepartment,
    userTypesFirstName,
    userTypesHisEmail,
    userOpensUpAndDown

};