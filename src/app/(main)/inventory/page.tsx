import Item from "@/components/Inventory/item";

export default function Page() {
  return (
    <main>
      <Item
        img="/img/pixelArt.jpg"
        name="Assistir 30 minutos de série"
        quantity={5}
      />
    </main>
  );
}
