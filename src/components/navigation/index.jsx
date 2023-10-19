import Link from "next/link";

export default function Navigation() {
  return (
    <div className="container-fluid px-0 shadow bg-light py-2">
      <div className="container-fluid col-11 d-flex align-items-center">
        <h3 className="mb-0">Logo</h3>
        <ul className="list-unstyled mb-0 ms-auto">
          <li>
            <Link href="/" className="btn btn-dark">
              Dashboard
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
