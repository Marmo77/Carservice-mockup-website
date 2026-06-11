import { Skeleton } from "@/components/ui/skeleton";

export default function PageSkeleton() {
  return (
    <div className="flex-1 w-full flex flex-col py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 animate-in fade-in duration-500">
      <div className="space-y-6">
        <Skeleton className="h-16 w-3/4 max-w-2xl bg-zinc-100" />
        <Skeleton className="h-6 w-full max-w-3xl bg-zinc-100" />
        <Skeleton className="h-6 w-5/6 max-w-2xl bg-zinc-100" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        <div className="space-y-4">
          <Skeleton className="h-64 w-full rounded-2xl bg-zinc-100" />
          <Skeleton className="h-8 w-3/4 bg-zinc-100" />
          <Skeleton className="h-20 w-full bg-zinc-100" />
        </div>
        <div className="space-y-4 hidden md:block">
          <Skeleton className="h-64 w-full rounded-2xl bg-zinc-100" />
          <Skeleton className="h-8 w-3/4 bg-zinc-100" />
          <Skeleton className="h-20 w-full bg-zinc-100" />
        </div>
        <div className="space-y-4 hidden lg:block">
          <Skeleton className="h-64 w-full rounded-2xl bg-zinc-100" />
          <Skeleton className="h-8 w-3/4 bg-zinc-100" />
          <Skeleton className="h-20 w-full bg-zinc-100" />
        </div>
      </div>
    </div>
  );
}
