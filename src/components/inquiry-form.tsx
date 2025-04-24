import React, { useState, forwardRef, useImperativeHandle } from "react";

interface InquiryFormProps {
  webhookUrl: string;
}

export const InquiryForm = forwardRef<
  { handleSubmit: () => Promise<void> },
  InquiryFormProps
>(({ webhookUrl }, ref) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!email || !message) return;
    
    setIsSubmitting(true);
    
    try {
      // In a real implementation, this would send data to the webhook
      console.log(`Would send to webhook: ${webhookUrl}`, { email, message });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Expose the handleSubmit method to parent components
  useImperativeHandle(ref, () => ({
    handleSubmit
  }));

  if (isSubmitted) {
    return (
      <div className="bg-black/10 backdrop-blur-md p-4 rounded-lg border border-gray-200/20 mb-2">
        <p className="text-sm text-center">Thanks for your message! We'll be in touch shortly.</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex flex-col gap-2 w-full">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          required
          className="bg-black/10 backdrop-blur-md p-2 rounded-md border border-gray-200/20 text-sm"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message"
          required
          rows={3}
          className="bg-black/10 backdrop-blur-md p-2 rounded-md border border-gray-200/20 text-sm"
        />
      </div>
    </div>
  );
}); 