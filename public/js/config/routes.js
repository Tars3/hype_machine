(function() {
  angular.module('hype_machineApp')
    .config(MainRouter);

  MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

  function MainRouter($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home.html'
      })
      .state('entryList', {
        url: '/entries/list',
        templateUrl: "js/entries/entry-list.html",
        controller: 'EntryListController',
        controllerAs: 'entryListVm'
      })
      // .state('showShow', {
      //   url: '/shows/show/:id',
      //   templateUrl: 'js/shows/show-show.html',
      //   controller: 'ShowShowController',
      //   controllerAs: 'showShowVm'
      // })
      // .state('showNew', {
      //   url: '/shows/new',
      //   templateUrl: 'js/shows/show-new.html',
      //   controller: 'ShowNewController',
      //   controllerAs: 'showNewVm'
      // })
      // .state('showEdit', {
      //   url: '/shows/edit/:id',
      //   templateUrl: 'js/shows/show-edit.html',
      //   controller: 'ShowEditController',
      //   controllerAs: 'showEditVm'
      // });

    $urlRouterProvider.otherwise('/');
  }
})();
