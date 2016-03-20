/// <reference path="PayPal-Cordova-Plugin.d.ts"/>
var item;
item = new PayPalItem("name", 10, "25.00", "USD");
item = new PayPalItem("name", 10, "25.00", "USD", null);
item = new PayPalItem("name", 10, "25.00", "USD", "SKU_ID");
var item_name = item.name;
var item_quantity = item.quantity;
var item_price = item.price;
var item_currency = item.currency;
var item_sku = item.sku;
var paymentDetails;
paymentDetails = new PayPalPaymentDetails("10.50", "2.50", "1.25");
var paymentDetails_subtotal = paymentDetails.subtotal;
var paymentDetails_shipping = paymentDetails.shipping;
var paymentDetails_tax = paymentDetails.tax;
var shippingAddress;
shippingAddress = new PayPalShippingAddress("name", "line1", "line2", "city", "state", "postalCode", "countryCode");
var shippingAddress_recipientName = shippingAddress.recipientName;
var shippingAddress_line1 = shippingAddress.line1;
var shippingAddress_line2 = shippingAddress.line2;
var shippingAddress_city = shippingAddress.city;
var shippingAddress_state = shippingAddress.state;
var shippingAddress_postalCode = shippingAddress.postalCode;
var shippingAddress_countryCode = shippingAddress.countryCode;
var payment;
payment = new PayPalPayment("10.00", "USD", "description", "Auth");
payment = new PayPalPayment("10.00", "USD", "description", "Auth", paymentDetails);
var payment_amount = payment.amount;
var payment_currency = payment.currency;
var payment_shortDescription = payment.shortDescription;
var payment_intent = payment.intent;
var payment_details = payment.details;
var payment_invoiceNumber = payment.invoiceNumber;
var payment_custom = payment.custom;
var payment_softDescriptor = payment.softDescriptor;
var payment_bnCode = payment.bnCode;
var payment_items = [item, item, item];
var payment_shippingAddress = shippingAddress;
var configOptions = {
    defaultUserEmail: "email",
    defaultUserPhoneCountryCode: "countryCode",
    defaultUserPhoneNumber: "phoneNumber",
    merchantName: "merchantName",
    merchantPrivacyPolicyURL: "merchantPrivacyPolicyURL",
    merchantUserAgreementURL: "merchantUserAgreementURL",
    acceptCreditCards: true,
    payPalShippingAddressOption: 10,
    rememberUser: true,
    languageOrLocale: "languageOrLocal",
    disableBlurWhenBackgrounding: true,
    presentingInPopover: true,
    forceDefaultsInSandbox: true,
    sandboxUserPassword: "sandboxUserPassword",
    sandboxUserPin: "sandboxUserPin"
};
var config;
config = new PayPalConfiguration();
config = new PayPalConfiguration(null);
config = new PayPalConfiguration(configOptions);
var config_defaultUserEmail = config.defaultUserEmail;
var config_defaultUserPhoneCountryCode = config.defaultUserPhoneCountryCode;
var config_defaultUserPhoneNumber = config.defaultUserPhoneNumber;
var config_merchantName = config.merchantName;
var config_merchantPrivacyPolicyURL = config.merchantPrivacyPolicyURL;
var config_merchantUserAgreementURL = config.merchantUserAgreementURL;
var config_acceptCreditCards = config.acceptCreditCards;
var config_payPalShippingAddressOption = config.payPalShippingAddressOption;
var config_rememberUser = config.rememberUser;
var config_languageOrLocale = config.languageOrLocale;
var config_disableBlurWhenBackgrounding = config.disableBlurWhenBackgrounding;
var config_presentingInPopover = config.presentingInPopover;
var config_forceDefaultsInSandbox = config.forceDefaultsInSandbox;
var config_sandboxUserPasword = config.sandboxUserPassword;
var config_sandboxUserPin = config.sandboxUserPin;
var clientIds = {
    PayPalEnvironmentProduction: "",
    PayPalEnvironmentSandbox: ""
};
var apiModule = PayPalMobile;
apiModule.version(function (result) { });
apiModule.init(clientIds, function () { });
apiModule.prepareToRender("environment", config, function () { });
apiModule.renderSinglePaymentUI(payment, function (result) { }, function (cancelReason) { });
apiModule.applicationCorrelationIDForEnvironment("environment", function (applicationCorrelationId) { });
apiModule.clientMetadataID(function (clientMetadataId) { });
apiModule.renderFuturePaymentUI(function (result) { }, function (cancelReason) { });
apiModule.renderProfileSharingUI(["openid", "profile", "email"], function (result) { }, function (cancelReason) { });
