// app/components/ProductSpecs.tsx
import { productData } from '../data/product';

export const ProductSpecs = () => {
  return (
    <div className="border-t pt-6 mt-6">
      <h3 className="font-bold mb-4">製品仕様</h3>
      <table className="w-full text-sm">
        <tbody>
          {productData.specs.map((spec, index) => (
            <tr key={index} className="border-b">
              <th className="py-2 text-left text-slate-500 w-1/3">{spec.label}</th>
              <td className="py-2 text-slate-900">{spec.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};