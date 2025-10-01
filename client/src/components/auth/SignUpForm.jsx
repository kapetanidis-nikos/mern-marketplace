import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import IconInput from '../general/IconInput';
import CardWrapper from '../general/CardWrapper';
import { Link } from 'react-router-dom';
import { Mail, LockKeyhole, User } from 'lucide-react';

export default function SignUpForm({ className, ...props }) {
  return (
    <div className={cn('flex flex-col gap-4', className)} {...props}>
      <CardWrapper
        title={'Sign Up'}
        description={'Create an account to get started.'}
        shouldAnimate={true}
      >
        <form>
          <div className="flex flex-col gap-2">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <IconInput icon={User} id="user" type="text" placeholder="John Doe" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <IconInput icon={Mail} id="email" type="email" placeholder="Email Address" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <IconInput icon={LockKeyhole} id="password" type="password" placeholder="********" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <IconInput icon={LockKeyhole} id="password" type="password" placeholder="********" />
            </div>
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{' '}
            <Link to="/login" className="underline underline-offset-4">
              Login
            </Link>
          </div>
        </form>
      </CardWrapper>
    </div>
  );
}
