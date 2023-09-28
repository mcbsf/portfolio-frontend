
import React from "react";

function getRequest(url) {
 
    let headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Credentials': 'true'
    };
    let token = localStorage.getItem("user-token");
    headers['Authorization'] = 'Bearer ' + token

    return fetch(
        url,
        {
            method: 'get',
            headers: headers
        }
    ).then(function (response) {
        console.log("get status")
        let status = response.status
        console.log(status)
        if(status === 401){

            console.log("auth error");
            window.location = '/login';
        }
        return response.json();
    })
    .catch(function (error) {
        let status = error.response.status
        if(status === 401){
            console.log("auth error");
            window.location = '/login';

        }
    });
}

export default getRequest;