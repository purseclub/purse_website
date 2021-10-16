//firebase error

export const CustomError = (code) => {
  let message = "";

  switch (code) {
    case "auth/wrong-password":
      message = "The password is invalid";
      break;
    case "auth/internal-error":
      message = "Something went wrong. Please try after sometime";
      break;
    case "auth/too-many-requests":
      message =
        "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.";
      break;
    default:
      message = code;
      break;
  }

  return message;
};
