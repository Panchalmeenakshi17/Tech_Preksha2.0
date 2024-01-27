export const registerTeamReducer = (state={},action) => {
    switch(action.type){
        case 'TEAM_REGISTER_REQUEST' :
            return{
                loading : true
            }
        case 'TEAM_REGISTER_SUCCESS' :
            return{
                loading : false,
                success : true
            }
        case 'TEAM_REGISTER_FAIL' :
            return{
                loading : false,
                error : action.payload
            }
        default : return state
    }
};

export const loginTeamReducer = (state={},action) => {
    switch(action.type){
        case 'TEAM_LOGIN_REQUEST' :
            return{
                loading : true
            }
        case 'TEAM_LOGIN_SUCCESS' :
            return{
                loading : false,
                success : true,
                currentTeam : action.payload
            }
        case 'TEAM_LOGIN_FAIL' :
            return{
                loading : false,
                error : action.payload
            }
        default : return state
    }
};