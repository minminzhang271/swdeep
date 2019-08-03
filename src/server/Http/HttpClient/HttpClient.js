/*! *****************************************************************************
HttpClient 
***************************************************************************** */

import Axios from "axios";
import * as Querystring from "querystring";
import { Navigation } from "../../Navigation/Navigation";

const logger = console;
export class HttpClient {
    corsHeader = true;
    headers = null;
    constructor() {
        this.host = "//zt.m.jd.com";
    }
    async get(uri, data = null) {
        return new Promise(async (resolve, reject) => {
            const response = await this.getResponse(uri, data);
            if (response.data.success === false || response.data.data === null) {
                logger.error("getAuth", uri, data, response);
                reject(new Error("接口错误"));
            }
            resolve(response.data);
        });
    }
    /**
     * 获取需要登录的get数据
     * @param {*} uri
     * @param {*} data
     */
    async getAuth(uri, data = null) {
        const response = await this.get(uri, data);
        if (response.error === "NotLogin") {
            new Navigation().gotoLogin();
            return;
        }
        return response;
    }
    async getResponse(uri, data = null, withCredentials = true) {
        // if (this.corsHeader) {
        //     this.headers = {
        //         "X-Requested-With": "XMLHttpRequest"
        //     }
        // }
        return await Axios.request({
            url: `${uri}?` + Querystring.stringify(data),
            method: "get",
            withCredentials: true,
            headers: this.headers,
        });
    }
    async getPostResponse(uri, data = null, withCredentials = true) {
        // if (this.corsHeader) {
        //     this.headers = {
        //         "X-Requested-With": "XMLHttpRequest",
        //     };
        // }
        return await Axios.request(
            {
                url: `${uri}`, data,
                method: "post",
                withCredentials: true,
                headers: this.headers,
            }
        );
    }
    async getPostData(uri, data = null, withCredentials = true) {
        const response = (await this.getPostResponse(uri, data, withCredentials));
        if (
            response.data.success !== false && response.data.error !== "NotLogin"
        ) {
            return response.data;
        } else {
            const error = { request: { uri, data }, response, message: "接口出错" };
            logger.error("getPostData", error);
            throw error;
        }
    }
    /**
     * 获取需要登录的post数据
     * @param {*} uri
     * @param {*} data
     */
    async getAuthPostData(uri, data = null) {
        try {
            const response = await this.getPostData(uri, data);
            return response;
        } catch (error) {
            if (error.response.data.error === "NotLogin") {
                new Navigation().gotoLogin();
                throw new Error("NotLogin");
            } else {
                throw error;
            }
        }
    }
}
