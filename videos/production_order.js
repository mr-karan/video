import { Selector } from 'testcafe';
import f from '../lib';


fixture("Bill of Materials")
    .page ("http://gadgets.erpnext.com/login");

test('Bill of Materials in ERPNext', async t => {
	
	await f.login('umair.sayyed@icloud.com', '1234')
	await f.setTestSpeed(0.75).wait(500)
	await f.use_voice("samantha")

    await f.toggle_speak(false)
	
	await f.speak(`

		Hi.

		Welcome to E R P Next tutorials.

		In this video, we will learn how to create a Production Order and manage production cycle in E R P Next.

		You can create new Production Order from Production Planning Tool, as well as it can be created manually from 
		manufacturing module.	
		`)

	await f.search ("new production or", "New Production Order")

	await f.speak(`
			Select an item to manufacture.
			`)
		
	await f.fill_field("item","samsun", "Samsung On5 Pro (Gold)")
	
	await f.hover_element("label", "BOM No")

	await f.speak(`
			On selection of item, the default bill of material for that item will be fetched.
			`)
		
	await f.hover_element("label","Qty To Manufacture")

	await f.hover_element("label","With Operations")

	await f.speak(`
			Check this field if you also want to list operations through which raw material items will be processed into finished item.
			`)

	await f.fill_field("With Operations")

	await f.speak(`
			Lets add operations.
			`)
	await f.scroll(200)

	await f.scroll_to_section("Operations")

	await f.add_row("operations")

	await f.open_row("operations",1)

	await f.speak(`Select an operation.`)

	await f.fill_field("operation","Assembly","assem")

	await f.speak(`Select a workstation on which this operation will be performed.`)

	await f.fill_field("workstation","Assembly Station 1","assemb")

	await f.speak(`Enter Hourly rate for this operations.`)

	await f.fill_field("hour_rate", "200")

	await f.speak(`Enter time required to complete this operation.`)

	await f.fill_field("time_in_mins", "30")

	await f.speak(`Lets add one more operation.`)

	await f.insert_below()
		
	await f.pause(1)
		
	await f.fill_field("operation","Packaging","packa")

	await f.fill_field("workstation", "Packaging", "packa")

	await f.fill_field("hour_rate", "100")

	await f.fill_field("time_in_mins", "15")

	await f.close_row()
	
	await f.scroll_to_section("Materials")
		
	await f.speak(`Now, we can select raw-material items which are needed for manufacturing.`)
	
	await f.open_row("items",1)
		
	await f.speak(`Select raw-material item code here.`)
		
	await f.fill_field("item_code", "5 MP Camera", "5 mp c")
		
	await f.hover_element("label","Qty")
		
	await f.speak(`Enter quantity of this item required for production.`)

	await f.fill_field("qty", "2")
		
	await f.speak(`This way, you can add other raw-material items as well.`)
		
	await f.insert_below()
		
	await f.fill_field("item_code", "Mobile Display 5", "mobile display")
		
	await f.insert_below()
		
	await f.fill_field("item_code", "Mobile Outer Body", "mobile outer")
		
	await f.insert_below()
		
	await f.fill_field("item_code", "Battery 2300 mAh", "battery 23")
		
	await f.insert_below()
		
	await f.fill_field("item_code", "Motherboard", "motherbo")
		
	await f.hover_element("label","BOM No")
		
	await f.speak(`
			Since motherboard is a sub-assembly item, and has its own Bill of Materials, it's I D is also
			fetched with other item details.
		
			You should create B O M for the sub-assembly first, and then select it as a raw-material in the B O M of the 
			finished item.
		`)
		
	await f.close_row()
		
	await f.speak(`Now we can save and submit this B O M.`)
		
	await f.click_primary_button("Save")
	await f.click_primary_button("Submit")
	await f.click_primary_button("Yes")
		
	await f.hover_element("label","Is Default")
		
	await f.speak(`Check this field to set this B O M as a default B O M for this manufacturing Item. 
			`)
	
	await f.scroll_to_section("Costing")
		
	await f.speak(`Based on the costing of operations and raw-material items, total cost will be calculated for the manufacturing
			of finished items.
		`)
	
	await f.hover_element("label", "Total Cost")
		
	await f.scroll_to_section("Materials Required (Exploded)")
		
	await f.speak(`This is a list of raw-materials, plus, items from the B O M of the sub-assembly items.`)
		
	await f.speak(`Once B O M is created, you
				can use it in various tools and transactions like Production Planning Tool, Production Order, Material Request etc.
				`)
	
	await f.speak(`
			Hope you found this video tutorial useful. For more details and free sign up, check e r p next dot com.
		Thanks for watching.
		`)
});