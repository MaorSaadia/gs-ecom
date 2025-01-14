import React from "react";
import { NextResponse } from "next/server";
import { render } from "@react-email/render";

import { mailOptions, transporter } from "@/app/config/nodemailer";
import OrderShippedEmail from "@/emails/OrderShippedEmail";

interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  size?: string;
  color?: string;
  type?: string;
}

interface ShippingAddress {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

interface OrderShippedData {
  orderNumber: string;
  trackingNumber: string;
  customerName: string;
  customerEmail: string;
  shippingAddress: ShippingAddress;
  items: OrderItem[];
  orderTotal: number;
}

export async function POST(request: Request) {
  const {
    orderNumber,
    trackingNumber,
    customerName,
    customerEmail,
    shippingAddress,
    items,
    orderTotal,
  }: OrderShippedData = await request.json();

  try {
    // Validate required fields
    if (!orderNumber || !trackingNumber || !customerEmail || !items.length) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(customerEmail)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Render the email HTML using the OrderShippedEmail component
    const emailHtml = await render(
      React.createElement(OrderShippedEmail, {
        orderNumber,
        trackingNumber,
        customerName,
        shippingAddress,
        customerEmail,
        items,
        orderTotal,
      })
    );

    // Send the email
    await transporter.sendMail({
      ...mailOptions,
      to: customerEmail,
      subject: `Your Order ${orderNumber} Has Been Shipped`,
      html: emailHtml,
      replyTo: mailOptions.from,
      headers: {
        "X-Order-Number": orderNumber,
        "X-Tracking-Number": trackingNumber,
      },
    });

    // Log successful email send (optional)
    console.log(`Shipment notification sent for order ${orderNumber}`);

    // Return success response
    return NextResponse.json(
      {
        message: "Order shipment notification sent successfully",
        orderNumber,
        trackingNumber,
      },
      { status: 200 }
    );
  } catch (error) {
    // Log the error for debugging
    console.error("Error sending order shipment email:", error);

    // Return error response
    return NextResponse.json(
      {
        error: "Failed to send order shipment notification",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

// Optional: GET method to verify the API endpoint is working
export async function GET() {
  return NextResponse.json(
    { message: "Order shipment notification endpoint is working" },
    { status: 200 }
  );
}
