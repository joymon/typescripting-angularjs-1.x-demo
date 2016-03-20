/// <reference path="axios.d.ts" />
var HttpMethod;
(function (HttpMethod) {
    HttpMethod[HttpMethod["GET"] = 0] = "GET";
    HttpMethod[HttpMethod["PUT"] = 1] = "PUT";
    HttpMethod[HttpMethod["POST"] = 2] = "POST";
    HttpMethod[HttpMethod["DELETE"] = 3] = "DELETE";
    HttpMethod[HttpMethod["CONNECT"] = 4] = "CONNECT";
    HttpMethod[HttpMethod["HEAD"] = 5] = "HEAD";
    HttpMethod[HttpMethod["OPTIONS"] = 6] = "OPTIONS";
    HttpMethod[HttpMethod["TRACE"] = 7] = "TRACE";
    HttpMethod[HttpMethod["PATCH"] = 8] = "PATCH";
})(HttpMethod || (HttpMethod = {}));
var ResponseType;
(function (ResponseType) {
    ResponseType[ResponseType["arraybuffer"] = 0] = "arraybuffer";
    ResponseType[ResponseType["blob"] = 1] = "blob";
    ResponseType[ResponseType["document"] = 2] = "document";
    ResponseType[ResponseType["json"] = 3] = "json";
    ResponseType[ResponseType["text"] = 4] = "text";
})(ResponseType || (ResponseType = {}));
axios.interceptors.request.use(function (config) {
    console.log("Method:" + config.method + " Url:" + config.url);
    return config;
});
var requestId = axios.interceptors.request.use(function (config) {
    console.log("Method:" + config.method + " Url:" + config.url);
    return config;
}, function (error) { return error; });
axios.interceptors.request.eject(requestId);
axios.interceptors.request.eject(7);
axios.interceptors.response.use(function (config) {
    console.log("Status:" + config.status);
    return config;
});
var responseId = axios.interceptors.response.use(function (config) {
    console.log("Status:" + config.status);
    return config;
}, function (error) { return error; });
axios.interceptors.response.eject(responseId);
axios.get("https://api.github.com/repos/mzabriskie/axios")
    .then(function (r) { return console.log(r.config.method); });
var getRepoDetails = axios({
    url: "https://api.github.com/repos/mzabriskie/axios",
    method: HttpMethod[HttpMethod.GET],
    headers: {},
}).then(function (r) {
    console.log("ID:" + r.data.id + " Name: " + r.data.name);
    return r;
});
axios.post("http://example.com/", {}, {
    transformRequest: function (data) { return data; }
});
axios.post("http://example.com/", {
    headers: { 'X-Custom-Header': 'foobar' }
}, {
    transformRequest: [
        function (data) { return data; }
    ]
});
var getRepoIssue = axios.get("https://api.github.com/repos/mzabriskie/axios/issues/1");
var axiosInstance = axios.create({
    baseURL: "https://api.github.com/repos/mzabriskie/axios/",
    timeout: 1000
});
axiosInstance.request({ url: "issues/1" });
axios.all([getRepoDetails, getRepoDetails]).then(function (_a) {
    var repo1 = _a[0], repo2 = _a[1];
    var sumIds = repo1.data.id + repo2.data.id;
    console.log("Sum ID:" + sumIds);
    return sumIds;
});
var repoSum = function (repo1, repo2) {
    var sumIds = repo1.data.id + repo2.data.id;
    console.log("Sum ID:" + sumIds);
    return sumIds;
};
axios.all([getRepoDetails, getRepoDetails]).then(axios.spread(repoSum));
