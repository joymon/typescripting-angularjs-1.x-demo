/// <reference path="../jquery/jquery.d.ts" />
/// <reference path="../backbone/backbone.d.ts" />
/// <reference path="backbone.paginator.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BackbonePaginatorTests;
(function (BackbonePaginatorTests) {
    var TestModel = (function (_super) {
        __extends(TestModel, _super);
        function TestModel() {
            _super.apply(this, arguments);
        }
        return TestModel;
    })(Backbone.Model);
    ;
    var makeFetchOptions = function () {
        return {
            reset: true,
            url: 'example.com',
            beforeSend: function (jqxhr) { },
            success: function (model, response, options) { },
            error: function (collection, jqxhr, options) { },
            parse: '',
        };
    };
    var InitializingWithNoOption;
    (function (InitializingWithNoOption) {
        var TestCollection = (function (_super) {
            __extends(TestCollection, _super);
            function TestCollection() {
                _super.call(this);
            }
            return TestCollection;
        })(Backbone.PageableCollection);
        var testCollection = new TestCollection();
    })(InitializingWithNoOption || (InitializingWithNoOption = {}));
    var InitializingWithOptions;
    (function (InitializingWithOptions) {
        var TestCollection = (function (_super) {
            __extends(TestCollection, _super);
            function TestCollection(models, options) {
                _super.call(this);
            }
            return TestCollection;
        })(Backbone.PageableCollection);
        var testCollection1 = new TestCollection();
        var testCollection2 = new TestCollection([
            new TestModel(),
            new TestModel()
        ]);
        var testCollection3 = new TestCollection([], {});
        var testCollection4 = new TestCollection([], {
            comparator: function () { return 1; },
            full: true,
            state: {},
            queryParam: {},
        });
        var testCollection5 = new TestCollection([], {
            state: {
                firstPage: 0,
                lastPage: 0,
                currentPage: 0,
                pageSize: 1,
                totalPages: 1,
                totalRecords: 1,
                sortKey: 'id',
                order: 1,
            },
            queryParam: {
                currentPage: 'current_page',
                pageSize: 'page_size',
                totalPages: 'total_pages',
                totalRecords: 'total_records',
                sortKey: 'sort_key',
                order: 'order',
                directions: '',
            },
        });
        var testCollection6 = new TestCollection([
            {},
            {},
        ]);
    })(InitializingWithOptions || (InitializingWithOptions = {}));
    var Fetching;
    (function (Fetching) {
        var TestCollection = (function (_super) {
            __extends(TestCollection, _super);
            function TestCollection(models, options) {
                _super.call(this);
            }
            return TestCollection;
        })(Backbone.PageableCollection);
        var testCollection = new TestCollection();
        var result = testCollection.fetch();
        testCollection.fetch({});
        testCollection.fetch(makeFetchOptions());
    })(Fetching || (Fetching = {}));
    var Paging;
    (function (Paging) {
        var TestCollection = (function (_super) {
            __extends(TestCollection, _super);
            function TestCollection(models, options) {
                _super.call(this);
            }
            return TestCollection;
        })(Backbone.PageableCollection);
        var options = makeFetchOptions();
        var testCollection = new TestCollection();
        var result = testCollection.getFirstPage();
        testCollection.getFirstPage(options);
        // 'silent's type is boolean. (structural subtyping)
        testCollection.getFirstPage({ silent: 'aa' });
        // 'url's type is string. (structural subtyping)
        testCollection.getFirstPage({ url: true });
        result = testCollection.getLastPage();
        testCollection.getLastPage(options);
        // 'silent's type is boolean. (structural subtyping)
        testCollection.getLastPage({ silent: 'aa' });
        // 'url's type is string. (structural subtyping)
        testCollection.getLastPage({ url: true });
        result = testCollection.getNextPage();
        testCollection.getNextPage(options);
        // 'silent's type is boolean. (structural subtyping)
        testCollection.getNextPage({ silent: 'aa' });
        // 'url's type is string. (structural subtyping)
        testCollection.getNextPage({ url: true });
        result = testCollection.getPage(1);
        testCollection.getPage("1", options);
        // 'silent's type is boolean. (structural subtyping)
        testCollection.getPage(1, { silent: 'aa' });
        // 'url's type is string. (structural subtyping)
        testCollection.getPage(1, { url: true });
        result = testCollection.getPageByOffset(1);
        testCollection.getPageByOffset(1, options);
        // 'silent's type is boolean. (structural subtyping)
        testCollection.getPageByOffset(1, { silent: 'aa' });
        // 'url's type is string. (structural subtyping)
        testCollection.getPageByOffset(1, { url: true });
        result = testCollection.getPreviousPage();
        testCollection.getPreviousPage(options);
        // 'silent's type is boolean. (structural subtyping)
        testCollection.getPreviousPage({ silent: 'aa' });
        // 'url's type is string. (structural subtyping)
        testCollection.getPreviousPage({ url: true });
        var hasPage = testCollection.hasNextPage();
        hasPage = testCollection.hasPreviousPage();
    })(Paging || (Paging = {}));
    var Parse;
    (function (Parse) {
        var TestCollection = (function (_super) {
            __extends(TestCollection, _super);
            function TestCollection(models, options) {
                _super.call(this);
            }
            return TestCollection;
        })(Backbone.PageableCollection);
        var testCollection = new TestCollection();
        var result = testCollection.parse({}, {});
        var resultLinks = testCollection.parseLinks({}, {});
        resultLinks = testCollection.parseLinks({}, { xhr: $.ajax({}) });
        result = testCollection.parseRecords({}, {});
        var resultState = testCollection.parseState({}, {
            currentPage: 'current_page',
            pageSize: 'page_size',
            totalPages: 'total_pages',
            totalRecords: 'total_records',
            sortKey: 'sort_key',
            order: 'order',
            directions: '',
        }, {
            firstPage: 0,
            lastPage: 0,
            currentPage: 0,
            pageSize: 1,
            totalPages: 1,
            totalRecords: 1,
            sortKey: 'id',
            order: 1,
        }, {});
    })(Parse || (Parse = {}));
    var Setting;
    (function (Setting) {
        var TestCollection = (function (_super) {
            __extends(TestCollection, _super);
            function TestCollection(models, options) {
                _super.call(this);
            }
            return TestCollection;
        })(Backbone.PageableCollection);
        var testCollection = new TestCollection();
        var options = makeFetchOptions();
        var result1 = testCollection.setPageSize(1, options);
        var result2 = testCollection.setSorting('id', 1, options);
        result1 = testCollection.switchMode('server', { fetch: true, resetState: true });
    })(Setting || (Setting = {}));
    var Syncing;
    (function (Syncing) {
        var TestCollection = (function (_super) {
            __extends(TestCollection, _super);
            function TestCollection(models, options) {
                _super.call(this);
            }
            return TestCollection;
        })(Backbone.PageableCollection);
        var testCollection = new TestCollection();
        var result = testCollection.sync('server', new TestModel(), {});
        result = testCollection.sync('server', testCollection, {});
    })(Syncing || (Syncing = {}));
    var Confllict;
    (function (Confllict) {
        var result = Backbone.PageableCollection.noConflict();
    })(Confllict || (Confllict = {}));
})(BackbonePaginatorTests || (BackbonePaginatorTests = {}));
