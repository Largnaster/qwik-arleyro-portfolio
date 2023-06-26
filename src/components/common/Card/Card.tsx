import { JSXNode, component$ } from "@builder.io/qwik";
import { Fragment } from "@builder.io/qwik/jsx-runtime";

interface FooterItem {
  name: string;
  component: JSXNode;
}

interface CardProps {
  title: string;
  description: string;
  key?: number | string;
  footerItems?: FooterItem[];
}

export default component$<CardProps>(
  ({ title, description, key, footerItems }) => {
    return (
      <div key={key} class="card">
        <h3>{title}</h3>
        <div>{description}</div>
        {footerItems && footerItems.length > 0 && (
          <Fragment>
            <hr />
            <div class="card-footer">
              {footerItems.map((item) => (
                <div key={`footer_item_${item.name}`}>{item.component}</div>
              ))}
            </div>
          </Fragment>
        )}
      </div>
    );
  }
);
