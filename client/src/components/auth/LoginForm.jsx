import { cn } from "@/lib";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

import { Mail } from "lucide-react";
import { PasswordInput } from "../general/PasswordInput";
import CardWrapper from "../general/CardWrapper";

export default function LoginForm({ className, ...props }) {
  const content = (
    <form>
      <div className="flex flex-col gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            icon={<Mail className="size-5 select-none text-green-500" />}
            type="email"
            placeholder="m@example.com"
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <a
              href="#"
              className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <PasswordInput id="password" placeholder="******" required />
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
      </div>
      <div className="mt-4 text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link to="/signup" className="underline underline-offset-4">
          Sign up
        </Link>
      </div>
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
