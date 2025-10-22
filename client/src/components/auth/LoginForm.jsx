import { cn } from "@/lib";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

import { Mail } from "lucide-react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { PasswordInput } from "../general/PasswordInput";
import CardWrapper from "../general/CardWrapper";

const formSchema = z.object({
  name: z
    .string()
    .min(5, "Bug name must be at least 5 characters.")
    .max(15, "Bug name must be at most 15 characters."),
  email: z
    .string()
    .min(8, "Email must be at least 8 characters.")
    .max(30, "Email must be at most 30 characters."),
});

export default function LoginForm({ className, ...props }) {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const formFields = [
    {
      name: "name",
      htmlFor: "signup-form-name",
      label: "Name",
      placeholder: "John Doe",
      autoComplete: "off",
    },
    {
      name: "email",
      htmlFor: "signup-form-email",
      label: "Email",
      placeholder: "m@email.com",
      autoComplete: "off",
      _type: "email",
      _required: "true",
    },
  ];

  const onSubmit = async (data) => {
    const response = await mainApi.post("/users/login", data);
  };

  const content = (
    <form id="login-form" onSubmit={form.handleSubmit(onSubmit)}>
      <FieldGroup>
        {formFields.map((item) => (
          <Controller
            name={item.name}
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <div className="grid gap-2">
                  <FieldLabel htmlFor={item.htmlFor}>{item.label}</FieldLabel>
                  <Input
                    {...field}
                    id={item.htmlFor}
                    aria-invalid={fieldState.invalid}
                    placeholder={item.placeholder}
                    autoComplete={item.autoComplete}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </div>
              </Field>
            )}
          />
        ))}
        <div className="flex flex-col gap-6">
          <Button type="submit" className="w-full">
            Sign Up
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="underline underline-offset-4">
            Sign Up
          </Link>
        </div>
      </FieldGroup>
    </form>
  );

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <CardWrapper
        title={"Login"}
        description={"Enter your email below to login to your account"}
        content={content}
      />
    </div>
  );
}
