'use strict';
angular.module('services.factory', ['ngRoute','ngResource'])
    .factory('resumesById', function($resource) {
        return $resource('/patients/:idpatient/resumes',{id:"@_idpatient"},
        { get: { method: 'GET', isArray: true}});
    })
    .factory('allResumes', function($resource) {
        return $resource('/patients/resumes',{},
        { get: { method: 'GET', isArray: true}});
    });


