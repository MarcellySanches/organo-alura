import InputText from "../InputText"
import SelectList from "../SelectList";
import Button from '../Button'
import "./form.css"
import { useState } from "react";

const FormForCard = (props) => {

  const [name, setName] = useState("");
  const [office, setOffice] = useState("")
  const [image, setImage] = useState("")
  const [team, setTeam] = useState("")

  const onSave = (event) => {
    event.preventDefault()
    props.onCreateCard({
      name, 
      office,
      image, 
      team
    })
    setName("");
    setOffice("");
    setImage("");
    setTeam("");  
  }

  return (
    <section className="formComponent">
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <InputText  
          required 
          label="Nome" 
          placeholder="Digite seu nome"
          value={name} onChange={value => setName(value)} />
        <InputText 
          required 
          label="Cargo" 
          placeholder="Digite seu cargo"
          value={office} onChange={value => setOffice(value)} />
        <InputText 
          required 
          label="Endereço" 
          placeholder="Digite o endereço da imagem" value={image} 
          onChange={value => setImage(value)} />
        <SelectList 
          required 
          itensList={props.teams}
          label={"Time"} 
          value={team}          
          onChange={value => setTeam(value)}/>
        <Button>Criar card</Button>
      </form>
    </section>
  );
};
export default FormForCard;
