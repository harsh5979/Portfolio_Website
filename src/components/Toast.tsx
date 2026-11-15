import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

interface ToastProps {
  message: string;
  visible: boolean;
}

export function Toast({ message, visible }: ToastProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          role="status"
          aria-live="polite"
          className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-surface border border-border text-text-primary text-sm px-4 py-2.5 rounded-xl shadow-xl"
        >
          <CheckCircle size={16} className="text-accent-purple shrink-0" />
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
