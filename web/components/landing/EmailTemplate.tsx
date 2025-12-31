import { ReactElement } from "react";
import {
  Html,
  Head,
  Body,
  Text,
  Section,
  Container,
  Hr,
} from "@react-email/components";

interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function EmailTemplate({
  name,
  email,
  subject,
  message,
}: EmailTemplateProps): ReactElement {
  return (
    <Html lang="en">
      <Head />
      <Body
        style={{
          fontFamily: "Arial, sans-serif",
          lineHeight: "1.6",
          color: "#333",
        }}
      >
        <Container style={{ maxWidth: "600px", margin: "0 auto" }}>
          <Section style={{ padding: "20px" }}>
            <Text
              style={{
                fontSize: "24px",
                color: "#ff4500",
                marginBottom: "20px",
                fontWeight: "bold",
              }}
            >
              New Contact Form Submission
            </Text>
            <Text style={{ marginBottom: "10px" }}>
              <strong>From:</strong> {name} &lt;{email}&gt;
            </Text>
            <Text style={{ marginBottom: "10px" }}>
              <strong>Subject:</strong> {subject}
            </Text>
            <Text style={{ marginBottom: "10px" }}>
              <strong>Message:</strong>
            </Text>
            <Section
              style={{
                backgroundColor: "#f9f9f9",
                padding: "15px",
                borderRadius: "5px",
                margin: "10px 0",
              }}
            >
              <Text style={{ whiteSpace: "pre-wrap" }}>{message}</Text>
            </Section>
            <Hr
              style={{
                border: "none",
                borderTop: "1px solid #eee",
                margin: "20px 0",
              }}
            />
            <Text style={{ fontSize: "12px", color: "#666" }}>
              This email was sent via your website contact form.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
