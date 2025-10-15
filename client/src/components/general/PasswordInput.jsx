import * as React from "react";

import { Input } from "../ui/input";
import { EyeIcon, EyeOffIcon } from "lucide-react";

function PasswordInput({ className, ...props }, ref) {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <Input
      type={showPassword ? "text" : "password"}
      icon={
        showPassword ? (
          <button type="button" onClick={() => setShowPassword(false)}>
            <EyeIcon className="size-5 text-green-500 hover:cursor-pointer" />
          </button>
        ) : (
          <button type="button" onClick={() => setShowPassword(true)}>
            <EyeOffIcon className="size-5 text-green-500 hover:cursor-pointer" />
          </button>
        )
      }
      className={className}
      {...props}
      ref={ref}
    />
  );
}

export { PasswordInput };
