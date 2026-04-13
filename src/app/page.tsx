import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="bg-green-400 flex items-center justify-between p-4">

        <h1 className="text-amber-50 text-2xl">Finances</h1>
        <Menu>
          <MenuItem href="/unknown">visao geral</MenuItem>
          <MenuItem href="/unknown">lançamentos</MenuItem>
          <MenuItem href="/unknown">relatórios</MenuItem>
          <MenuItem href="/unknown">limite de gastos</MenuItem>
        </Menu>
        <Menu >
          <MenuItem href="/unknown">configurações</MenuItem>
        </Menu>
      </header>
      <main>

      </main>
    </>
  );
}

function Menu({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <menu className="flex justify-between text-amber-50">
      {children}
    </menu>
  );
}

function MenuItem({
  href,
  children,
}: Readonly<{
  href: string;
  children: React.ReactNode;
}>) {
  return (
    <li>
      <Link className="mx-2" href={href}>
        {children}
      </Link>
    </li>
  );
}