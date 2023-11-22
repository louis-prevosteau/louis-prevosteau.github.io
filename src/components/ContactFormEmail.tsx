import { Body, Container, Head, Heading, Hr, Html, Preview, Section, Tailwind, Text } from '@react-email/components';
import React from 'react';

type ContactFormEmailProps = {
    message: string;
    senderEmail: string;
};

const ContactFormEmail = ({ message, senderEmail }: ContactFormEmailProps) => {
    return (
        <Html>
            <Head />
            <Preview>Vous avez reçu un nouveau message depuis votre portfolio</Preview>
            <Tailwind>
                <Body className="bg-gray-100 text-black">
                    <Container>
                        <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
                        <Heading className="leading-tight">
                            Vous avez reçu un nouveau message de la part de {senderEmail}
                        </Heading>
                        <Text>{message}</Text>
                        <Hr />
                        <Text>Expéditeur: {senderEmail}</Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default ContactFormEmail;