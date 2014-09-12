/* global describe, it, beforeEach, afterEach, expect, inject, sinon, testctx */
/* global $controller, $httpBackend, $location, $q, $rootScope, $route */
/* jshint expr: true */
describe('layout', function () {
    describe('sidebar', function () {
        var dataservice;
        var scope;
        var controller;
        var toastr;

        beforeEach(function() {
            module('app', testctx.fakeLogger);
            testctx.injectDependencies(true);
            inject(function(_dataservice_, _toastr_) {
                dataservice = _dataservice_;
                toastr = _toastr_;
            });
        });

        beforeEach(function () {
            scope = $rootScope.$new();
            controller = $controller('Sidebar as vm', {
                '$scope': scope
            });
        });

        it('should have isCurrent() for / to return `current`', function () {
            $httpBackend.when('GET', 'app/dashboard/dashboard.html').respond(200);
            $location.path('/');
            $httpBackend.flush();
            $rootScope.$apply();
            expect(scope.vm.isCurrent($route.current)).to.equal('current');
        });

        it('should have isCurrent() for /avengers to return `current`', function () {
            $httpBackend.when('GET', 'app/avengers/avengers.html').respond(200);
            $location.path('/avengers');
            $httpBackend.flush();
            $rootScope.$apply();
            expect(scope.vm.isCurrent($route.current)).to.equal('current');
        });

        it('should have isCurrent() for non route not return `current`', function () {
            $httpBackend.when('GET', 'app/dashboard/dashboard.html').respond(200);
            $location.path('/invalid');
            $httpBackend.flush();
            $rootScope.$apply();
            expect(scope.vm.isCurrent({title: 'invalid'})).not.to.equal('current');
        });

        afterEach(function () {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });
    });
});