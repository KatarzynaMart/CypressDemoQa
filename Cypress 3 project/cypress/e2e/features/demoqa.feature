Feature: Check Elements

    Scenario: User is checking Text Boxes on Elements
        Given User is on demoqa website
        When User open 'Elements'
        Then User press on Text Box
        And User fills all required fields
        And User press Submit button
        And All the items are correct

    Scenario: User is checking Check Boxes on Elements
        Given User is on demoqa website
        When User open 'Elements'
        Then User press on CheckBox
        And User checks CheckBox field
        Then Text for checkbox displays 'You have selected'


    Scenario: User is checking Radio buttons on Elements
        Given User is on demoqa website
        When User open 'Elements'
        Then User press on Radio Button
        And User likes the site
        Then Correct text 'Yes' displays

    Scenario: User is checking Radio buttons on Elements
        Given User is on demoqa website
        When User open 'Elements'
        Then User press on Buttons
        And User double clicks first button
        And User right clicks second button

    Scenario: User is checking Radio buttons on Elements
        Given User is on demoqa website
        When User open 'Elements'
        Then User press on Web Tables
        And User opens add new row popup
        And User fills registration form


    @focus
    Scenario: User is checking Radio buttons on Elements
        Given User is on demoqa website
        When User open 'Elements'
        Then User press on Upload and Download