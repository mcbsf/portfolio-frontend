
import React from "react";
import axios from 'axios';


function postRequest(url, payload) {

    let token = localStorage.getItem("user-token");
    const headers ={
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Credentials': 'true',
        'Authorization': 'Bearer ' + token
    }
    try {
        const response = axios.post(
            url, 
            payload,
            { 
                headers: headers
            }
        );
        return response
        .then(function (response) {
            
            console.log("REQUEST SUCESSO ");
            return {
                'body': response.data,
                'status': response.status,
                'isError': false,
            };
        })
        .catch(function (error) {
            if (error.response) {
                console.log(" - - ERROR - - -");
                let body = error.response.data
                let status = error.response.status
                let headers = error.response.headers 
                console.log(body);
                console.log(status);
                console.log(headers);
                if(status === 401){
                    console.log("auth error");
                    window.location = '/login';
                }
                return {
                    'body': body,
                    'status': status,
                    'headers': headers,
                    'isError': true,
                };
            }
        });
            
    } catch (error) {
        console.log("AQUI CARAI2");
        return error;
    }
}

export default postRequest;

