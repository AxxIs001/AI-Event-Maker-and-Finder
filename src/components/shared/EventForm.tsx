"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const EventForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    location: "",
    description: "",
    image: null,
    audience: "all",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="p-4 max-w-2xl mx-auto border rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-bold mb-4">Event Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input type="text" name="name" placeholder="Event Name" value={formData.name} onChange={handleChange} required />
        <Input type="date" name="date" value={formData.date} onChange={handleChange} required />
        <Input type="time" name="time" value={formData.time} onChange={handleChange} required />
        <Input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-md"
        />
        <Input type="file" name="image" accept="image/*" onChange={handleFileChange} />
        <select
          name="audience"
          value={formData.audience}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        >
          <option value="all">All Students</option>
          <option value="freshmen">Freshmen</option>
          <option value="seniors">Seniors</option>
        </select>
        <Button type="submit">Submit Event</Button>
      </form>
    </div>
  );
};

export default EventForm;
