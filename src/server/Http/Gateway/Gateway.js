import * as QueryString from "querystring";
import { HttpClient } from "../HttpClient/HttpClient.js";

import {
    Navigation
} from "../../Navigation/Navigation.js";
export class JRGateway {
   //API_HOST = window.location.protocol + "//tt-pre.swdeep.com";
   API_HOST = (function(){ 
       return location.host == "//tt-pre.swdeep.com" ? window.location.protocol + "//tt-pre.swdeep.com" : window.location.protocol + "//tt.swdeep.com"}
       )();

  
   async getJSONP(uri, query = null) {
        const response = await new HttpClient().getJSONPData(uri, query);
        if (response.code === "00000") {
            return response.data;
        } else {
            const error = new Error("JSONP_ERROR");
            error["data"] = response;
            throw error;
        }
    }
    async getPostData(uri, query, headers = null, withCredentials = false) {
        if (query === null) {
            query = {};
        }
        if (typeof query.clientType !== "string") {
            query.clientType = "sms";
        }
        query.clientVersion = "11.0";
        const formdata = QueryString.stringify({
            reqData: JSON.stringify(query),
        });
        try {
            const response = await new HttpClient().getPostData(this.API_HOST + uri,
                formdata, headers, withCredentials, 5000);
               console.log("getPostData", this.API_HOST, response);
            if (response.resultCode === 0) {
                return response.resultData;
            }
            const error = new Error("API_ERROR");
            error["data"] = { response };
            throw error;
        } catch (error) {
            console.log('getPostData',error)
            throw error;
        }
    }
    async getPostAuthData(uri, query = null) {
        console.info("getPostAuthData", this.API_HOST, { uri, query });
        try {
            if (query === null) {
                query = {};
            }
            const resultData = await this.getPostData(uri, query, null, true);
            console.info("getPostAuthData.resultData", { uri, query, resultData });
            return resultData;
        } catch (error) {
            console.log("getPostAuthData", uri, query, error);
            if (error.message === "API_ERROR") {
                if (error.data.response.resultCode === 3) {
                    new Navigation().gotoLogin();
                    throw new Error("NOT_LOGIN");
                }
            }
            throw error;
        }
    }
}
