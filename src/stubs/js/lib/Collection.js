import orderByLatest from '../mixins/latest'

export default Vue.extend({
    props: {
        data: {
            type: Array,
            required: false
        }
    },
    data() {
        return {
            items: [],
            add: null,
            edit: null,
            del: null,
            deleting: false,
            addValid: false,
            editValid: false
        };
    },
    computed: {
        latest() {
            return this.orderByLatest(this.items);
        },
        adding: {
            get() {
                return this.add !== null;
            },
            set(v) {
                this.add = v ? Object.assign({}, this.values) : null;
            }
        },
        editing: {
            get() {
                return this.edit !== null;
            },
            set(v) {
                this.edit = v ? true : null;
            }
        }
    },
    mixins: [orderByLatest],
    methods: {
        store(item) {
            this.items.push(item);

            this.$emit('stored');
        },
        update(index, item) {
            this.items.splice(index, 1, item);

            this.$emit('updated');
        },
        destroy(index) {
            this.items.splice(index, 1);

            this.$emit('destroyed');
        },
        init(data) {
            this.items = data;
        },
        byId(id) {
            return this.items.find((item) => {
                return item.id == id;
            });
        },
        updateById(id, data) {
            this.update(this.items.findIndex((item) => {
                return item.id == id;
            }), data);
        },
        destroyById(id) {
            this.destroy(this.items.findIndex((item) => {
                return item.id == id;
            }));
        }
    }
});
