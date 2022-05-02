import { useState } from "react";
import { useSWRConfig } from "swr";

export default function Product(props) {
  const [isDeleteMode, setDeleteMode] = useState(false);

  function enableDeleteMode() {
    setIsEditMode(true);
  }

  function disableDeleteMode() {
    setDeleteMode(false);
  }

  return (
    <div>
      {isDeleteMode ? (
        <ProductModeEdit {...props} onDisableDeleteMode={disableDeleteMode} />
      ) : (
        <ProductModeShow {...props} onEnableDeleteMode={enableDeleteMode} />
      )}
    </div>
  );
}

function ProductModeShow({
  name,
  description,
  tags,
  price,
  category,
  onEnableDeleteMode,
}) {
  return (
    <div>
      <div>
        <div>
          <h5>{name}</h5>
          <h5>{price}</h5>
        </div>
        <div>
          <p>{description}</p>
          <p>{category}</p>
        </div>
        <ul>
          <li>{tags}</li>
        </ul>
        <div>
          <button onClick={onEnableDeleteMode}>Delete</button>
          <button>Edit</button>
        </div>
      </div>
    </div>
  );
}

function ProductModeEdit({
  name,
  description,
  tags,
  price,
  category,
  onDisableDeleteMode,
}) {
  return (
    <div>
      <div>
        <h5>{name}</h5>
        <h5>{price}</h5>
      </div>
      <div>
        <p>{description}</p>
        <p>{category}</p>
      </div>
      <ul>
        <li>{tags}</li>
      </ul>
      <div>
        <button onClick={onDisableDeleteMode}>Abbrechen</button>
        <button>Wirklich löschen</button>
      </div>
    </div>
  );
}
