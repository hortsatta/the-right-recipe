export default {
  isSubmitting: (state) => (
    state.isSignUpSubmitting || state.isSignInOutSubmitting
  ),
};
