import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <span className="text-2xl font-semibold">Blog</span>
    </div>
  );
}
