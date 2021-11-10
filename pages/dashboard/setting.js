import Dashboard from "../../components/Layout/dashboard"


export default function Setting() {
    return (
      <div>
        <p>Setting</p>
      </div>
    )
  }

  Setting.getLayout = function getLayout(page) {
    return (
      <Dashboard>
        {page}
      </Dashboard>
    )
  }