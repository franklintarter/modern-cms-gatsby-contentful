import React from "react"
import Layout from "../components/layout"

import menus from "../../mock-data.json"

const MenuItem = ({ name, description, price }) => (
  <div
    style={{ display: "flex", justifyContent: "space-bewteen", width: "100%" }}
  >
    <div style={{ flexGrow: 1 }}>
      <h4 style={{ marginBottom: 0 }}>{name}</h4>
      <p>{description}</p>
    </div>
    <p>{price}</p>
  </div>
)

const MenuSection = ({ name, items, image, imageAlt }) => (
  <div style={{ marginBottom: "4rem" }}>
    <h3>{name}</h3>
    <img src={image} alt={imageAlt} />
    {items.map(item => (
      <MenuItem
        key={item.name}
        name={item.name}
        price={item.price}
        description={item.description}
      />
    ))}
  </div>
)

const Menu = ({ name, sections }) => (
  <div style={{ marginBottom: "4rem" }}>
    <h2>{name}</h2>
    {sections.map(s => (
      <MenuSection
        key={s.name}
        name={s.name}
        items={s.items}
        image={s.image}
        imageAlt={s.imageAlt}
      />
    ))}
  </div>
)

const IndexPage = () => (
  <Layout>
    <div style={{ maxWidth: "28rem", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "4rem" }}>Menus</h1>
      {menus.map(m => (
        <Menu key={m.key} name={m.name} sections={m.sections} />
      ))}
    </div>
  </Layout>
)

export default IndexPage
