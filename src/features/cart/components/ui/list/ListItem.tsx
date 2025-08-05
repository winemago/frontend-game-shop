type ListItemProps = {
  name: string;
  price: number;
};

export default function ListItem({ name, price }: ListItemProps) {
  return (
    <div className="flex justify-between text-sm text-gray-800">
      <span className="truncate">{name}</span>
      <span>${price.toFixed(2)}</span>
    </div>
  );
}
