/// <reference path="bookshelf.d.ts" />
/// <reference path="../knex/knex.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Knex = require('knex');
var Bookshelf = require('bookshelf');
var knex = Knex({
    client: 'sqlite3',
    connection: {
        filename: ':memory:',
    },
});
// Examples
var bookshelf = Bookshelf(knex);
var User = (function (_super) {
    __extends(User, _super);
    function User() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(User.prototype, "tableName", {
        get: function () { return 'users'; },
        enumerable: true,
        configurable: true
    });
    User.prototype.messages = function () {
        return this.hasMany(Posts);
    };
    return User;
})(bookshelf.Model);
var Posts = (function (_super) {
    __extends(Posts, _super);
    function Posts() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(Posts.prototype, "tableName", {
        get: function () { return 'messages'; },
        enumerable: true,
        configurable: true
    });
    Posts.prototype.tags = function () {
        return this.belongsToMany(Tag);
    };
    return Posts;
})(bookshelf.Model);
var Tag = (function (_super) {
    __extends(Tag, _super);
    function Tag() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(Tag.prototype, "tableName", {
        get: function () { return 'tags'; },
        enumerable: true,
        configurable: true
    });
    return Tag;
})(bookshelf.Model);
new User({}).where('id', 1).fetch({ withRelated: ['posts.tags'] })
    .then(function (user) {
    console.log(user.related('posts').toJSON());
}).catch(function (err) {
    console.error(err);
});
// Associations
var Book = (function (_super) {
    __extends(Book, _super);
    function Book() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(Book.prototype, "tableName", {
        get: function () { return 'books'; },
        enumerable: true,
        configurable: true
    });
    Book.prototype.summary = function () {
        return this.hasOne(Summary);
    };
    Book.prototype.pages = function () {
        return this.hasMany(Pages);
    };
    Book.prototype.authors = function () {
        return this.belongsToMany(Author);
    };
    return Book;
})(bookshelf.Model);
var Summary = (function (_super) {
    __extends(Summary, _super);
    function Summary() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(Summary.prototype, "tableName", {
        get: function () { return 'summaries'; },
        enumerable: true,
        configurable: true
    });
    Summary.prototype.book = function () {
        return this.belongsTo(Book);
    };
    return Summary;
})(bookshelf.Model);
var Pages = (function (_super) {
    __extends(Pages, _super);
    function Pages() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(Pages.prototype, "tableName", {
        get: function () { return 'pages'; },
        enumerable: true,
        configurable: true
    });
    Pages.prototype.book = function () {
        return this.belongsTo(Book);
    };
    return Pages;
})(bookshelf.Model);
var Author = (function (_super) {
    __extends(Author, _super);
    function Author() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(Author.prototype, "tableName", {
        get: function () { return 'author'; },
        enumerable: true,
        configurable: true
    });
    Author.prototype.books = function () {
        return this.belongsToMany(Book);
    };
    return Author;
})(bookshelf.Model);
var Site = (function (_super) {
    __extends(Site, _super);
    function Site() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(Site.prototype, "tableName", {
        get: function () { return 'sites'; },
        enumerable: true,
        configurable: true
    });
    Site.prototype.photo = function () {
        return this.morphOne(Photo, 'imageable');
    };
    return Site;
})(bookshelf.Model);
var Post = (function (_super) {
    __extends(Post, _super);
    function Post() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(Post.prototype, "tableName", {
        get: function () { return 'posts'; },
        enumerable: true,
        configurable: true
    });
    Post.prototype.photos = function () {
        return this.morphMany(Photo, 'imageable');
    };
    return Post;
})(bookshelf.Model);
var Photo = (function (_super) {
    __extends(Photo, _super);
    function Photo() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(Photo.prototype, "tableName", {
        get: function () { return 'photos'; },
        enumerable: true,
        configurable: true
    });
    Photo.prototype.imageable = function () {
        return this.morphTo('imageable', Site, Post);
    };
    return Photo;
})(bookshelf.Model);
