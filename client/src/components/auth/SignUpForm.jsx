import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Label } from '@/components/ui/label';
import IconInput from '../general/IconInput';
import CardWrapper from '../general/CardWrapper';
import { Link } from 'react-router-dom';
import { Mail, LockKeyhole, User } from 'lucide-react';
import { useState } from 'react';
import PasswordStrengthMeter from './PasswordStrengthMeter';

export default function SignUpForm({ className, ...props }) {
  const [password, setPassword] = useState('');

  return (
    <div className={cn('flex flex-col gap-4', className)} {...props}>
      <CardWrapper title={'Create Account'} shouldAnimate={true}>
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
              <IconInput
                icon={LockKeyhole}
                id="password"
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <IconInput icon={LockKeyhole} id="password" type="password" placeholder="********" />
            </div>
            <PasswordStrengthMeter password={password} />
            {/* TODO - Make it resuable */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 cursor-pointer text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200"
              type="submit"
            >
              Sign Up
            </motion.button>
          </div>
        </form>
        {/* TODO - Make it resuable */}
        <div className="px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center">
          <p className="text-sm text-gray-400">
            Already have an account?{' '}
            <Link to={'/login'} className="text-green-400 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </CardWrapper>
    </div>
  );
}
