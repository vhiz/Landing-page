import Loading from "./components/Loading";
import { lazy, Suspense } from "react";

export default function App() {
  const Layout = lazy(() => import("./components/Layout"));
  return (
    <Suspense fallback={<Loading />}>
      <Layout />
    </Suspense>
  );
}
