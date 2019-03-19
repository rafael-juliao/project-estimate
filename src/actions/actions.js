//ACTIONS ARE ATOMIC OPERATIONS

export const INCREMENT_REQUESTED = 'counter/INCREMENT_REQUESTED'
export const INCREMENT = 'counter/INCREMENT'
export const DECREMENT_REQUESTED = 'counter/DECREMENT_REQUESTED'
export const DECREMENT = 'counter/DECREMENT'



//SAVE PROJECT CLOUD
export const PROJECT_POST_REQUEST = 'project/PROJECT_POST_REQUEST'
export const PROJECT_POST = 'project/PROJECT_POST'
export const PROJECT_POST_ERROR = 'project/PROJECT_POST_ERROR'

export const PROJECT_PUT_REQUEST = 'project/PROJECT_PUT_REQUEST'
export const PROJECT_PUT = 'project/PROJECT_PUT'
export const PROJECT_PUT_ERROR = 'project/PROJECT_PUT_ERROR'

export const PROJECT_DELETE_REQUEST = 'project/PROJECT_DELETE_REQUEST'
export const PROJECT_DELETE = 'project/PROJECT_DELETE'
export const PROJECT_DELETE_ERROR = 'project/PROJECT_DELETE_ERROR'

export const PROJECT_LIST_REQUEST = 'project/PROJECT_LIST_REQUEST'
export const PROJECT_LIST = 'project/PROJECT_LIST'
export const PROJECT_LIST_ERROR = 'project/PROJECT_LIST_ERROR'


//LOCAL ONLY
export const USER_STORY_ADD = 'userStory/USER_STORY_CREATION_REQUESTED'
export const USER_STORY_UPDATE = 'userStory/USER_STORY_UPDATE'
export const USER_STORY_DELETE = 'userStory/USER_STORY_DELETE'



let form = {

    currentUserStory : {
        id:1,
        title: 'ADD CLIENT',
        description: 'como Gerente quero adicionar um novo cliente',
        why: 'para acomodar novos clientes e fechar novos negocios',
        size: { name: 'M', points: 3 },
        uncertainty: { name: 'MEDIA', value : 0.3 },
        epic : { ID: 2, name : 'Client Management'}

    },


    currentProject: {
        name:
    }
};