import { Outlet } from 'react-router';

export default function Layout() {
  return (
    <div>
      <aside>Layout</aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
