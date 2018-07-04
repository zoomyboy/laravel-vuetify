export default {
    state: {
        config: null
    },
    getters: {
        loaded: function(state) {
            return state.config !== null;
        }
    },
    mutations: {
        setconfig: function(state, config) {
            Vue.set(state, 'config', config);
        },
        errorMessage: function(store, message, delay) {
            if (delay === undefined) {delay = 3000;}
            Vue.set(store, 'notification', {
                message,
                color: 'error'
            });
            window.setTimeout(function() {
                store.notification = false;
            }, delay);
        },
        successMessage: function(store, message, delay) {
            if (delay === undefined) {delay = 3000;}
            Vue.set(store, 'notification', {
                message,
                color: 'success'
            });
            window.setTimeout(function() {
                store.notification = false;
            }, delay);
        }
    }
};
