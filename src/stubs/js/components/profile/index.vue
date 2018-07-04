<template>
    <div class="cp-wrap cp-profile-index">
        <v-card>
            <v-container>
                <v-form v-model="valid">
                    <v-text-field ref="email" label="E-Mail-Adresse" id="email" v-model="values.email" :rules="[validateRequired()]"></v-text-field>
                    <v-text-field name="name" label="Name" id="name" v-model="values.name"></v-text-field>

                    <v-btn :disabled="!valid" @click="submit" color="primary">Absenden</v-btn>
                </v-form>
            </v-container>
        </v-card>
    </div>
</template>

<style lang="less">
    .cp-wrap.cp-profile-index {

    }
</style>

<script>
    import {mapState} from 'vuex';

    export default {
        data: function() {
            return  {
                valid: false,
                active: 'general',
                values: {
                    email: '',
                    name: ''
                }
            };
        },
        computed: {
            ...mapState(['user'])
        },
        created: function() {
            this.$store.commit('setapptitle', 'Eigenes Profil');
        },
        methods: {
            submit: function() {
                var vm = this;

                axios.patch('/api/user/'+this.user.id, this.values).then(function() {
                    vm.$store.commit('successMessage', 'Update erfolgreich!');
                    vm.$store.dispatch('getuser');
                }).catch((ret, errors) => this.showErrors(ret, errors));
            }
        },
        mounted: function() {
            this.values.name = this.user.name;
            this.values.email = this.user.email;
        }
    }
</script>
