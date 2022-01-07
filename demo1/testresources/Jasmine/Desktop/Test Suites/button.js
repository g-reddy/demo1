define(["Test Cases/button1_data","Test Cases/button2_data","Test Cases/button3_data"], function() {
	describe("demo1/button", function() {
		it("demo1/button1", async function() {
			var _data = testcaseData_1641453160949.dataset;
			await kony.automation.playback.waitFor(["demo1/Form1","Button0d688e8f0c1a94c"]);
			kony.automation.button.click(["demo1/Form1","Button0d688e8f0c1a94c"]);
			expect(kony.automation.widget.getWidgetProperty(["demo1/Form1","Label0e973a819789b45"], "text")).toEqual(_data.assert.Label0e973a819789b45);
		});
		
		it("demo1/button2", async function() {
			var _data = testcaseData_1641453246316.dataset;
			await kony.automation.playback.waitFor(["demo1/Form1","Button0e4a36fcaddfd48"]);
			kony.automation.button.click(["demo1/Form1","Button0e4a36fcaddfd48"]);
			expect(kony.automation.widget.getWidgetProperty(["demo1/Form1","Label0cb353593559b48"], "text")).toEqual(_data.assert.Label0cb353593559b48);
		});
		
		it("demo1/button3", async function() {
			var _data = testcaseData_1641453293372.dataset;
			await kony.automation.playback.waitFor(["demo1/Form1","Button0a3b2dbc6055d49"]);
			kony.automation.button.click(["demo1/Form1","Button0a3b2dbc6055d49"]);
			expect(kony.automation.widget.getWidgetProperty(["demo1/Form1","Label0aec01eec02244c"], "text")).toEqual(_data.assert.Label0aec01eec02244c);
		});
	});
});