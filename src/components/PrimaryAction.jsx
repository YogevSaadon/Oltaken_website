import { getPrimaryAction } from '../utils/products';

// "Get on Google Play" or "Join the test", whichever applies. Renders nothing if neither is set.
function PrimaryAction({ product }) {
  const action = getPrimaryAction(product);
  if (!action) return null;

  return (
    <a href={action.href} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
      {action.label}
    </a>
  );
}

export default PrimaryAction;
