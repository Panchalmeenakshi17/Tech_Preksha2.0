import axios from 'axios';
import swal from 'sweetalert';

export const registerTeam = (values) => async dispatch => {
    dispatch({type : 'TEAM_REGISTER_REQUEST'})
    try {
        await axios.post('/api/teams/register',values);
        alert(`${values.tname} Registered Successfully`);
        swal(`${values.tname} Registered Successfully!`,"success");
        dispatch({type : 'TEAM_REGISTER_SUCCESS'});
        setTimeout(() => window.location.href = '/login', 2000);
    } catch (error) {
        dispatch({type : 'TEAM_REGISTER_FAIL',payload : error})
    }
};

export const loginTeam = (values) => async dispatch => {
    dispatch({type : 'TEAM_LOGIN_REQUEST'});
    try {
        const response = await axios.post('/api/teams/login',values);
        alert(`${response.data.tname} Login Successfully`);
        swal(`${response.data.tname} Login Successfully!`,"success")
        dispatch({type : 'TEAM_LOGIN_SUCCESS',payload : response.data});
        localStorage.setItem('currentTeam', JSON.stringify(response.data));
        setTimeout(() => window.location.href = '/', 2000);
        
    } catch (error) {
        dispatch({type : 'TEAM_LOGIN_FAIL',payload : error});
    }
};

export const logoutTeam = () => dispatch => {
    localStorage.removeItem('currentTeam');
    window.location.href = '/login';
};