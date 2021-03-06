System.register([], function(exports_1) {
    var logReducer;
    return {
        setters:[],
        execute: function() {
            exports_1("logReducer", logReducer = function (state, action) {
                if (state === void 0) { state = []; }
                switch (action.type) {
                    case 'ADD_ENTRY':
                        return state.concat([action.data]);
                    case 'LOAD_ENTRIES':
                        return action.data;
                    default:
                        return state;
                }
            });
        }
    }
});
