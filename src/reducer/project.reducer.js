/**
 * ACTIONS
 */

import 
{
    PROJECT_POST_REQUEST,
    PROJECT_POST,
    PROJECT_POST_ERROR,

    PROJECT_PUT_REQUEST,
    PROJECT_PUT,
    PROJECT_PUT_ERROR,

    PROJECT_DELETE_REQUEST,
    PROJECT_DELETE,
    PROJECT_DELETE_ERROR,

    PROJECT_LIST_REQUEST,
    PROJECT_LIST,
    PROJECT_LIST_ERROR
}
    
from '../actions/actions'


/**
 * INITIAL STATE
 */
const initialState = 
    {

        currentProject: {},
        isWritingProject: false,
        writingProjectError: {},

        projectsList : [],
        isLoadingList: false,
        loadingListError: {},

    };




/**
 * REDUCER
 */
export default (state = initialState, action) => {
    switch (action.type) {

        case PROJECT_POST_REQUEST:
        case PROJECT_PUT_REQUEST:
        case PROJECT_DELETE_REQUEST: 
            return {
                ...state,
                isWritingProject: true,
                writingProjectError : {}
            }

        case PROJECT_LIST_REQUEST: 
            return {
                ...state,
                isLoadingList: true,
                loadingListError : {}
            }
        
        case PROJECT_POST_ERROR:
        case PROJECT_PUT_ERROR:
        case PROJECT_DELETE_ERROR: 
            return {
                ...state,
                isWritingProject: false,
                writingProjectError : action.data.writingError
            }

        case PROJECT_LIST_ERROR: 
            return {
                ...state,
                isLoadingList: false,
                loadingListError : action.data.loadingError
            }

        case PROJECT_POST:
            return {
                ...state,
                projects: [...projects, action.data.project ]
            }

        case PROJECT_PUT:
            return {
                ...state
            }

        case PROJECT_DELETE:
            return {
                ...state,
                projects: projects.filter(project => project.id !== action.data.project.id)
            }

        case PROJECT_LIST:
            return {
                ...state,
                projects: action.data.projects
            }


    default:
    return state
    }
  }