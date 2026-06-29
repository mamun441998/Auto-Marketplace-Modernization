import MockBrowser from "./MocBrowser";
import DashboardInventory from "./DashboardInventory";

export default function DashboardPreview() {
  return (
    <MockBrowser>
      <DashboardInventory />
    </MockBrowser>
  );
}