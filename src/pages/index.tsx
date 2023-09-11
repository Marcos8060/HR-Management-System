import Login from "../AuthContext/login";
import Admin from "./dashboard/admin";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <>
      <Admin />
    </>
  );
}

Home.getLayout = (page: React.ReactNode) =>(
  <Layout>{page}</Layout>
)
