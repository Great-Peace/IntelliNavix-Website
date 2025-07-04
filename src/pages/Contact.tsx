import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbwGMIRLBXE5M1UiBdgfzDNEFNgLtgIrRZq4Y4fOuPfX1qsh4rIsmNld-QX0WVo04kXLlQ/exec', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (data.result === 'success') {
        setSuccess('Thank you! Your message has been sent.');
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setError('Sorry, something went wrong. Please try again later.');
      }
    } catch (err) {
      setError('Sorry, something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>IntelliNavix | Contact</title>
      </Helmet>
      {/* Header Section */}
      <div className="container-fluid bg-primary py-5 mb-5 page-header">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h1 className="display-3 text-white">Contact</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h6 className="section-title bg-white text-center text-primary px-3">Contact Us</h6>
            <h1 className="mb-4">Contact For Any Query</h1>
          </div>
          <div className="row g-4">
            {/* Contact Info */}
            <div className="col-lg-4 col-md-6">
              <h5>Get In Touch</h5>
              <p className="mb-4">We'd like to hear from you. We are just a message away. Why don't you fill the form below?</p>
              <div className="d-flex align-items-center mb-3">
                <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{ width: 50, height: 50 }}>
                  <i className="fa fa-map-marker-alt text-white"></i>
                </div>
                <div className="ms-3">
                  <h5 className="text-primary">Office</h5>
                  <p className="mb-0">IntelliNavix Limited, 272 Bath Street, Glasgow, United Kingdom, G2 4JR</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{ width: 50, height: 50 }}>
                  <i className="fa fa-phone-alt text-white"></i>
                </div>
                <div className="ms-3">
                  <h5 className="text-primary">Mobile</h5>
                  <p className="mb-0">+447873306739, +447873306741</p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{ width: 50, height: 50 }}>
                  <i className="fa fa-envelope-open text-white"></i>
                </div>
                <div className="ms-3">
                  <h5 className="text-primary">Email</h5>
                  <p className="mb-0">info@intellinavix.com</p>
                </div>
              </div>
            </div>
            {/* Google Map */}
            <div className="col-lg-4 col-md-6">
              <iframe
                className="position-relative rounded w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2652.7343805434425!2d-4.272489022710101!3d55.866288773126435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48884428c32850fd%3A0xc709a945f0ee3876!2s272%20Bath%20St%2C%20Glasgow%20G2%204JR%2C%20UK!5e1!3m2!1sen!2srw!4v1747367348973!5m2!1sen!2srw"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="IntelliNavix Office Location"
              ></iframe>
            </div>
            {/* Contact Form */}
            <div className="col-lg-4 col-md-12">
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="name" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="subject" name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} required />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea className="form-control" placeholder="Leave a message here" id="message" name="message" style={{ height: 150 }} value={form.message} onChange={handleChange} required></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit" disabled={loading}>
                      {loading ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                  {success && <div className="alert alert-success mt-3">{success}</div>}
                  {error && <div className="alert alert-danger mt-3">{error}</div>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact; 