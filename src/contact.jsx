// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './default.css';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


export default function Contact() {
    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        title: '',
        description: '',
        id: Math.floor(Math.random() * 1000000)
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, phone, email, title, description , id} = form;

        console.log('Form submitted:', form);

        Swal.fire({
            title: 'Form Submitted!',
            html: `
            <p>Thank you for contacting us.</p>
            <p>Here is the information you submitted:</p>
            <ul style="text-align: left;">
              <li><strong>Name:</strong> ${name}</li>
              <li><strong>Phone:</strong> ${phone}</li>
              <li><strong>Email:</strong> ${email}</li>
              <li><strong>Title:</strong> ${title}</li>
              <li><strong>Description:</strong> ${description}</li>
              <li><strong>ID:</strong> ${id}</li>
            </ul>`,
            icon: 'success',
            confirmButtonText: 'Close'
        }).then((result) => {
            if (result.isConfirmed) {
                navigate('/');
            }
        });
    };

    return (
        <div className="page-container">
            <div className="page-content">
                <div className="card">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={form.title}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea
                                id="description"
                                name="description"
                                value={form.description}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}