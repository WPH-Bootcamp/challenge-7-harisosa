import React, { useEffect, useState } from "react";
import "./ContactFormSection.css";
import Checkbox from "../../ui/Checkbox";
import type { ContactFormData, ContactFormResponse, FormField } from "../../../types";
import Input from "../../ui/Input";
import { useModal } from "../../../shared/hooks";
import fetchJson from "../../../api/fetchJson";

const ContactFormSection : React.FC = () => {
    const { openModal } = useModal();
    const [formField, setFormField] = useState<FormField<ContactFormData>[]>([]);
    const [serviceList, setServiceList] = useState<string[]>([]);

    const getData = async () => {
    const data = await fetchJson<ContactFormResponse>('/data/contact-form.json');
    setFormField(data.fields);
    setServiceList(data.services);
  }

  useEffect(() => {
    getData();
  }, [])

  const [form, setForm] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [services, setServices] = useState<string[]>([]);
  const setField = (key:string, value: string) => setForm((p) => ({ ...p, [key]: value }));

  const toggleService = (label: string) => {
    setServices((p) => {
      const exists = p.includes(label);
      return exists ? p.filter((x) => x !== label) : [...p, label];
    });
  };

  const handleSend = () => {
    openModal("modal-success");
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Ready to Start? Let’s Talk.</h2>
        <p className="contact-subtitle">Tell us what you need, and we’ll get back to you soon.</p>

        <form className="contact-form" onSubmit={handleSend}>
          {formField.map((field) => (
            <Input
              key={field.name}
              label={field.label}
              type={field.type}
              placeholder={field.placeholder}
              value={form[field.name]}
              onChange={(value) => setField(field.name, value as string)}
            />
          ))}

          <div className="field">
            <label className="label label-services">Services</label>

            <div className="services-grid">
              {serviceList.map((label: string) => (
                <Checkbox
                  key={label}
                  label={label}
                  checked={services.includes(label)}
                  onChange={() => toggleService(label)}
                />
              ))}
            </div>
          </div>
          <button type="submit" className="send-btn">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactFormSection;