import Dashboard from "../../components/Layout/dashboard"

export default function Index() {
    return (
      <div>
        <p>Dashboard</p>
      </div>
    )
  }

  Index.getLayout = function getLayout(page) {
    return (
      <Dashboard>
        {page}
      </Dashboard>
    )
  }