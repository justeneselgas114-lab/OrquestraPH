import React from 'react';
import { Button, ButtonProps } from './Button';
import { MessageSquareText } from 'lucide-react';

interface WhatsAppButtonProps extends ButtonProps {
  phoneNumber: string;
  message?: string;
  children?: React.ReactNode;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  message = 'Hello! I\'m interested in learning more about Nexus Automate.',
  children,
  ...props
}) => {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button onClick={handleClick} {...props}>
      <MessageSquareText className="w-5 h-5 mr-2" />
      {children || 'WhatsApp Us'}
    </Button>
  );
};
