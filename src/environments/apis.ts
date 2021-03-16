
export const apiURL = {
    login: 'managelogin/login',
    checkUsername: 'managelogin/check-username/',
    profile : 'manageusers/' ,
    profileEdit: 'manageusers/update',
    dashboard:{
        base:'clientboard/',
        stepSummary: 'stepsummary',
        powerFactor:'powerfactor',
        consumption:'consumption',
    },
    initialData:{
        base: 'initialdata/',
        locations : 'locations',
        meters: 'meters',
        units: 'units',
        facility: 'facility'
    },
    controlTags:{
        base: 'controltags/',
        tags : 'select'
    },
    cctagDetail:{
        base:'cctagdetail/',
        tagDetails: 'groups'
    },
    steps:{
        base: 'clientboard/',
        stepListing: 'steplisting'
    },
    facilityReport:{
        base: 'clientboard/',
        fieldDataLive : 'controldata',
        fieldDataHistory : 'controllogs'
    },
    alarms:{
        base: 'warninglogs/'
    }
  
};
