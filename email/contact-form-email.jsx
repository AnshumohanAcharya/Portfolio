import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

export default function ContactFormEmail({
    firstname,
    lastname,
    phoneno,
    service,
  message,
  senderEmail,
}) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                You received the following message from the contact form
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender's details: </Text>
              <Text>Firstname : {firstname}</Text>
              <Hr />
              <Text>Lastname : {lastname}</Text>
              <Hr />
              <Text>Email: {senderEmail}</Text>
              <Hr />
              <Text>Service Required: {service}</Text>
              <Hr />
              <Text>Phone number: {phoneno}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
