it("demo1/button2", async function() {
	var _data = testcaseData_1641453246316.dataset;
	await kony.automation.playback.waitFor(["demo1/Form1","Button0e4a36fcaddfd48"]);
	kony.automation.button.click(["demo1/Form1","Button0e4a36fcaddfd48"]);
	expect(kony.automation.widget.getWidgetProperty(["demo1/Form1","Label0cb353593559b48"], "text")).toEqual(_data.assert.Label0cb353593559b48);
});