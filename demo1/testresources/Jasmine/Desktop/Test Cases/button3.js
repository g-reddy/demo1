it("demo1/button3", async function() {
	var _data = testcaseData_1641453293372.dataset;
	await kony.automation.playback.waitFor(["demo1/Form1","Button0a3b2dbc6055d49"]);
	kony.automation.button.click(["demo1/Form1","Button0a3b2dbc6055d49"]);
	expect(kony.automation.widget.getWidgetProperty(["demo1/Form1","Label0aec01eec02244c"], "text")).toEqual(_data.assert.Label0aec01eec02244c);
});