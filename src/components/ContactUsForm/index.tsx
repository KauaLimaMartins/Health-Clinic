import { FormEvent, useRef, useState } from "react";
import { toast, ToastContainer, TypeOptions } from "react-toastify";
import emailjs from "@emailjs/browser";

import { Input } from "../Input";
import { RedButton } from "../RedButton";
import { Select } from "../Select";
import { TextArea } from "../Textarea";
import { Form } from "./styles";

export function ContactUsForm() {
  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("default");
  const [message, setMessage] = useState("");

  const notify = (text: string, type: TypeOptions) =>
    toast(text, {
      type: type,
    });

  function sendMail(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setIsLoading(true);

    const templateParams = {
      name,
      email,
      subject,
      message,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          notify("Email enviado com sucesso!", "success");
        },
        (error) => {
          notify("Erro ao enviar o email, tente novamente", "error");
        }
      );

    setIsLoading(false);
  }

  return (
    <>
      <ToastContainer />

      <Form onSubmit={sendMail}>
        <main>
          <div>
            <Input
              placeholder="Nome"
              type="text"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <Input
              placeholder="E-mail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <Select
              placeholder="Assunto"
              value={subject}
              onChange={(e) => setSubject(e.currentTarget.value)}
            >
              <option value="Assunto 1">Assunto 1</option>
              <option value="Assunto 2">Assunto 2</option>
              <option value="Assunto 3">Assunto 3</option>
            </Select>
          </div>

          <TextArea
            placeholder="Mensagem"
            value={message}
            onChange={(e) => setMessage(e.currentTarget.value)}
          />
        </main>

        <RedButton type="submit" disabled={isLoading}>
          Enviar
        </RedButton>
      </Form>
    </>
  );
}
