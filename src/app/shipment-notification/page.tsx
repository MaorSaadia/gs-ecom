"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { Send, Box, Truck, FileCheck } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  size: string;
  color: string;
}

interface FormData {
  orderNumber: string;
  trackingNumber: string;
  customerName: string;
  customerEmail: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  items: OrderItem[];
  orderTotal: number;
}

const OrderShipmentNotification = () => {
  const [formData, setFormData] = useState<FormData>({
    orderNumber: "",
    trackingNumber: "",
    customerName: "",
    customerEmail: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    items: [
      {
        id: "1",
        name: "",
        quantity: 1,
        price: 0,
        size: "",
        color: "",
      },
    ],
    orderTotal: 0,
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name.startsWith("items")) {
      const [, index, field] = name.split(".");
      const updatedItems = [...formData.items];
      updatedItems[Number(index)] = {
        ...updatedItems[Number(index)],
        [field]: value,
      };
      setFormData((prev) => ({ ...prev, items: updatedItems }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const addItem = () => {
    setFormData((prev) => ({
      ...prev,
      items: [
        ...prev.items,
        {
          id: (prev.items.length + 1).toString(),
          name: "",
          quantity: 1,
          price: 0,
          size: "",
          color: "",
        },
      ],
    }));
  };

  const removeItem = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      items: prev.items.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios.post("/api/emails/order-shipped", {
        ...formData,
        shippingAddress: {
          street: formData.street,
          city: formData.city,
          state: formData.state,
          zipCode: formData.zipCode,
          country: formData.country,
        },
      });
      toast.success("Shipment notification sent successfully!");
      setFormData({
        orderNumber: "",
        trackingNumber: "",
        customerName: "",
        customerEmail: "",
        street: "",
        city: "",
        state: "",
        zipCode: "",
        country: "",
        items: [
          {
            id: "1",
            name: "",
            quantity: 1,
            price: 0,
            size: "",
            color: "",
          },
        ],
        orderTotal: 0,
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Send Shipment Notification
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Notify customers about their shipped orders and provide tracking
            information
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Features */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-white shadow-xl border-0 transition-transform hover:scale-105">
              <CardContent className="p-6">
                <Box className="w-8 h-8 text-lime-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Order Details</h3>
                <p className="text-gray-600">
                  Enter order information and customer details
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-xl border-0 transition-transform hover:scale-105">
              <CardContent className="p-6">
                <Truck className="w-8 h-8 text-lime-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Tracking Info</h3>
                <p className="text-gray-600">
                  Provide shipping and tracking details
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-xl border-0 transition-transform hover:scale-105">
              <CardContent className="p-6">
                <FileCheck className="w-8 h-8 text-lime-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Auto Email</h3>
                <p className="text-gray-600">
                  Automatically send formatted email notifications
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Notification Form */}
          <Card className="lg:col-span-2 shadow-xl border-0">
            <CardHeader className="bg-gradient-to-r from-lime-500 to-lime-400 text-white p-6 rounded-t-xl">
              <h2 className="text-2xl font-bold">Order Shipment Details</h2>
              <p className="text-lime-50">
                Fill out the form below to send a shipment notification email
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Order Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Order Number
                    </label>
                    <Input
                      type="text"
                      name="orderNumber"
                      value={formData.orderNumber}
                      onChange={handleChange}
                      className="h-12"
                      placeholder="Order #"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tracking Number
                    </label>
                    <Input
                      type="text"
                      name="trackingNumber"
                      value={formData.trackingNumber}
                      onChange={handleChange}
                      className="h-12"
                      placeholder="Tracking #"
                      required
                    />
                  </div>
                </div>

                {/* Customer Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Customer Name
                    </label>
                    <Input
                      type="text"
                      name="customerName"
                      value={formData.customerName}
                      onChange={handleChange}
                      className="h-12"
                      placeholder="Customer name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Customer Email
                    </label>
                    <Input
                      type="email"
                      name="customerEmail"
                      value={formData.customerEmail}
                      onChange={handleChange}
                      className="h-12"
                      placeholder="customer@email.com"
                      required
                    />
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Shipping Address</h3>
                  <div className="grid grid-cols-1 gap-4">
                    <Input
                      type="text"
                      name="street"
                      value={formData.street}
                      onChange={handleChange}
                      placeholder="Street Address"
                      required
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="City"
                        required
                      />
                      <Input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        placeholder="State"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        placeholder="ZIP Code"
                        required
                      />
                      <Input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        placeholder="Country"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Order Items */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">Order Items</h3>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={addItem}
                      className="h-8"
                    >
                      Add Item
                    </Button>
                  </div>
                  {formData.items.map((item, index) => (
                    <div
                      key={item.id}
                      className="space-y-4 p-4 border rounded-lg"
                    >
                      <div className="grid grid-cols-2 gap-4">
                        <Input
                          type="text"
                          name={`items.${index}.name`}
                          value={item.name}
                          onChange={handleChange}
                          placeholder="Product Name"
                          required
                        />
                        <Input
                          type="number"
                          name={`items.${index}.quantity`}
                          value={item.quantity}
                          onChange={handleChange}
                          placeholder="Quantity"
                          required
                          min="1"
                        />
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <Input
                          type="number"
                          name={`items.${index}.price`}
                          value={item.price}
                          onChange={handleChange}
                          placeholder="Price"
                          required
                          step="0.01"
                          min="0"
                        />
                        <Input
                          type="text"
                          name={`items.${index}.size`}
                          value={item.size}
                          onChange={handleChange}
                          placeholder="Size"
                        />
                        <Input
                          type="text"
                          name={`items.${index}.color`}
                          value={item.color}
                          onChange={handleChange}
                          placeholder="Color"
                        />
                      </div>
                      {formData.items.length > 1 && (
                        <Button
                          type="button"
                          variant="destructive"
                          onClick={() => removeItem(index)}
                          className="h-8"
                        >
                          Remove Item
                        </Button>
                      )}
                    </div>
                  ))}
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-lime-500 hover:bg-lime-600 text-white"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Notification
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OrderShipmentNotification;
