import { getAnalytics, logEvent, setCurrentScreen } from "@firebase/analytics";
import { firebaseApp } from "./firebase";

const analytics = getAnalytics(firebaseApp);

const AnalyticsService = {
  logPage: (url: string) => {
    setCurrentScreen(analytics, url);
    logEvent(analytics, "page_view");
  },
};

export default AnalyticsService;
