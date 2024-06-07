import PropTypes from "prop-types";
import axios from "axios";

const AuthPage = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    axios
      .post("https://70e25b6d-80a5-4e26-8479-5d6338cab092-00-2m1orqfnm7eqj.kirk.replit.dev/authenticate", {
        username: value,
      })
      .then((r) =>
        props.onAuth({ ...r.data, secret: "b6780019409e8d3bee5030a28ffef105b47792613511075c5ab3a32ad7ebae11" })
      )
      .catch((e) => console.error("error", e));
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome 👋</div>

        <div className="form-subtitle">Set a username to get started</div>

        <div className="auth">
          <div className="auth-label">Username</div>
          <input className="auth-input" name="username" />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

AuthPage.propTypes = {
  onAuth: PropTypes.func.isRequired,
};

export default AuthPage;
