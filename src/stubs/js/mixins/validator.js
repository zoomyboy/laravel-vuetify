export default {
    methods: {
        validateRequired: function(v) {
            return function(v) {
                return (typeof v !== "undefined" && v.length > 0) || 'Dieses Feld muss ausgefüllt werden.';
            }
        },
        validateMin: function(charCount) {
            return function(v) {
                return (typeof v !== 'undefined' && v.length >= charCount) || 'Bitte mindestens '+charCount+' Zeichen eingeben.';
            }
        },
        //Can be pased directly in the catch callback of axios
        showErrors: function(res, error) {
            var errors = [];
            var vm = this;

            Object.keys(res.response.data).forEach(function(key) {
                errors.push('Fehler in Feld '+(vm.$refs[key] ? vm.$refs[key].$props.label : key)+': '+res.response.data[key]);
            });

            vm.$store.commit('errorMessage', errors, 5000);
        },
        validateEmail: function() {
            return function(v) {
                return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(v) || 'Das hier ist keine richtige E-Mail-Adresse';
            };
        },
        validateSelected: function() {
            return function(v) {
                if (typeof v == "undefined") {return 'Dieses Feld ist erforderlich';}
                return (v != '' && v != -1) || 'Dieses Feld ist erforderlich.';
            };
        },
        validatePhone: function() {
            return function(v) {
                if (typeof v == "undefined") {return 'Dieses Feld ist erforderlich';}
                return /^\+[0-9]{2} [0-9]{3} [0-9]{1,10}$/.test(v)
                    || 'Dies sollte wie eine Telefonnummer formatiert werden (+99 999 99...)';
            };
        },
    }
};
