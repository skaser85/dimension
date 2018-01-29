export default {
    template: "#form",
    data() {
        return {
            name: "",
            email: "",
            message: ""
        }
    },
    methods: {
        sendMessage() {
            console.log(this.name);
            console.log(this.email);
            console.log(this.message);
        },
        resetFields() {
            this.name = "";
            this.email = "";
            this.message = "";
        }
    }
}