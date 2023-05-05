/**
 * Demoqa  website is shown
 */
const userIsOnDemoqakWebsite = () => {
    cy.visit('https://demoqa.com/')
};

export default {
    userIsOnDemoqakWebsite
};