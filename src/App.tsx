import { Suspense } from "react";
import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "~react-pages";
import { ApplicationLayout } from "./layouts/application-layout";

export default function App() {
  const appRoutes = useRoutes(routes);
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ApplicationLayout>{appRoutes}</ApplicationLayout>
    </Suspense>
  );
}
