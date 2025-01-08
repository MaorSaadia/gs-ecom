import Link from "next/link";

const ShippingPolicy = () => {
  const shippingTimes = [
    {
      location: "United States",
      time: "7-14 business days",
    },
    {
      location: "Canada, Europe",
      time: "10-14 business days",
    },
    {
      location: "Australia, New Zealand",
      time: "10-21 business days",
    },
    {
      location: "Mexico, Central America, South America",
      time: "15-30 business days",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-16">
      <h1 className="text-5xl font-bold text-center mb-8">Shipping Policy</h1>

      <div className="space-y-8">
        <section>
          <p className="mb-4">
            GS-Ecom partners with major international shipping companies like
            FedEx, DHL, UPS, and local couriers - allowing us to ship direct to
            your door and proudly offer competitive worldwide shipping rates.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Order Processing</h2>
          <p className="mb-4">
            You will be charged when your order and all payments are subject to
            verification and approval before shipping and may take several days
            to process. To help fight credit card fraud, orders with incorrect
            billing information or requiring additional verification may be
            delayed and/or cancelled.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Shipping Process</h2>
          <p className="mb-4">
            We require between 3-5 business days on average to fulfill your
            order and transport it to our carrier&apos;s sort facility. Some
            items may take longer (up to 10 business days) especially around
            major holidays or due to reasons such as high demand.
          </p>
          <p className="mb-4">
            Shipping time can take anywhere from 10-20 business days depending
            on the shipping option you&apos;ve selected.
          </p>
          <p className="mb-4">
            Once your order has begun processing through our shipping department
            we are unable to make any changes (including address changes). We
            will only ship to the address provided at check-out.
          </p>
          <p className="mb-4">
            We only ship during business days and do not ship on Saturdays,
            Sundays or holidays. Once your order has shipped, you will receive a
            Shipping Confirmation email.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Delivery Times</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 mb-4">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Estimated Shipping Time*
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {shippingTimes.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.location}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 italic">
            *Note: The days listed above are only estimates in business/working
            days and do not include our 2-10 day processing time.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Tracking</h2>
          <p className="mb-4">
            All orders are processed with tracking numbers. You will receive an
            email with the tracking number when your order is dispatched to the
            carrier&apos;s sort facility.
          </p>
          <p className="mb-4">
            For some shipping companies, it can take several days for the
            tracking information to update in the system. If your order was
            placed more than 5 business days ago and there is still no
            information on your tracking number, please contact us.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">International Orders</h2>
          <p className="mb-4">
            International shipments may be subject to import taxes, duties
            and/or customs clearance fees, which are levied once a shipment
            reaches the recipient&lsquo;s country. These fees are the sole
            responsibility of the recipient. GS-Ecom has no control over these
            charges, nor can we predict what they may be.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            Lost/Stolen/Damaged Packages
          </h2>
          <p className="mb-4">
            GS-Ecom is not responsible for lost, stolen or damaged packages. If
            your tracking information states that your package was delivered to
            your address and you have not received it, please report it and/or
            file a claim with your respective shipping carrier.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p>
            If you have any questions about our shipping policy, please contact
            us at:{" "}
            <Link href="/contact-us" className="text-blue-600 hover:underline">
              Contact our support team
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
};

export default ShippingPolicy;
