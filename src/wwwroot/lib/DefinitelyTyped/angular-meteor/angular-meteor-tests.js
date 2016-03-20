/// <reference path="angular-meteor.d.ts" />
var Todos = new Mongo.Collection('todos');
var app = angular.module('angularMeteorTestApp');
app.controller("mainCtrl", ['$scope', '$meteor', function ($scope, $meteor) {
        // Bind all the todos to $scope.todos
        $scope.todos = $meteor.collection(Todos);
        $scope.sticky = true;
        // Bind all sticky todos to $scope.stickyTodos
        // Binds the query to $scope.sticky so that if it changes, Meteor will re-run the query and bind it
        // to $scope.stickyTodos
        $scope.stickyTodos = $meteor.collection(function () {
            return Todos.find({ sticky: $scope.getReactively('sticky') });
        });
        // Bind without auto-save all todos to $scope.notAutoTodos
        $scope.notAutoTodos = $meteor.collection(Todos, false).subscribe("publicTodos");
        $scope.todoNotAuto = $meteor.object(Todos, 'TodoID', false);
        $scope.todoSubscribed = $meteor.object(Todos, 'TodoID').subscribe('todos');
        $scope.todo = $scope.todoNotAuto.getRawObject();
        $scope.todoNotAuto.reset();
        $scope.todoNotAuto.save($scope.todo).then(function (data) { return data == 1; });
        ;
        // todo might be an object like this {text: "Learn Angular", sticky: false}
        // or an array like this:
        // [{text: "Learn Angular", sticky: false}, {text: "Hello World", sticky: true}]
        $scope.save = function (todo) {
            $scope.notAutoTodos.save(todo);
        };
        $scope.saveAll = function () {
            $scope.notAutoTodos.save();
        };
        $scope.autoSave = function (todo) {
            $scope.todos.push(todo);
        };
        // todoId might be an string like this "WhrnEez5yBRgo4yEm"
        // or an array like this ["WhrnEez5yBRgo4yEm","gH6Fa4DXA3XxQjXNS"]
        $scope.remove = function (todoId) {
            $scope.notAutoTodos.remove(todoId);
        };
        $scope.removeAll = function () {
            $scope.notAutoTodos.remove();
        };
        $scope.removeAuto = function (todo) {
            $scope.todos.splice($scope.todos.indexOf(todo), 1);
        };
        $scope.toSticky = function (todo) {
            if (angular.isArray(todo)) {
                angular.forEach(todo, function (object) {
                    object.sticky = true;
                });
            }
            else {
                todo.sticky = true;
            }
            $scope.stickyTodos.save(todo);
        };
        var todoObject = { name: 'first todo' };
        var todosArray = [{ name: 'second todo' }, { name: 'third todo' }];
        var todoSecondObject = { name: 'forth todo' };
        $scope.todos.save(todoObject); // todos equals [{name:'first todo'}]
        $scope.todos.save(todosArray); // todos equals [{name:'first todo'}, {name:'second todo'}, {name:'third todo'}]
        $scope.todos.push(todoSecondObject); // The scope variable equals to [{name:'first todo'}, {name:'second todo'}, {name:'third todo'}, {name:'forth todo'}]
        // but the collection still equals to [{name:'first todo'}, {name:'second todo'}, {name:'third todo'}]
        $scope.todos.save(); // Now the collection also equals to [{name:'first todo'}, {name:'second todo'}, {name:'third todo'}, {name:'forth todo'}]
        $scope.todos.remove('firstTodoId'); // scope and collection equals to [{name:'second todo'}, {name:'third todo'}, {name:'forth todo'}]
        var todoIdsArray = ['secondTodoId', 'thirdTodoId'];
        $scope.todos.remove(todoIdsArray); // removes everything matches the array of IDs both in scope and in collection
        $scope.todos.pop(); // removes only in scope
        $scope.todos.remove(); // syncs also in Meteor collection
        // Subscribe ->
        $meteor.subscribe('todos').then(function (subscriptionHandle) {
            // Bind all the todos to $scope.todos
            $scope.todos = $meteor.collection(Todos);
            console.log($scope.todos + ' is ready');
            // You can use the subscription handle to stop the subscription if you want
            subscriptionHandle.stop();
        });
        $scope.subscribe('todos').then(function (subscriptionHandle) {
            // Bind all the todos to $scope.books
            $scope.todos = $meteor.collection(Todos);
            console.log($scope.todos + ' is ready');
            // No need to stop the subscription, it will automatically close on scope destroy
        });
        $meteor.call('subscribe', $scope.todo._id, $scope.currentUser._id).then(function (data) {
            // Handle success
            console.log('success subscribing', data.name);
        }, function (err) {
            // Handle error
            console.log('failed', err);
        });
        if (!$scope.loggingIn) {
            $meteor.waitForUser();
            $meteor.requireUser();
            $meteor.requireValidUser(function (user) {
                return user.username == 'admin';
            });
            $meteor.loginWithPassword('user', 'password').then(function () {
                console.log('Login success');
            }, function (err) {
                console.log('Login error - ', err);
            });
            $meteor.createUser({
                username: 'moma',
                email: 'example@gmail.com',
                password: 'Bksd@asdf',
                profile: { expertize: 'Developer' }
            }).then(function () {
                console.log('Login success');
            }, function (err) {
                console.log('Login error - ', err);
            });
            $meteor.changePassword('old', 'new232f3').then(function () {
                console.log('Change password success');
            }, function (err) {
                console.log('Error changing password - ', err);
            });
            $meteor.forgotPassword({ email: 'sample@gmail.com' }).then(function () {
                console.log('Success sending forgot password email');
            }, function (err) {
                console.log('Error sending forgot password email - ', err);
            });
            $meteor.resetPassword('tokenID', 'new232f3').then(function () {
                console.log('Reset password success');
            }, function (err) {
                console.log('Error resetting password - ', err);
            });
            $meteor.verifyEmail('tokenID').then(function () {
                console.log('Success verifying password ');
            }, function (err) {
                console.log('Error verifying password - ', err);
            });
            $meteor.logout().then(function () {
                console.log('Logout success');
            }, function (err) {
                console.log('logout error - ', err);
            });
            $meteor.logoutOtherClients().then(function () {
                console.log('Logout success');
            }, function (err) {
                console.log('logout error - ', err);
            });
            var loginWithOptions = { requestPermissions: ['email'] };
            $meteor.loginWithFacebook({ requestPermissions: ['email'] }).then(function () {
                console.log('Login success');
            }, function (err) {
                console.log('Login error - ', err);
            });
            $meteor.loginWithGithub({ requestPermissions: ['email'] }).then(function () {
                console.log('Login success');
            }, function (err) {
                console.log('Login error - ', err);
            });
            $meteor.loginWithGoogle({ requestPermissions: ['email'] }).then(function () {
                console.log('Login success');
            }, function (err) {
                console.log('Login error - ', err);
            });
            $meteor.loginWithMeetup({ requestPermissions: ['email'] }).then(function () {
                console.log('Login success');
            }, function (err) {
                console.log('Login error - ', err);
            });
            $meteor.loginWithTwitter({ requestPermissions: ['email'] }).then(function () {
                console.log('Login success');
            }, function (err) {
                console.log('Login error - ', err);
            });
            $meteor.loginWithWeibo({ requestPermissions: ['email'] }).then(function () {
                console.log('Login success');
            }, function (err) {
                console.log('Login error - ', err);
            });
        }
        $meteor.autorun($scope, function () { console.log("Aurorun triggered."); });
        $meteor.getCollectionByName('collectionName');
        // requires meteor add mdg:camera
        $meteor.getPicture().then(function (data) {
            $scope['picture'] = data;
        });
        $meteor.session('counter').bind($scope, 'counter');
    }]);
