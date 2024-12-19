import React from "react";

function Contact() {
  return (
    <div>
      <article className="contact text-start" data-page="contact">
        <header>
          <h2 className="h2 article-title">Contact</h2>
        </header>
        <section className="mapbox w-full p-5" data-mapbox="">
          <figure>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27925.012599491987!2d78.88134037585768!3d28.96879848086415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390a5899e0778f6d%3A0x1d7f0723409a8a02!2sNiwar%20Khas%2C%20Uttar%20Pradesh%20244402!5e0!3m2!1sen!2sin!4v1716296355427!5m2!1sen!2sin"
              width={800}
              height={400}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl bg-stone-800"
            />
          </figure>
        </section>

        <section className="contact-form">
          <h3 className="h3 form-title">Contact Form</h3>
          <form
            action="parit9389669826@gmail.com"
            className="form"
            data-form=""
          >
            <div className="flex gap-5">
              <input
                type="text"
                name="fullname"
                className="h-12 rounded-xl border-2 border-stone-800 p-3 "
                placeholder="Full name"
                required=""
                data-form-input=""
              />
              <input
                type="email"
                name="email"
                className="h-12 rounded-xl border-2 border-stone-800 p-3"
                placeholder="Email address"
                required=""
                data-form-input=""
              />
            </div>
            <textarea
              name="message"
              className="h-32 mt-5 rounded-xl border-2 border-stone-800 p-3"
              placeholder="Your Message"
              required=""
              data-form-input=""
              defaultValue={""}
            />
            <button
              className="flex items-center gap-2 mt-5 rounded-lg border-2 border-stone-800 p-3 bg-stone-800   justify-self-end"
              type="submit"
              disabled=""
              data-form-btn=""
            >
              <ion-icon name="paper-plane" />
              <span>Send Message</span>
            </button>
          </form>
        </section>
      </article>
    </div>
  );
}

export default Contact;
