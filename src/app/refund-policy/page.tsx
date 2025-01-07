import React from "react";

const RefundPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-16">
      <h1 className="text-5xl font-bold mb-8 text-center">Refund Policy</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Product Issues</h2>
        <p className="mb-4 text-gray-700">
          Upon receiving your order, please inspect it immediately. Contact us
          at
          <span className="text-blue-600"> support@gs-ecom.com </span>
          if you notice any defects or damages, or if you received an incorrect
          item.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Return Guidelines</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            We offer a 14-day return window for items that are defective or
            damaged. This period begins from the day you receive your order.
          </p>
          <p>To be eligible for a return, your item must:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Be in its original condition</li>
            <li>Include all original tags and packaging</li>
            <li>Be accompanied by the original receipt or proof of purchase</li>
            <li>
              Include clear photos or videos documenting any defects or damage
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Return Process</h2>
        <div className="space-y-4 text-gray-700">
          <p>To initiate a return:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Email us at gs-ecom@gmail.com with your order details</li>
            <li>Wait for our team to review your return request</li>
            <li>
              If approved, you&apos;ll receive a return shipping label and
              instructions
            </li>
            <li>Returns sent without prior approval will not be accepted</li>
          </ol>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Cancellations</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Orders can be cancelled within 1 hour of placement. Due to our rapid
            processing, orders may already be in our shipping pipeline after
            this window.
          </p>
          <p>
            Cancellation requests are subject to a 7% processing fee. Shipping
            costs are non-refundable.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Refund Processing</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            After we receive and inspect your return, we&apos;ll notify you of
            the approval or rejection of your refund.
          </p>
          <p>
            Approved refunds will be processed within 10 business days to your
            original payment method. Please note that your bank or credit card
            company may require additional time to process the refund.
          </p>
          <p className="font-medium">
            A 7% processing fee applies to all refunds. Shipping costs are
            non-refundable.
          </p>
        </div>
      </section>

      <footer className="text-sm text-gray-600 mt-8">
        <p>
          For any questions about our refund policy, please contact our support
          team at support@gs-ecom.com
        </p>
      </footer>
    </div>
  );
};

export default RefundPolicy;
