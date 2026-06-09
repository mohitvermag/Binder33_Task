import Card from '../components/Card';
import { CheckSquare } from 'lucide-react';

export default function Tasks() {
  return (
    <div className="max-w-md mx-auto mt-12 text-center">
      <Card>
        <div className="inline-flex p-3.5 rounded-full bg-orange-50 text-brand-orange mb-4">
          <CheckSquare className="w-8 h-8" />
        </div>
        <h3 className="text-lg font-bold text-text-primary">Tasks Portal</h3>
        <p className="text-sm text-text-secondary mt-2 leading-relaxed">
          Basic placeholder screen for the Tasks navigation item.
        </p>
      </Card>
    </div>
  );
}
