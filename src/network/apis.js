import emailjs from '@emailjs/browser';

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;

export const sendContact = async (data) => {
  const templateParams = {
    from_name: data.name,
    email_id: data.email,
    message: data.message,
  };

  try {
    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
    console.log("SUCCESS!", response.status, response.text);
    return response;
  } catch (error) {
    console.error("FAILED...", error);
    throw new Error("Failed to send message. Please try again later.");
  }
};
