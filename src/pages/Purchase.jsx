import Card from '../components/Card';
import { ShoppingBag } from 'lucide-react';

export default function Purchase() {
  return (
    <div className="max-w-md mx-auto mt-12 text-center">
      <Card>
        <div className="inline-flex p-3.5 rounded-full bg-orange-50 text-brand-orange mb-4">
          <ShoppingBag className="w-8 h-8" />
        </div>
        <h3 className="text-lg font-bold text-text-primary">Billing & Purchase</h3>
        <p className="text-sm text-text-secondary mt-2 leading-relaxed">
          Basic placeholder screen for the Purchase navigation item.
        </p>
      </Card>
    </div>
  );
}
