import { Given } from "@badeball/cypress-cucumber-preprocessor"
import ActionsCommon from './actions'

Given('User is on demoqa website', () => {
    ActionsCommon.userIsOnDemoqakWebsite()
})