// emails/OrderShipped.tsx
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
      <Head />
      <Preview>Your order has been shipped</Preview>
      <Body style={main}>
        <Container style={container}>
          <Text style={title}>Your order has been shipped.</Text>
          <Text style={paragraph}>
            You can see the items that have been sent to you and track your
            shipment below. Thanks for shopping with us.
          </Text>

          <Section style={orderInfo}>
            <Text>Placed on {format(new Date(), "MMM dd, yyyy")}</Text>
          </Section>

          <Section style={shippingDetails}>
            <Text style={sectionTitle}>Shipping to</Text>
            <Text>{customerName}</Text>
            <Text>{shippingAddress?.street}</Text>
            <Text>
              {shippingAddress?.city}, {shippingAddress?.state}{" "}
              {shippingAddress?.zipCode}
            </Text>
            <Text>{shippingAddress?.country}</Text>
            <Text>{customerEmail}</Text>
          </Section>

          <Section style={itemsSection}>
            <Text style={sectionTitle}>Shipped Items</Text>
            {items?.map((item) => (
              <Row key={item.id} style={itemRow}>
                <Column style={imageColumn}>
                  <Img
                    src="/products/mistify/5.jpeg"
                    width="80"
                    height="80"
                    alt={item.name}
                  />
                </Column>
                <Column style={detailsColumn}>
                  <Text style={productName}>{item.name}</Text>
                  {item.size && <Text>Size: {item.size}</Text>}
                  {item.color && <Text>Color: {item.color}</Text>}
                  {item.type && <Text>Type: {item.type}</Text>}
                  <Text>Price: ${item?.price}</Text>
                  <Text>Qty: {item.quantity}</Text>
                </Column>
                <Column style={priceColumn}>
                  <Text>${item?.price * item?.quantity}</Text>
                </Column>
              </Row>
            ))}
          </Section>

          <Section style={tracking}>
            <Text>Tracking Number #: {trackingNumber}</Text>
            <Link
              href={`https://global.cainiao.com/newDetail.htm?mailNoList=${trackingNumber}`}
              style={trackButton}
            >
              Track Shipment
            </Link>
          </Section>

          <Hr style={divider} />

          <Text style={footer}>Need Assistance? Contact us.</Text>
          <Text style={footer}>
            We&apos;ll do everything we can to make sure you have a great
            experience with us.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
};

// const header = {
//   fontSize: "24px",
//   fontWeight: "bold" as const,
//   textAlign: "center" as const,
//   margin: "30px 0",
// };

const title = {
  fontSize: "20px",
  fontWeight: "bold" as const,
  margin: "30px 0 15px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const orderInfo = {
  margin: "30px 0",
};

const sectionTitle = {
  fontSize: "16px",
  fontWeight: "bold" as const,
  margin: "15px 0",
};

const shippingDetails = {
  margin: "30px 0",
};

const itemsSection = {
  margin: "30px 0",
};

const itemRow = {
  margin: "15px 0",
};

const imageColumn = {
  width: "80px",
};

const detailsColumn = {
  paddingLeft: "15px",
};

const priceColumn = {
  width: "100px",
  textAlign: "right" as const,
};

const productName = {
  fontSize: "16px",
  fontWeight: "bold" as const,
};

const tracking = {
  margin: "30px 0",
};

const trackButton = {
  backgroundColor: "#000000",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
  marginTop: "10px",
};

const divider = {
  borderTop: "1px solid #e5e5e5",
  margin: "30px 0",
};

const footer = {
  fontSize: "14px",
  color: "#666666",
  margin: "5px 0",
};
