import React from "react";

import { PencilSimpleLine as IconEdit } from "phosphor-react";

const Aside: React.FC = () => {
  const title = 'Aside';

  return (
    <aside className="aside">
      <div className="cover">
        <img src="https://images.unsplash.com/photo-1571371867188-fdc3f1f8e62d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80" alt="" />
      </div>

      <div className="profile">
        <div className="avatar">
          <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80" alt="" />
        </div>

        <p className="name">Leslie Alexander</p>

        <p className="office">Front-end developer</p>
      </div>

      <button className="button" type="button">
        <IconEdit size={20} />
        
        Editar perfil
      </button>
    </aside>
  );
};

export default Aside;