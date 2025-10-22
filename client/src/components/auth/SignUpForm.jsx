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
import { cn } from "@/lib/utils";
import { mainApi } from "@/api/api";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

const formSchema = z
  .object({
    name: z
      .string()
      .min(5, "Bug name must be at least 5 characters.")
      .max(15, "Bug name must be at most 15 characters."),
    email: z
      .email()
      .min(1, "Email is required")
      .max(50, "Email must be at most 50 characters."),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters.")
      .max(50, "Password must be at most 50 characters."),
    passwordConfirm: z
      .string()
      .min(8, "Password must be at least 8 characters."),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords don't match",
    path: ["passwordConfirm"],
  });

export default function SignUpForm({ className, ...props }) {
  let navigate = useNavigate();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
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
    {
      name: "password",
      htmlFor: "signup-form-password",
      label: "Password",
      placeholder: "********",
      autoComplete: "off",
      _required: "true",
    },
    {
      name: "passwordConfirm",
      htmlFor: "signup-form-passwordConfirm",
      label: "Confirm Password",
      placeholder: "********",
      autoComplete: "off",
      _type: "password",
      _required: "true",
    },
  ];

  const onSubmit = async (data) => {
    try {
      const response = await mainApi.post("/users/signup", data);

      toast(response.data.data.message.title, {
        description: response.data.data.message.description,
      });

      navigate("/login");
    } catch (error) {
      toast(error.message, {
        description: error.message,
      });
    }
  };

  const content = (
    <form id="signup-form" onSubmit={form.handleSubmit(onSubmit)}>
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
          Already have an account?{" "}
          <Link to="/login" className="underline underline-offset-4">
            Login
          </Link>
        </div>
      </FieldGroup>
    </form>
  );

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <CardWrapper
        title={"Sign Up"}
        description={"Create an account to get started"}
        content={content}
      />
    </div>
  );
}
