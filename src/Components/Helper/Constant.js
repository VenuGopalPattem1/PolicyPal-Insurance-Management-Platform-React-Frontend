

// this is GET mode request that is used to get the case Number based On the application registration id
export const GENERATE_CASE_NO="http://venugopal:9091/dc/case-no/"

//This is POST mode request that is used to get post the citizen details 
export const REGISTER_CITIZEN_APPLICATION="http://venugopal:9091/CR-api/regCitizen"

//this is GET mode request it is used to diplay all the available plans in the DB
export const GET_ALL_PLAN_NAMES="http://venugopal:9091/admin/getAll"

//this is POST mode request this is used to save tha data into CASES_ENTITY table
export const UPDATE_CASES_ENTITY="http://venugopal:9091/dc/savePlan"

//this is POST mode request is used to send the Childrens data into The DB table
export const SAVE_CHILD_DATA='http://venugopal:9091/dc/saveChild'

//this is POST mode request is used to send the Income data into The DB table
export const SAVE_INCOME_DATA='http://venugopal:9091/dc/saveIncome'

//this is POST mode request is used to send the Educational data into The DB table
export const SAVE_EDUCATIONAL_DATA='http://venugopal:9091/dc/saveEducation'

//this is GET mode request is used to get the summary based on the given case number
export const GET_SUMMARY_BY_CASE_NO='http://venugopal:9091/dc/summary/'

//this is GET mode request is used to determine the eligibility of the user based on the case number
export const ELGI_DETERMINATION='http://venugopal:9091/ed/check/'

//this is GET mode request is used to determine the triggers data that are senfing the pdf attcheded to the user emails
export const CO_TRIGGERS='http://venugopal:9091/co/trigger'

//this is GET mode request is used to determine the triggers data that are senfing the pdf attcheded to the user emails
export const ELGI_REPORT_GETDATA='http://venugopal:9091/report/findAll'

//this is POST mode request is used to Save the Plan Details
export const CREATE_PLAN='http://venugopal:9091/admin/save'

//this is POST mode request is used to Save the Plan Details
export const CREATE_USER='http://venugopal:9091/admin/saveCw'


//this is GET mode request is used to getall  the Plan Details
export const GET_ALL_PLAN='http://venugopal:9091/admin/getAll'

//this is GET mode request is used to getall the Plan Details
export const GET_ALL_USER='http://venugopal:9091/admin/getAllCw'

//this is DELETE mode request is used to delete  the Plan Details
export const DELETE_PLAN_BY_ID='http://venugopal:9091/admin/delete/'

//this is DELETE mode request is used to delete the Plan Details
export const DELETE_USER_BY_ID='http://venugopal:9091/admin/deleteCw/'

//this is PATCH mode request is used to delete the Plan Details
export const UPDATE_STATUS_USER_BY_ID='http://venugopal:9091/admin/upCw/'

//this is PATCH mode request is used to delete the Plan Details
export const UPDATE_STATUS_PLAN_ID='http://venugopal:9091/admin/up/'


//this is GET mode request is used to delete the Plan Details
export const FIND_USER_USER_BY_ID='http://venugopal:9091/admin/getCw/'

//this is GET mode request is used to delete the Plan Details
export const FIND_PLAN_BY_ID='http://venugopal:9091/admin/get/'


//this is PUT mode request is used to delete the Plan Details
export const UPDATE_USER_USER_BY_ID='http://venugopal:9091/admin/updateCw'

//this is PUT mode request is used to delete the Plan Details
export const UPDATE_PLAN_BY_ID='http://venugopal:9091/admin/update'

export const SIGN_IN_API="http://localhost:8080/signin"