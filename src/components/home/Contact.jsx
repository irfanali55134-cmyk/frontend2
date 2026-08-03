import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";



import { useState } from "react";

import api from "../../services/api";







function Contact() {
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
});
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await api.post("/contact", formData);

    alert(res.data.message);

    setFormData({
      name: "",
      email: "",
      message: "",
    });

  } catch (err) {
    alert("Something went wrong");
    console.log(err);
  }
};
  return (
    <section
      id="contact"
      className="py-24 border-t border-[#263353] bg-[#0B1220]"
    >
      <div className="max-w-[1140px] mx-auto px-5">

        <span className="font-code text-[#3ECF8E]">
          // contact
        </span>

        <h2 className="font-display text-4xl font-bold mt-4">
          Let's Build Something
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 mt-14">

          {/* Left */}

          <div>

            <p className="text-[#9AA4BD] leading-8 mb-10">

              Looking for a Full Stack Developer?
              Let's discuss your project.

            </p>

            <div className="space-y-6">

              <div className="flex items-center gap-4">

                <Mail className="text-[#3ECF8E]" />

                <span>irfanali55134@gmail.com</span>

              </div>

              <div className="flex items-center gap-4">

                <Phone className="text-[#3ECF8E]" />

                <span>+91 62033 16841</span>

              </div>

              <div className="flex items-center gap-4">

                <MapPin className="text-[#3ECF8E]" />

                <span>India</span>

              </div>

            </div>

          </div>

          {/* Right */}

          <form onSubmit={handleSubmit} className="space-y-5">

          <input
  type="text"
  name="name"
   placeholder="Your Name"
  value={formData.name}
  onChange={handleChange}
                className="w-full bg-[#16213A] border border-[#263353] rounded-xl p-4 outline-none"

/>

            <input
  type="email"
  name="email"
   placeholder="Your Email"
  value={formData.email}
  onChange={handleChange}
                  className="w-full bg-[#16213A] border border-[#263353] rounded-xl p-4 outline-none"

/>
<textarea
  name="message"
   placeholder="Your Message"
  value={formData.message}
  onChange={handleChange}
                className="w-full bg-[#16213A] border border-[#263353] rounded-xl p-4 outline-none resize-none"

/>

            <button type="submit"
              className="bg-[#3ECF8E] text-black px-7 py-3 rounded-lg flex items-center gap-2 font-semibold hover:bg-[#2A9E6C] duration-300"
            >

              Send Message

              <Send size={18} />

            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;