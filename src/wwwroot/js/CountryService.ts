/// <reference path="Core/HttpService.ts" />
module WorldDataBank {
    export class CountryMetaDataService {
        static $inject = ["$http", "$q", "HttpService"];
        employees: Array<Country> = new Array<Country>(
            { id: 1, Name: "UAE", code: "UAE", Currency: "Dirham", CurrencySymbol: "1" },
            { id: 2, Name: "India", code:"in", Currency: "Rupee", CurrencySymbol: "1" }
        );
        http: ng.IHttpService;
        q: ng.IQService;
        service: WorldDataBank.Core.HttpService;
        constructor($http: ng.IHttpService, $q: ng.IQService, service: WorldDataBank.Core.HttpService) {
            this.http = $http;
            this.q = $q;
            this.service = service;
        }
        GetAll(): Array<Country> {
            return this.employees;
        }
        GetByCountryCodes(companyId: number) {
            return this.employees.filter((emp: Country,
                index: number, emps: Array<Country>) => emp.id === companyId);
        }
        GetById(id: string): ng.IPromise<Country> {
            return this.service.get("/API/getcountrymetadata/pk");
        }
        GetMultiple(list: Array<string>): ng.IPromise<Array<Country>> {

            //return this.q.all(this.getPromisesForWebRequests(list))
            //    .then(
            //    (results: Array<ng.IHttpPromiseCallbackArg<Country>>) => {
            //        return results.map((item: ng.IHttpPromiseCallbackArg<Country>) => { return item.data });
            //    },
            //    (errors) => { throw errors; }
            //    );
			return null;
        }
        getPromisesForWebRequests(list: Array<string>): Array<ng.IPromise<Country>> {
            var listOfCalls: Array<ng.IPromise<Country>> = [];
            angular.forEach(list, (item: string, key: string) => {
                listOfCalls.push(this.http.get(this.getFullUrl(item)));
            });
            return listOfCalls;
        }
        private getFullUrl(code: string): string {
            return "http://localhost/angularhttpcachingformetadata/home/getcountrymetadata/" + code;

        }
    }
    //angular.module('CountryApp').service("CountryMetaDataService", ["$http", '$q', 'HttpService', CountryMetaDataService]);
    WorldDataBankModule.getInstance().registerService("CountryMetaDataService", CountryMetaDataService);
}