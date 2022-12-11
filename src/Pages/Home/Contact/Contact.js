import React from 'react';
import emailjs from "@emailjs/browser";

const Contact = () => {

	const handleSubmit = (event) => {
    event.preventDefault()
    
    emailjs
      .sendForm(
        "service_3qle5pa",
        "template_no5f7s9",
        event.target,
        "OZ5ijyHjlFVLCLuCG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
		
	}

	return (
    <div className="mt-12">
      <form
        onSubmit={handleSubmit}
        className="max-w-xl border-2 rounded-lg p-8 mx-auto bg-primary "
      >
        <h1 className="text-white font-bold text-3xl text-center">
          Contact Me
        </h1>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text text-white">Your Name</span>
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Type here"
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text text-white">Your Eamil Address</span>
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="Type here"
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Type your message..</span>
          </label>
          <textarea
            name="message"
            required
            className="textarea textarea-bordered h-24"
            placeholder="Write your message"
          ></textarea>
        </div>

        <input
          className="py-2 px-3 mt-6 cursor-pointer border rounded-lg btn-neutral text-white hover:bg-white hover:text-primary transition-all duration-500"
          type="submit"
          value="Send"
        />
      </form>
      {/* <iframe
				title='message'
				className='w-full h-64'
        src="https://form.jotform.com/223424948491059"
        frameborder="0"
      ></iframe> */}
    </div>
  );
};

export default Contact;
