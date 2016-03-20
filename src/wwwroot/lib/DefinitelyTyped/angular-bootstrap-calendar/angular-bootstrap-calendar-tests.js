///<reference path='angular-bootstrap-calendar.d.ts'/>
///<reference path='../angularjs/angular.d.ts'/>
var myApp = angular.module('testModule');
myApp.config(function (calendarConfig) {
    calendarConfig.templates.calendarMonthView = 'path/to/custom/template.html'; //change the month view template to a custom template
    calendarConfig.dateFormatter = 'moment'; //use either moment or angular to format dates on the calendar. Default angular. Setting this will override any date formats you have already set.
    calendarConfig.allDateFormats.moment.date.hour = 'HH:mm'; //this will configure times on the day view to display in 24 hour format rather than the default of 12 hour
    calendarConfig.allDateFormats.moment.title.day = 'ddd D MMM'; //this will configure the day view title to be shorter
    calendarConfig.i18nStrings.weekNumber = 'Week {week}'; //This will set the week number hover label on the month view
    calendarConfig.displayAllMonthEvents = true; //This will display all events on a month view even if they're not in the current month. Default false.
    calendarConfig.displayEventEndTimes = true; //This will display event end times on the month and year views. Default false.
    calendarConfig.showTimesOnWeekView = true; //Make the week view more like the day view, with the caveat that event end times are ignored.
});
var someController = function ($scope) {
    $scope.events = [
        {
            title: 'My event title',
            type: 'info',
            startsAt: new Date(2013, 5, 1, 1),
            endsAt: new Date(2014, 8, 26, 15),
            editable: false,
            deletable: false,
            draggable: true,
            resizable: true,
            incrementsBadgeTotal: true,
            recursOn: 'year',
            cssClass: 'a-css-class-name' //A CSS class (or more, just separate with spaces) that will be added to the event when it is displayed on each view. Useful for marking an event as selected / active etc
        }
    ];
};
