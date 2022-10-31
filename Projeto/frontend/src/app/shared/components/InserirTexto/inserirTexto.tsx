import "./inserirTexto.css";

interface configInserirTexto {
  children: string;
  onChange: Function;
  value: string;
  type: string;
  id: string;
}

interface configInputSearch {
  onChange: Function;
  type: string;
  placeholder: string;
}

export const InserirTexto = ({
  onChange,
  type,
  children,
  value,
  id,
}: configInserirTexto) => {
  return (
    <div className="inputText">
      <input
        required
        className="inputTexto"
        onChange={(e) => onChange(e.target.value)}
        value=""
        id={id}
      />
      <label className="label" htmlFor={id}>{children}</label>
    </div>
  );
};

export const InputSearch = (props: configInputSearch) => {
  return (
    <>
      <input
        className="inputAircraft"
        onChange={(e) => props.onChange(e.target.value)}
        placeholder={props.placeholder}
        type={props.type}
      />
    </>
  );
};
