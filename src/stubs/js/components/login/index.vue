<template>
    <v-form method="post" action="login" v-model="valid" @submit.prevent="submit">
        <v-card class="elevation-12">
            <v-toolbar dark color="blue">
                <v-toolbar-title>WEAW: Einloggen</v-toolbar-title>
                <v-spacer></v-spacer>
                <img src="/storage/aweos-logo-weiss.svg" class="aweos-logo">
            </v-toolbar>
            <v-alert
                :color="notification.color"
                v-if="notification"
                icon="check_circle"
                value="notification !== false"
                v-html="notification.message.join('<br>')"
            >
            </v-alert>
            <v-card-text>
                <v-text-field prepend-icon="person" ref="email" name="email" label="E-Mail-Adresse" type="text" v-model="values.email" :rules="[validateRequired()]"></v-text-field>
                <v-text-field prepend-icon="lock" ref="password" name="password" label="Passwort" id="password" type="password" :rules="[validateRequired()]" v-model="values.password"></v-text-field>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" type="submit" :disabled="!valid">Login</v-btn>
            </v-card-actions>
        </v-card>
    </v-form>
</template>

<style lang="scss" scoped>
    .aweos-logo {
        max-height: 50%;
        margin-top: 8px;
    }
</style>

<script>
    import {mapGetters, mapState} from 'vuex';

    export default {
        data: function() {
            return  {
                valid: false,
                values: {
                    email: '',
                    password: ''
                }
            };
        },
        computed: {
            ...mapState(['notification'])
        },
        methods: {
            submit: function() {
                var vm = this;

                axios.post('/login', this.values).then(function() {
                    window.location.href = '/';
                    return;
                }).catch((res, error) => this.showErrors(res, error));
            },
            g: function() {
                console.log('ZZZ');
            }
        }
    }
</script>
