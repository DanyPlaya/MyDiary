import { Layout } from "@/shared/ui";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";

export const baseLayout = (
  <Layout headerSlot={<Header />} bottomSlot={<Footer />} />
);
