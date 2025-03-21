// ContactForm.tsx
'use client'

import { useState } from 'react';
import { toast } from 'react-toastify';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const schema = yup
  .object({
    name: yup.string().required().label("Name"),
    email: yup.string().required().email().label("Email"),
    phone: yup.string()
      .required("Phone number is required")
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits"),
    message: yup.string().required().label("Message"),
  })
  .required();

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    reset, 
    formState: { errors } 
  } = useForm<FormData>({ 
    resolver: yupResolver(schema) 
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    const loadingToast = toast.loading("Sending message...");
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong');
      }

      toast.update(loadingToast, { 
        render: "Message sent successfully!", 
        type: "success", 
        isLoading: false,
        autoClose: 5000
      });
      reset();
    } catch (error) {
      toast.update(loadingToast, { 
        render: error instanceof Error ? error.message : "Failed to send message. Please try again.", 
        type: "error", 
        isLoading: false,
        autoClose: 5000
      });
      console.error('Contact form error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-xl-9 mb-10">
          <p>We would love to hear from you</p>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input 
              type="text" 
              id="name" 
              {...register("name")} 
              className="form-control" 
              placeholder="Your Name" 
              disabled={isSubmitting}
            />
            {errors.name && <p className="form_error">{errors.name.message}</p>}
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input 
              type="email" 
              id="email" 
              {...register("email")} 
              className="form-control" 
              placeholder="Email Address" 
              disabled={isSubmitting}
            />
            {errors.email && <p className="form_error">{errors.email.message}</p>}
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label htmlFor="phone_number">Phone Number</label>
            <input 
              type="tel" 
              id="phone_number" 
              {...register("phone")} 
              className="form-control" 
              placeholder="Phone Number (10 digits)" 
              disabled={isSubmitting}
            />
            {errors.phone && <p className="form_error">{errors.phone.message}</p>}
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              {...register("message")} 
              id="message" 
              className="form-control" 
              rows={4} 
              placeholder="Write Your Messages"
              disabled={isSubmitting}
            ></textarea>
            {errors.message && <p className="form_error">{errors.message.message}</p>}
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group pt-10 mb-0">
            <button 
              type="submit" 
              className="cr-btn ml-5"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send us a message'}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;