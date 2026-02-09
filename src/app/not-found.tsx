import NotFound from '@/components/custom-reusable/NotFound';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

export default function RootNotFoundPage() {
  return (
    <NotFound title="Page not found." message="The page you are looking for is not available.">
      <Link href="/" className={buttonVariants({ variant: 'default' })}>
        Go back home
      </Link>
    </NotFound>
  );
}
