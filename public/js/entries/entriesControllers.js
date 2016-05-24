(function() {
  angular.module('hype_machineApp')
    .controller("EntryListController", EntryListController)
    // .controller("ShowShowController", ShowShowController)
    .controller("EntryNewController", EntryNewController)
    // .controller("ShowEditController", ShowEditController);

    EntryListController.$inject = ['EntryResource'];
    // ShowShowController.$inject = ['ShowResource', '$stateParams'];
    EntryNewController.$inject = ['EntryResource', '$state'];
    // ShowEditController.$inject = ['ShowResource', '$stateParams', '$state'];

    function EntryListController(EntryResource) {
      var vm = this;
      vm.entries = [];
      // vm.destroy = destroy;

      EntryResource.query().$promise.then(function(entries) {
        console.log('In the query resolved promise', entries);
        vm.entries = entries;
      });

      // function destroy(showToDelete) {
      //   ShowResource.delete({id: showToDelete._id}).$promise.then(function (response) {
      //     console.log(response.message);
      //     vm.shows = vm.shows.filter(function(show) {
      //       return show != showToDelete;
      //     });
      //   });
      // }
    }

    // function ShowShowController(ShowResource, $stateParams) {
    //   var vm = this;
    //   vm.show = {};

    //   ShowResource.get({id: $stateParams.id}).$promise.then(function(jsonShow) {
    //       vm.show = jsonShow;
    //   });
    // }

    function EntryNewController(EntryResource, $state) {
      var vm = this;
      vm.newEntry = {};
      vm.addEntry = addEntry;

      function addEntry() {
        EntryResource.save(vm.newEntry).$promise.then(function(jsonEntry) {
          vm.newEntry = {};
          $state.go('home.showEntry', {id: jsonEntry._id});
        });
      }
    }

    // function ShowEditController(ShowResource, $stateParams, $state) {
    //   var vm = this;
    //   vm.show = {};
    //   vm.editShow = editShow;

    //   ShowResource.get({id: $stateParams.id}).$promise.then(function(jsonShow) {
    //       vm.show = jsonShow;
    //   });

    //   function editShow() {
    //     ShowResource.update({id: vm.show._id}, vm.show).$promise.then(function(updatedShow) {
    //       vm.show = updatedShow;
    //       $state.go('showShow', {id: updatedShow._id});
    //     });
    //   }
    // }

})();
