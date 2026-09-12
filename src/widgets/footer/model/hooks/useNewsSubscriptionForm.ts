import { useState } from "react";
import type { FormEvent } from "react";

export const useNewsSubscriptionForm = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  return { email, setEmail, submitted, handleSubmit };
};