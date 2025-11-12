import { Suspense } from "react";
import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "~react-pages";
import { ApplicationLayout } from "./layouts/application-layout";
import { PartnerWithUsModal } from "./components/modal/partner-with-us-modal";

export default function App() {
  const appRoutes = useRoutes(routes);
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ApplicationLayout>
        {/* <PartnerWithUsModal /> */}
        {appRoutes}
      </ApplicationLayout>
    </Suspense>
  );
}
