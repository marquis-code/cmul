import axios from 'axios';

export const visitorSignup = async (formData) => {
    const config = {
        headers : {
            'Content-Type' : 'application/json'
        }
    }
    const response = await axios.post('/api/visitors/signup', formData, config)
    return response;
}


export const nimasiteSignup = async (formData) => {
    const config = {
        headers : {
            'Content-Type' : 'application/json'
        }
    }
    const response = await axios.post('/api/nimasites/signup', formData, config)
    return response;
}


export const nimasiteSignin = async (formData) => {
    const config = {
        headers : {
            'Content-Type' : 'application/json'
        }
    }
    const response = await axios.post('/api/nimasites/signin', formData, config)
    return response;
}