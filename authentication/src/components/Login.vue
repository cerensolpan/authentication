<script>
import firebase from "../utilities/firebase";
export default {
  data() {
    return {
      email: "",
      password: "",
      emailState: null,
      passwordState: null,
      // submittedEmail: [],
    };
  },
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.emailState = valid;
      this.passwordState = valid;
      return valid;
    },
    resetModal() {
      this.email = "";
      this.password = "";
      this.emailState = null;
      this.passwordState = null;
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          console.log(e);
        });
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
      // Push the name to submitted names
      // this.submittedEmail.push(this.email);
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    },
  },
};
</script>

<template>
  <div>
    <b-button v-b-modal.modal-prevent-closing>Login</b-button>

    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Login"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Email"
          label-for="name-input"
          invalid-feedback="Email is required"
          :state="emailState"
        >
          <b-form-input
            id="name-input"
            v-model="email"
            :state="emailState"
            required
            type="email"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          label="Password"
          label-for="name-input"
          invalid-feedback="Password is required"
          :state="passwordState"
        >
          <b-form-input
            id="name-input"
            v-model="password"
            :state="passwordState"
            required
            type="password"
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>
<style></style>
