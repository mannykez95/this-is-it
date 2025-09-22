import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import SmartTray from "@/pages/SmartTray";
import Universe from "@/pages/Universe";
import SmartPapers from "@/pages/SmartPapers";
import SmartCards from "@/pages/SmartCards";
import SeedDrop from "@/pages/SeedDrop";
import FAQ from "@/pages/FAQ";
import AboutUs from "@/pages/AboutUs";
import PressKit from "@/pages/PressKit";
import Checkout from "@/pages/Checkout";
import CheckoutSuccess from "@/pages/CheckoutSuccess";
import PolicyPages from "@/pages/PolicyPages";
import NotFound from "@/pages/not-found";
import ErrorBoundary from "@/components/ErrorBoundary";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/smart-tray" component={SmartTray} />
      <Route path="/smart-papers" component={SmartPapers} />
      <Route path="/cards" component={SmartCards} />
      <Route path="/seed-drop" component={SeedDrop} />
      <Route path="/universe" component={Universe} />
      <Route path="/faq" component={FAQ} />
      <Route path="/about" component={AboutUs} />
      <Route path="/press" component={PressKit} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/checkout/success" component={CheckoutSuccess} />
      <Route path="/policy/:page" component={PolicyPages} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
