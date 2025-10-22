import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { toast } from "sonner";

import CardWrapper from "@/components/general/CardWrapper";

import * as z from "zod";
import { cn } from "@/lib";
import { mainApi } from "@/api/api";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

const formSchema = z.object({
  email: z
    .email()
    .min(8, "Email must be at least 8 characters.")
    .max(30, "Email must be at most 30 characters."),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .max(50, "Password must be at most 50 characters."),
});

export default function LoginForm({ className, ...props }) {
  let navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const formFields = [
    {
      name: "email",
      htmlFor: "signup-form-email",
      label: "Email",
      placeholder: "JohnDoe@outlook.com",
      autoComplete: "off",
    },
    {
      name: "password",
      htmlFor: "signup-form-password",
      label: "Password",
      placeholder: "m@password.com",
      autoComplete: "off",
      _type: "password",
      _required: "true",
    },
  ];

  const onSubmit = async (data) => {
    try {
      const response = await mainApi.post("/users/login", data);

      toast(response.data.data.message.title, {
        description: response.data.data.message.description,
      });

      navigate("/home");
    } catch (error) {
      toast(error.message, {
        description: error.message,
      });
    }
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
            Login
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
