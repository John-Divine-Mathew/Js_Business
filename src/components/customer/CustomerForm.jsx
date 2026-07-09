import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import FormInput from "./FormInput";
import FormButton from "./FormButton";

import { useCustomers } from "../../context/CustomerContext";

export default function CustomerForm() {
  const navigate = useNavigate();

  const { addCustomer } = useCustomers();

  const today = new Date().toISOString().split("T")[0];

  const [form, setForm] = useState({
    name: "",
    location: "",
    phone: "",
    packetPrice: "",
    packets: "",
    initialAmount: "",
    total: 0,
    balance: 0,
    deliveryDate: today,
  });

  const calculate = (data) => {
    const price = Number(data.packetPrice || 0);
    const packets = Number(data.packets || 0);
    const paid = Number(data.initialAmount || 0);

    const total = price * packets;
    const balance = total - paid;

    return {
      ...data,
      total,
      balance,
    };
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) =>
      calculate({
        ...prev,
        [name]: value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.location ||
      !form.phone ||
      !form.packetPrice ||
      !form.packets
    ) {
      toast.error("Please fill all required fields.");
      return;
    }

    addCustomer(form);

    toast.success("Customer saved successfully!");

    navigate("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl bg-white p-6 shadow"
    >
      <FormInput
        label="Customer Name"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Enter customer name"
      />

      <FormInput
        label="Location / Village"
        name="location"
        value={form.location}
        onChange={handleChange}
        placeholder="Enter village"
      />

      <FormInput
        label="Mobile Number"
        name="phone"
        value={form.phone}
        onChange={handleChange}
        placeholder="9876543210"
      />

      <FormInput
        label="Packet Price"
        name="packetPrice"
        type="number"
        value={form.packetPrice}
        onChange={handleChange}
      />

      <FormInput
        label="Number of Packets"
        name="packets"
        type="number"
        value={form.packets}
        onChange={handleChange}
      />

      <FormInput
        label="Initial Amount"
        name="initialAmount"
        type="number"
        value={form.initialAmount}
        onChange={handleChange}
      />

      <FormInput
        label="Total Amount"
        value={form.total}
        readOnly
      />

      <FormInput
        label="Balance Amount"
        value={form.balance}
        readOnly
      />

      <FormInput
        label="Delivery Date"
        type="date"
        name="deliveryDate"
        value={form.deliveryDate}
        onChange={handleChange}
      />

      <FormButton
        title="Save & Move to Dashboard"
      />
    </form>
  );
}