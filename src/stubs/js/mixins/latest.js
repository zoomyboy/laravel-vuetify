export default {
    methods: {
        orderByLatest(values) {
            return values.concat().sort(function(a,b){
                return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
            });
        }
    }
}
