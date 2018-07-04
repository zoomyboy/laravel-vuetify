export default {
    methods: {
        hasRight: function(right) {
            return this.$store.state.user.group.rights.filter((r) => {
                return r.key == right;
            }).length > 0;
        }
    }
}