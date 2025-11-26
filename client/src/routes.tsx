import { Switch, Route } from "wouter";
import Landing from "@/pages/landing";
import Mission from "@/pages/mission";
import Solution from "@/pages/solution";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

// Import the layout and all the dashboard pages
import DashboardLayout from "@/pages/dashboard";
import Overview from "@/pages/dashboard/overview";
import Analytics from "@/pages/dashboard/analytics";
import Content from "@/pages/dashboard/content";
import Manage from "@/pages/dashboard/manage";
import Resources from "@/pages/dashboard/Resources";
import Account from "@/pages/dashboard/account";

export default function Routes() {
  return (
    <Switch>
      {/* Main pages */}
      <Route path="/" component={Landing} />
      <Route path="/mission" component={Mission} />
      <Route path="/solution" component={Solution} />
      <Route path="/contact" component={Contact} />

      {/* Dashboard pages using the new layout */}
      <Route path="/dashboard/overview">
        <DashboardLayout><Overview /></DashboardLayout>
      </Route>
      <Route path="/dashboard/analytics">
        <DashboardLayout><Analytics /></DashboardLayout>
      </Route>
      <Route path="/dashboard/content">
        <DashboardLayout><Content /></DashboardLayout>
      </Route>
      <Route path="/dashboard/manage">
        <DashboardLayout><Manage /></DashboardLayout>
      </Route>
      <Route path="/dashboard/resources">
        <DashboardLayout><Resources /></DashboardLayout>
      </Route>
      <Route path="/dashboard/account">
        <DashboardLayout><Account /></DashboardLayout>
      </Route>
      {/* Default dashboard route */}
      <Route path="/dashboard">
        <DashboardLayout><Overview /></DashboardLayout>
      </Route>

      {/* 404 Page */}
      <Route component={NotFound} />
    </Switch>
  );
}
