import confirm from './confirm.module.js'

export default {
    modules: {confirm},
    state: {
        toolbar: [{
            icon: 'more_vert',
            children: [
                { title: 'Mein Profil', route: 'profile.index', icon: 'fa-user' },
                { title: 'Passwort ändern', route: 'profile.password', icon: 'fa-key' }
            ]
        }],
        navbar: [
            { icon: 'fa-user', route: 'client.index', title: 'Kunden', 'right': 'client.index' },
            { icon: 'fa-sign-out', callback: 'logout', title: 'Abmelden' }
        ],
        navbarfooter: [
            { icon: 'fa-sign-out', title: 'Abmelden', callback: 'logout' }
        ],
        config: null,
        notification: null,
        loaded: false
    },
    mutations: {
        setconfig: function(state, data) {
            Vue.set(state, 'config', data);
        },
        setapptitle: function(state, title) {
            Vue.set(state.config, 'apptitle', title);
        },
        errorMessage: function(store, message, delay) {
            if (delay === undefined) { delay = 3000; }
            if (typeof message == 'string') { message = [message]; }
            store.notification = {
                message,
                color: 'error'
            };
            window.setTimeout(function() {
                store.notification = false;
            }, delay);
        },
        successMessage: function(store, message, delay) {
            if (delay === undefined) { delay = 3000; }
            if (typeof message == 'string') { message = [message]; }
            store.notification = {
                message,
                color: 'success'
            };
            window.setTimeout(function() {
                store.notification = false;
            }, delay);
        },
        loaded: function(state, loaded) {
            return state.loaded = loaded;
        }
    },
    actions: {
        getuser(context) {
            var userId = document.querySelector('meta[name="userId"]').getAttribute('content');

            return axios.get('/api/user/' + userId);
        },
        getconfig(context) {
            return axios.get('/api/config');
        }
    }
}

