/*global QUnit*/

sap.ui.define([
	"singleplanning.cal./singleplanning/controller/Planning.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Planning Controller");

	QUnit.test("I should test the Planning controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
