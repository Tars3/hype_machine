(function() {
  angular.module('hype_machineApp')
    .config(MainRouter);

  MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

  function MainRouter($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        abstract: true,
        views: {
          'header' : {
              templateUrl: 'home.html'
          }
        }
      })
      .state('home.entryList', {
        url: '',
        views: {
          'content@' : {
            templateUrl: "js/entries/entry-list.html",
            controller: 'EntryListController',
            controllerAs: 'entryListVm'
          }
        }
      })
      // .state('showShow', {
      //   url: '/shows/show/:id',
      //   templateUrl: 'js/shows/show-show.html',
      //   controller: 'ShowShowController',
      //   controllerAs: 'showShowVm'
      // })
      .state('home.entryNew', {
        url: 'entries/new',
        views: {
          'content@': {
              templateUrl: 'js/entries/entry-new.html',
              controller: 'EntryNewController',
              controllerAs: 'entryNewVm'
          }
        }
      })
      .state('home.showEntry', {
        url: 'entries/:id'
      });
      // .state('showEdit', {
      //   url: '/shows/edit/:id',
      //   templateUrl: 'js/shows/show-edit.html',
      //   controller: 'ShowEditController',
      //   controllerAs: 'showEditVm'
      // });

    $urlRouterProvider.otherwise('/');
  }
})();
