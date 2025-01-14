import {
  Body,
  Container,
  Column,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { format } from "date-fns";

interface OrderShippedEmailProps {
  orderNumber: string;
  trackingNumber: string;
  customerName: string;
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  customerEmail: string;
  items: Array<{
    id: string;
    name: string;
    quantity: number;
    price: number;
    type?: string;
    size?: string;
    color?: string;
    imageUrl?: string;
  }>;
  orderTotal: number;
}

export default function OrderShippedEmail({
  trackingNumber,
  customerName,
  shippingAddress,
  customerEmail,
  items,
}: OrderShippedEmailProps) {
  return (
    <Html>
      <Head>
        <style>
          {`
            @media only screen and (max-width: 600px) {
              .container {
                width: 100% !important;
                padding: 20px 10px !important;
              }
              .content {
                padding: 0 !important;
              }
              .item-row {
                display: block !important;
                margin-bottom: 20px !important;
              }
              .item-image {
                margin: 0 auto 10px !important;
                display: block !important;
              }
              .item-details {
                padding: 0 !important;
                width: 100% !important;
              }
              .item-price {
                width: 100% !important;
                text-align: left !important;
                margin-top: 10px !important;
              }
              .button {
                width: 100% !important;
                text-align: center !important;
                box-sizing: border-box !important;
              }
            }
          `}
        </style>
      </Head>
      <Preview>🎉 Great news! Your order is on its way to you!</Preview>
      <Body style={main}>
        <Container style={container} className="container">
          <Section style={logoContainer}>
            <Img
              src="https://static.wixstatic.com/media/f33a90_497c42d0d473449ca89f2511557211f2~mv2.png"
              width="100"
              height="100"
              alt="Company Logo"
              style={logo}
            />
          </Section>

          <Section style={content} className="content">
            <Text style={title}>🚚 Your order is on its way!</Text>
            <Text style={paragraph}>
              Hi {customerName},
              <br />
              <br />
              Fantastic news! Your package has been carefully packed and is now
              on its journey to you. We&apos;re just as excited as you are about
              your new items!
            </Text>

            <Section style={orderInfo}>
              <Text style={highlightText}>
                Order Date: {format(new Date(), "MMM dd, yyyy")}
              </Text>
            </Section>

            <Section style={shippingDetails}>
              <Text style={sectionTitle}>📍 Delivery Address</Text>
              <div style={addressBox}>
                <Text style={addressText}>{customerName}</Text>
                <Text style={addressText}>{shippingAddress?.street}</Text>
                <Text style={addressText}>
                  {shippingAddress?.city}, {shippingAddress?.state}{" "}
                  {shippingAddress?.zipCode}
                </Text>
                <Text style={addressText}>{shippingAddress?.country}</Text>
                <Text style={addressText}>{customerEmail}</Text>
              </div>
            </Section>

            <Section style={itemsSection}>
              <Text style={sectionTitle}>📦 Your Items</Text>
              {items?.map((item) => (
                <Row key={item.id} style={itemRow} className="item-row">
                  <Column style={imageColumn} className="item-image">
                    <Img
                      src={
                        item.imageUrl ||
                        `https://static.wixstatic.com/media/f33a90_7daefdbee41d43aa84c184ef20aabdeb~mv2.jpeg`
                      }
                      width="80"
                      height="80"
                      alt={item.name}
                      style={productImage}
                    />
                  </Column>
                  <Column style={detailsColumn} className="item-details">
                    <Text style={productName}>{item.name}</Text>
                    {item.size && (
                      <Text style={itemDetail}>Size: {item.size}</Text>
                    )}
                    {item.color && (
                      <Text style={itemDetail}>Color: {item.color}</Text>
                    )}
                    {item.type && (
                      <Text style={itemDetail}>Type: {item.type}</Text>
                    )}
                    <Text style={itemDetail}>Price: ${item?.price}</Text>
                    <Text style={itemDetail}>Qty: {item.quantity}</Text>
                  </Column>
                  <Column style={priceColumn} className="item-price">
                    <Text style={totalPrice}>${item?.price}</Text>
                  </Column>
                </Row>
              ))}
            </Section>

            <Section style={tracking}>
              <Text style={trackingTitle}>📱 Track Your Package</Text>
              <Text style={trackingNumberStyle}>
                Tracking Number: #{trackingNumber}
              </Text>
              <Link
                href={`https://global.cainiao.com/newDetail.htm?mailNoList=${trackingNumber}`}
                style={trackButton}
                className="button"
              >
                Track Your Shipment
              </Link>
            </Section>

            <Hr style={divider} />

            <Section style={supportSection}>
              <Text style={supportTitle}>We&apos;re Here to Help! 💫</Text>
              <Text style={supportText}>
                Have questions? Our friendly support team is just a click away.
              </Text>
              <Link
                href="https://www.gs-ecom.com/contact-us"
                style={supportLink}
                className="button"
              >
                Contact Support
              </Link>
            </Section>

            <Text style={footer}>
              Thank you for choosing us! We hope you love your new items. 🌟
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#f7f7f7",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  padding: "10px",
};

const container = {
  margin: "0 auto",
  padding: "40px 20px",
  maxWidth: "580px",
  width: "100%",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
};

const content = {
  padding: "0 20px",
};

const logoContainer = {
  textAlign: "center" as const,
  marginBottom: "30px",
};

const logo = {
  margin: "0 auto",
  maxWidth: "100%",
  height: "auto",
};

const title = {
  fontSize: "24px",
  fontWeight: "bold" as const,
  margin: "30px 0 15px",
  color: "#1a1a1a",
  textAlign: "center" as const,
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#4a4a4a",
  margin: "0 0 20px",
};

const orderInfo = {
  margin: "30px 0",
  backgroundColor: "#f8f9fa",
  padding: "15px",
  borderRadius: "6px",
};

const highlightText = {
  fontSize: "16px",
  color: "#2b2b2b",
  margin: "0",
};

const sectionTitle = {
  fontSize: "18px",
  fontWeight: "bold" as const,
  margin: "0 0 15px",
  color: "#1a1a1a",
};

const addressBox = {
  backgroundColor: "#f8f9fa",
  padding: "15px",
  borderRadius: "6px",
};

const addressText = {
  margin: "5px 0",
  color: "#4a4a4a",
  fontSize: "14px",
  lineHeight: "20px",
};

const shippingDetails = {
  margin: "30px 0",
};

const itemsSection = {
  margin: "30px 0",
};

const itemRow = {
  margin: "20px 0",
  backgroundColor: "#f8f9fa",
  padding: "15px",
  borderRadius: "6px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const imageColumn = {
  width: "80px",
  flexShrink: 0,
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
};

const productImage = {
  borderRadius: "4px",
  width: "100%",
  height: "auto",
  margin: "auto",
};

const detailsColumn = {
  paddingLeft: "20px",
  flex: "1",
  textAlign: "center" as const,
};

const priceColumn = {
  width: "100px",
  textAlign: "center" as const,
  flexShrink: 0,
};

const productName = {
  fontSize: "16px",
  fontWeight: "bold" as const,
  color: "#1a1a1a",
  margin: "0 0 8px",
  marginBottom: "10px",
};

const itemDetail = {
  fontSize: "14px",
  color: "#4a4a4a",
  margin: "4px 0",
  lineHeight: "20px",
};

const totalPrice = {
  fontSize: "16px",
  fontWeight: "bold" as const,
  color: "#1a1a1a",
};

const tracking = {
  margin: "30px 0",
  textAlign: "center" as const,
};

const trackingTitle = {
  fontSize: "18px",
  fontWeight: "bold" as const,
  margin: "0 0 10px",
  color: "#1a1a1a",
};

const trackingNumberStyle = {
  fontSize: "16px",
  color: "#4a4a4a",
  margin: "0 0 15px",
};

const trackButton = {
  backgroundColor: "#0066cc",
  borderRadius: "6px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  padding: "12px 24px",
  margin: "10px 0",
  maxWidth: "100%",
  boxSizing: "border-box" as const,
};

const divider = {
  borderTop: "1px solid #e5e5e5",
  margin: "30px 0",
};

const supportSection = {
  textAlign: "center" as const,
  margin: "30px 0",
};

const supportTitle = {
  fontSize: "18px",
  fontWeight: "bold" as const,
  color: "#1a1a1a",
  margin: "0 0 10px",
};

const supportText = {
  fontSize: "16px",
  color: "#4a4a4a",
  margin: "0 0 15px",
};

const supportLink = {
  color: "#0066cc",
  textDecoration: "none",
  fontSize: "16px",
  display: "inline-block",
};

const footer = {
  fontSize: "14px",
  color: "#666666",
  margin: "20px 0 0",
  textAlign: "center" as const,
  lineHeight: "20px",
};
