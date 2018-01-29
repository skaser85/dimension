import Modal from "./modal.js";

new Vue({
    el: "#main",
    components: {
        Modal
    },
    data() {
        return {
            showModal: false,
            intro: false,
            work: false,
            about: false,
            contact: false,
            infos: [
                {
                    title: "intro",
                    imgUrl: "./images/floating_island.jpg",
                    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, saepe earum nostrum dolores quia suscipit rem officia possimus veritatis, sunt modi provident. Illum nesciunt tempore quam inventore debitis libero culpa?"
                },
                {
                    title: "work",
                    imgUrl: "./images/prague.jpg",
                    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, saepe earum nostrum dolores quia suscipit rem officia possimus veritatis, sunt modi provident. Illum nesciunt tempore quam inventore debitis libero culpa?"
                },
                {
                    title: "about",
                    imgUrl: "./images/sunset.jpg",
                    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, saepe earum nostrum dolores quia suscipit rem officia possimus veritatis, sunt modi provident. Illum nesciunt tempore quam inventore debitis libero culpa?"
                }
            ]
        }
    },
    methods: {
      showIntro() {
          this.showModal = true;
          this.intro = true;
          this.work = false;
          this.about = false;
          this.contact = false;
      },
      showWork() {
          this.showModal = true;
          this.intro = false;
          this.work = true;
          this.about = false;
          this.contact = false;
      },
      showAbout() {
          this.showModal = true;
          this.intro = false;
          this.work = false;
          this.about = true;
          this.contact = false;
      },
      showContact() {
          this.showModal = true;
          this.intro = false;
          this.work = false;
          this.about = false;
          this.contact = true;
      }
    },
    computed: {

    }
});