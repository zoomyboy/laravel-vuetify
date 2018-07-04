export default {
    state: {
        dialogs: []
    },
    actions: {
        confirm(context, name) {
            return new Promise((resolve, reject) => {
                context.commit('openDialog', {name, resolve, reject});
            });
        },
        confirmDialog(context, name) {
            context.getters.dialogByName(name).resolve();
            context.commit('deleteDialog', name);
        },
        abortDialog(context, name) {
            context.getters.dialogByName(name).reject();
            context.commit('deleteDialog', name);
        }
    },
    getters: {
        dialogByName: (state) => (name) => {
            return state.dialogs.find((dialog) => dialog.name == name);
        },
        dialogExists: (state) => (name) => {
            return state.dialogs.find((dialog) => dialog.name == name) !== undefined;
        }
    },
    mutations: {
        openDialog(state, payload) {
            state.dialogs.push(payload);
        },
        deleteDialog(state, name) {
            state.dialogs = state.dialogs.filter((dialog) => {
                return dialog.name != name;
            });
        }
    }
}
