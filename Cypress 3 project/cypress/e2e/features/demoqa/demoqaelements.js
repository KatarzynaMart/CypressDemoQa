import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"
import ActionsElements from './actions'
import ExpectationsElements from './expectations'

var name = 'User'
var email = 'km@mail.com'
var lastname = 'Surnmane'
var age = 18
var salary = 1800
var department = 'finances'

When('User open {string}', (button) => {
    ActionsElements.userOpensElements(button)
})

Then('User press on Text Box', () => {
    ActionsElements.userOpensTextBox()
})

Then('User fills all required fields', () => {
    ActionsElements.userFillsName(name)
    ActionsElements.userFillsEmail(email)
    ActionsElements.userFillsCurrentAddress()
    ActionsElements.userFillsPermanentAddress()

})

Then('User press Submit button', () => {
    ActionsElements.userSubmits()
})
Then('All the items are correct', () => {
    ExpectationsElements.enteredCorrectName(name)
    ExpectationsElements.enteredCorrectEmail(email)
})

Then('User press on CheckBox', () => {
    ActionsElements.userOpensCheckBox()
})

Then('User checks CheckBox field', () => {
    ActionsElements.userClicksOncheckBox()
})

Then('Text for checkbox displays {string}', () => {
    ExpectationsElements.correctTextDisplays()
})

Then('User press on Radio Button', () => {
    ActionsElements.userOpensRadioButtons()
})

Then('User likes the site', () => {
    ActionsElements.userSelectYesOption()
})

Then('Correct text {string} displays', () => {
    ExpectationsElements.correctTextForYesDisplays()
})

Then('User press on Buttons', () => {
    ActionsElements.userOpensButtons()
})

Then('User double clicks first button', () => {
    ActionsElements.userDoubleClicks()
})

Then('User right clicks second button', () => {
    ActionsElements.userRightClicks()
})

Then('User press on Web Tables', () => {
    ActionsElements.userOpensWebTables()
})

Then('User opens add new row popup', () => {
    ActionsElements.userAddsNewRow()
})


Then('User fills registration form', () => {
    ActionsElements.userTypesFirstName(name)
    ActionsElements.userFillsLastName(lastname)
    ActionsElements.userTypesHisEmail(email)
    ActionsElements.userFillsAge(age)
    ActionsElements.userFillsSalary(salary)
    ActionsElements.userFillsDepartment(department)

})


Then('User press on Upload and Download', () => {
    ActionsElements.userOpensUpAndDown()
})