(function() {
  angular.module('hype_machineApp')
    .controller("EntryListController", EntryListController)
    .controller("EntryViewController", EntryViewController)
    .controller("EntryNewController", EntryNewController)
    // .controller("EntryEditController", EntryEditController);

    EntryListController.$inject = ['EntryResource', '$http'];
    EntryViewController.$inject = ['EntryResource', '$stateParams'];
    EntryNewController.$inject = ['EntryResource', '$state'];
    // ShowEditController.$inject = ['ShowResource', '$stateParams', '$state'];

    function EntryListController(EntryResource, $http) {
      var vm = this;
      vm.voteColor = voteColor;
      vm.entries = [];
      vm.destroy = destroy;
      vm.upvote = upvote;

      EntryResource.query().$promise.then(function(entries) {
        vm.entries = entries;
        console.log(vm.entries);
      });

      function destroy(entryToDelete) {
      EntryResource.delete({id: entryToDelete._id}).$promise.then(function (response) {
        console.log(response.message);
        vm.entries = vm.entries.filter(function(entry) {
          return entry != entryToDelete;
        });
      });
    }

      // function for upvotes
      function upvote(entry) {
        entry.votes = entry.votes + 1;
        // AJAX call, using $http
        $http
          .put('/api/upvote/' +entry._id, entry)
          .then(function(res) {
            console.log(res.data);
          },
          function(err) {
            console.log(err)
          });
      }
    }

    function EntryViewController(EntryResource, $stateParams) {
      var vm = this;
      vm.entry = {};
      vm.voteColor = voteColor;

      EntryResource.get({id: $stateParams.id}).$promise.then(function(jsonEntry) {
          vm.entry = jsonEntry;
      });
    }

    function EntryNewController(EntryResource, $state) {
      var vm = this;
      vm.newEntry = {};
      vm.addEntry = addEntry;

      function addEntry() {
        EntryResource.save(vm.newEntry).$promise.then(function(jsonEntry) {
          vm.newEntry = {};
          $state.go('home.viewEntry', {id: jsonEntry._id});
        });
      }
    }

    // function for changing color of cards according to votes.
    function voteColor(votes) {
      if (votes <= 4 ) {
        return "blue lighten-3"
      } else if (votes <= 9) {
        return "pink"
      } else if (votes <= 14) {
        return "blue lighten-2"
      } else if (votes <= 19) {
        return "blue lighten-3"
      } else if (votes <= 24) {
        return "blue"
      } else if (votes <= 29) {
        return "pink lighten-1"
      } else if (votes <= 34) {
        return "pink lighten-2"
      } else if (votes <= 39) {
        return "pink lighten-3"
      } else if (votes <= 44) {
        return "pink"
      } else if (votes <= 49) {
        return "orange lighten-3"
      } else if (votes <= 54) {
        return "orange lighten-2"
      } else if (votes <= 59) {
        return "orange lighten-1"
      } else if (votes <= 64) {
        return "orange"
      } else if (votes <= 69) {
        return "red lighten-3"
      } else if (votes <= 74) {
        return "red lighten-2"
      } else if (votes <= 79) {
        return "red lighten-1"
      } else {
        return "red"
      };
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
