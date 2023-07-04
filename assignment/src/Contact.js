import React, { useState } from "react";

function Contact() {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {

    // e.preventDefault();

    alert(`Your name is ${data.fullname}. Your number is ${data.phone}`)
  };
  return (
    <div className="mt-3 mb-3">
      <div className="my-5">
        <h1 className="text-center contact-heading">Contact Us</h1>
      </div>

      <div className=" contact_div  contact-form">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit} action="https://formspree.io/f/xqkvznjv"
  method="POST" >
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  // autoComplete="none"
                  required
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Your Name"
                  value={data.fullname}
                  name="fullname"
                  onChange={InputEvent}
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Phone no.
                </label>
                <input
                  type="number"
                  // autoComplete="none"
                  required
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="enter number"
                  value={data.phone}
                  name="phone"
                  onChange={InputEvent}
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  required
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  value={data.email}
                  name="email"
                  onChange={InputEvent}
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  required
                  rows="3"
                  value={data.msg}
                  name="msg"
                  onChange={InputEvent}
                ></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-outline-warning border-dark " type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
