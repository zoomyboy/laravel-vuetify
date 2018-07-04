<template>
    <v-dialog max-width="500px" v-model="visible">
        <v-card>
            <v-card-title><span class="title" v-html="title"></span></v-card-title>
            <v-card-text v-html="text"></v-card-text>
            <v-card-actions>
                <v-btn flat color="red darken-3" v-html="confirmtext" @click="$store.dispatch('confirmDialog', name)"></v-btn>
                <v-btn flat color="green darken-3" v-html="aborttext" @click="$store.dispatch('abortDialog', name)"></v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    import {mapState, mapGetters} from 'vuex'

    export default {
        data() {
            return {
            };
        },
        computed: {
            visible() {
                return this.dialogExists(this.name);
            },
            ...mapState(['confirm']),
            ...mapGetters(['dialogExists'])
        },
        props: {
            'name': {},
            'text': {},
            'title': {},
            confirmtext: {default: 'Löschen'},
            aborttext: {default: 'Abbrechen'}
        }
    }
</script>
