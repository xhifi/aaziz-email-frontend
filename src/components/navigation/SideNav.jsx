import Link from "next/link";

const SideNav = () => {
  return (
    <div className="col-2">
      <ul className="list-unstyled mb-0 bg-light rounded overflow-hidden">
        <li>
          <Link href="/directory" className="d-block bg-dark text-light p-2 px-3 text-decoration-none">
            Directory
          </Link>
        </li>
        <li>
          <Link href="/campaigns" className="d-block p-2 px-3 text-decoration-none">
            Campaigns
          </Link>
        </li>
        <li>
          <Link href="/something" className="d-block p-2 px-3 text-decoration-none">
            Something
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default SideNav;
