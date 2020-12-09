// component

const Button = ({ onReset }) => (
  <button  
      onClick={ onReset } 
      className="btn btn-danger"
    >
    Reset
  </button>
);
export default Button;