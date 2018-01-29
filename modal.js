import Info from "./info.js";
import ContactForm from "./form.js";

export default {
    components: {
        Info,
        ContactForm
    },
    props: ["infos", "intro", "about", "work", "contact"],
    template: "#modal"
}