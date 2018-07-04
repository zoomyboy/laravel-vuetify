<template>
    <div class="cp-wrap cp-profile-index">
        <v-card>
            <v-container>
                <v-form v-model="valid" @submit.prevent="submit">
                    <v-text-field name="password" type="password" label="Passwort" id="password" v-model="values.password" :rules="[validateRequired()]"></v-text-field>
                    <v-text-field name="password_confirmation" label="Passwort wiederholen" type="password" id="password_confirmation" v-model="values.password_confirmation" :rules="[validateRequired()]"></v-text-field>

                    <v-btn :disabled="!valid" type="submit" color="primary">Absenden</v-btn>
                </v-form>
            </v-container>
        </v-card>
    </div>

</template>

<style lang="less">
    .cp-wrap.cp-profile-password {

    }
</style>

<script>
    import {mapState} from 'vuex';

    export default {
        data: function() {
            return  {
                valid: false,
                values: {
                    password: '',
                    password_confirmation: ''
                }
            };
        },
        computed: {
            ...mapState(['user'])
        },
        created: function() {
            this.$store.commit('setapptitle', 'Passwort ändern');
        },
        methods: {
            submit: function() {
                var vm = this;

                axios.post('/api/user/'+this.user.id+'/password', this.values).then((ret) => {
                    vm.$store.commit('successMessage', 'Passwort geändert');
                }).catch((ret) => vm.showErrors(ret));
            }   
        },
        mounted: function() {

        }
    }
</script>
