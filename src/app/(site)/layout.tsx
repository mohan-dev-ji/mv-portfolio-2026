import SiteNav from "@/app/components/v2/SiteNav";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteNav />
      <main>{children}</main>
    </>
  );
}
