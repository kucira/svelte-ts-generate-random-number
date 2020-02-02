import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, e as element, t as text, a as space, b as add_location, c as attr_dev, l as listen_dev, f as insert_dev, g as append_dev, h as set_data_dev, p as prop_dev, n as noop, j as detach_dev, r as run_all } from './bundle2.js';

/* src/App.svelte generated by Svelte v3.14.1 */

const file = "src/App.svelte";

function create_fragment(ctx) {
	let div0;
	let t0;
	let t1;
	let t2;
	let div1;
	let t3;
	let t4;
	let t5;
	let div2;
	let t7;
	let input0;
	let t8;
	let input1;
	let t9;
	let dispose;

	const block = {
		c: function create() {
			div0 = element("div");
			t0 = text("C: ");
			t1 = text(ctx.celcius);
			t2 = space();
			div1 = element("div");
			t3 = text("F: ");
			t4 = text(ctx.fahrenheit);
			t5 = space();
			div2 = element("div");
			div2.textContent = `${ctx.generateRandomNumber()}`;
			t7 = space();
			input0 = element("input");
			t8 = text(" °c =\n");
			input1 = element("input");
			t9 = text(" °f");
			add_location(div0, file, 34, 0, 786);
			add_location(div1, file, 35, 0, 810);
			add_location(div2, file, 36, 0, 837);
			input0.value = ctx.celcius;
			attr_dev(input0, "type", "number");
			attr_dev(input0, "class", "svelte-rhd2k2");
			add_location(input0, file, 37, 0, 875);
			input1.value = ctx.fahrenheit;
			attr_dev(input1, "type", "number");
			attr_dev(input1, "class", "svelte-rhd2k2");
			add_location(input1, file, 38, 0, 963);

			dispose = [
				listen_dev(input0, "input", ctx.input_handler, false, false, false),
				listen_dev(input1, "input", ctx.input_handler_1, false, false, false)
			];
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, div0, anchor);
			append_dev(div0, t0);
			append_dev(div0, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, div1, anchor);
			append_dev(div1, t3);
			append_dev(div1, t4);
			insert_dev(target, t5, anchor);
			insert_dev(target, div2, anchor);
			insert_dev(target, t7, anchor);
			insert_dev(target, input0, anchor);
			insert_dev(target, t8, anchor);
			insert_dev(target, input1, anchor);
			insert_dev(target, t9, anchor);
		},
		p: function update(changed, ctx) {
			if (changed.celcius) set_data_dev(t1, ctx.celcius);
			if (changed.fahrenheit) set_data_dev(t4, ctx.fahrenheit);

			if (changed.celcius) {
				prop_dev(input0, "value", ctx.celcius);
			}

			if (changed.fahrenheit) {
				prop_dev(input1, "value", ctx.fahrenheit);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div0);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(div1);
			if (detaching) detach_dev(t5);
			if (detaching) detach_dev(div2);
			if (detaching) detach_dev(t7);
			if (detaching) detach_dev(input0);
			if (detaching) detach_dev(t8);
			if (detaching) detach_dev(input1);
			if (detaching) detach_dev(t9);
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let c = 0;
	let f = 32;
	let fahrenheit = 0;
	let celcius = 0;

	function setBothFromC(value) {
		$$invalidate("c", c = +value);
	}

	function setBothFromF(value) {
		$$invalidate("f", f = +value);
	}

	const generateRandomNumber = () => {
		let text = "";
		let possible = "0123456789";
		let i = 0;

		for (i = 0; i < 4; i++) {
			text += possible.charAt(Math.floor(Math.random() * possible.length));
			console.log(text);
		}

		return text;
	};

	const input_handler = e => setBothFromC(e.target.value);
	const input_handler_1 = e => setBothFromF(e.target.value);

	$$self.$capture_state = () => {
		return {};
	};

	$$self.$inject_state = $$props => {
		if ("c" in $$props) $$invalidate("c", c = $$props.c);
		if ("f" in $$props) $$invalidate("f", f = $$props.f);
		if ("fahrenheit" in $$props) $$invalidate("fahrenheit", fahrenheit = $$props.fahrenheit);
		if ("celcius" in $$props) $$invalidate("celcius", celcius = $$props.celcius);
	};

	$$self.$$.update = (changed = { c: 1, f: 1 }) => {
		if (changed.c) {
			 $$invalidate("fahrenheit", fahrenheit = parseInt((32 + 9 / 5 * c).toFixed(1), 10));
		}

		if (changed.f) {
			 $$invalidate("celcius", celcius = parseInt((5 / 9 * (f - 32)).toFixed(1), 10));
		}
	};

	return {
		fahrenheit,
		celcius,
		setBothFromC,
		setBothFromF,
		generateRandomNumber,
		input_handler,
		input_handler_1
	};
}

class App extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "App",
			options,
			id: create_fragment.name
		});
	}
}

// Svelte!
new App({
    target: document.body
});
//# sourceMappingURL=index.js.map
//# sourceMappingURL=bundle.js.map
