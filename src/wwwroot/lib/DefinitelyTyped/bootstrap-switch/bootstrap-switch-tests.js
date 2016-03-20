/// <reference path="../jquery/jquery.d.ts"/>
/// <reference path="bootstrap-switch.d.ts" />
function test_cases() {
    $('#switch').bootstrapSwitch();
    $('#switch').bootstrapSwitch({
        state: false
    });
    $('#switch').bootstrapSwitch({
        state: false,
        disabled: true
    });
    //var mySwitch = $('#switch').get(0);
    //mySwitch.toggleAnimate();
    $('#switch').bootstrapSwitch('state', true, true);
    $('#switch').on('switchChange.bootstrapSwitch', function (event) {
        console.log($(event.target).val());
    });
}
