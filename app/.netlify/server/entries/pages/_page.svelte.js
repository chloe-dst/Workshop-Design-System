import { c as create_ssr_component, d as add_attribute, f as add_styles, i as is_void, v as validate_component } from "../../chunks/index.js";
const Text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tag = "p" } = $$props;
  let { color = "var(--color-primary)" } = $$props;
  let { style = "text-body" } = $$props;
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  return `${((tag$1) => {
    return tag$1 ? `<${tag}${add_attribute("class", style, 0)}${add_styles({ color })}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}`;
});
const global = "";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Text, "Text").$$render($$result, { tag: "h2", style: "title" }, {}, {
    default: () => {
      return `Yo Valentin
`;
    }
  })}`;
});
export {
  Page as default
};
