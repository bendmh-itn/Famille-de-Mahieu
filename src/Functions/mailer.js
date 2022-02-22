import emailjs from "@emailjs/browser";

export const sendMessageBirthday = (e) => {
  e.preventDefault();
  console.log(e.target);
  emailjs
    .sendForm(
      "service_eazh81x",
      "template_zuvf60c",
      e.target,
      "user_cal0tADaKW2a7Fk7kJQ4v"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
};
