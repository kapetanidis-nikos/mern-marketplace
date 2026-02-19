import { cn } from '@/lib';
import { Button } from '@/components/ui/button';
import CardWrapper from '../general/CardWrapper';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';
import IconInput from '../general/IconInput';
import { Mail, LockKeyhole } from 'lucide-react';

export default function LoginForm({ className, ...props }) {
  return (
    <div className={cn('flex flex-col gap-4', className)} {...props}>
      <CardWrapper
        title={'Welcome Back'}
        description={'Login in to your Account in order to use our service.'}
        shouldAnimate={true}
      >
        <form>
          <div className="flex flex-col gap-2">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <IconInput icon={Mail} id="email" type="email" placeholder="Email Address" />
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
              <IconInput icon={LockKeyhole} id="password" type="password" placeholder="********" />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{' '}
            <Link to="/signup" className="underline underline-offset-4">
              Sign up
            </Link>
          </div>
        </form>
      </CardWrapper>
    </div>
  );
}
