import emailjs from '@emailjs/browser';
const SERVICE_ID = "service_ja7uhmb";
const TEMPLATE_ID = "template_71tx62j";
const USER_ID = "J5mYsJ_DKbjAykEs2";

export const sendContact = async (data) => {
  var templateParams = {
    from_name: data.name,
    email_id: data.email,
    message: data.message,
  };
  emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID).then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
    },
    (error) => {
      console.log('FAILED...', error);
    },
  );
};