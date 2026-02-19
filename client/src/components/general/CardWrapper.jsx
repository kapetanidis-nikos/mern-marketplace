import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

export default function CardWrapper({ title, description, shouldAnimate, children }) {
  const content = (
    <Card className="bg-gray-800/50">
      <CardHeader>
        <CardTitle className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );

  return (
    <>
      {shouldAnimate ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md w-full backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
        >
          {content}
        </motion.div>
      ) : (
        <div className="max-w-md w-full backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden">
          {content}
        </div>
      )}
    </>
  );
}
