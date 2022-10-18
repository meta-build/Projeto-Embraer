import "./inserirTexto.css";

interface configInserirTexto {
  children: string;
  onChange: Function;
  value: string;
  type: string;
}

interface configInputSearch {
  onChange: Function;
  type: string;
  placeholder: string;
}

export const InserirTexto = (props: configInserirTexto) => {
  return (
    <>
      <label htmlFor="">
        <span>{props.children}</span>
        <input
          className="inputTexto"
          onChange={(e) => props.onChange(e.target.value)}
          value=""
        />
      </label>
    </>
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
