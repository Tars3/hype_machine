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
              templateUrl: 'home.html',
              // controller: 'headerController',
              // controllerAs: 'headerAsVm'
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
      .state('home.viewEntry', {
        url: 'entry/:id',
        views: {
          'content@': {
              templateUrl: 'js/entries/entry.html',
              controller: 'EntryViewController',
              controllerAs: 'entryVm'
          }
        }
      })
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
      .state('home.signIn', {
        url: 'signIn',
        views: {
          'content@': {
            templateUrl: 'js/signIn.html',
            controller: 'SignInController',
            controllerAs: 'vm'
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  }
})();
