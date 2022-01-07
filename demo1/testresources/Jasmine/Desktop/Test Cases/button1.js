it("demo1/button1", async function() {
	var _data = testcaseData_1641453160949.dataset;
	await kony.automation.playback.waitFor(["demo1/Form1","Button0d688e8f0c1a94c"]);
	kony.automation.button.click(["demo1/Form1","Button0d688e8f0c1a94c"]);
	expect(kony.automation.widget.getWidgetProperty(["demo1/Form1","Label0e973a819789b45"], "text")).toEqual(_data.assert.Label0e973a819789b45);
});