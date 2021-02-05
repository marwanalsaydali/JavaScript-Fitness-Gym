export default () => {
  console.log("This for tabs");
  const tabs = document.querySelector(".tabs");
  // select only the button with role tab
  const tabsButtons = tabs.querySelectorAll('[role="tab"]');
  // select the panels
  const tabsPanels = tabs.querySelectorAll('[role="tabpanel"]');

  function handleTabsClick(e) {
    // hide all tab panels
    tabsPanels.forEach((panel) => (panel.hidden = true));
    // mark all tabs as unselected
    tabsButtons.forEach((tab) => {
      tab.setAttribute("aria-selected", false);
    });
    // mark the clicked tab as selected
    e.currentTarget.setAttribute("aria-selected", true);
    //find the the matched panel and display it
    const id = e.currentTarget.id;
    console.log(id);
    const tabpanel = tabs.querySelector(`[aria-labelledby=${id}]`);
    tabpanel.hidden = false;
  }
  // click the button
  tabsButtons.forEach((button) =>
    button.addEventListener("click", handleTabsClick)
  );
};
