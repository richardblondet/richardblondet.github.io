// import { useState } from "react";
import { ProfileCard } from "@richardblondet.com/ui";
import type { PersonaModel } from "../../../../content/config";

export interface ProfileCardProps {
  personasList: PersonaModel[];
  selectedPersona: string;
}

export default ({ personasList, selectedPersona = 'software-developer' }: ProfileCardProps) => {

  const onPersonaItemClick = (p?: string) => {
    window.location.href = `/as/${p}`;
  };

  const componentProps = {
    personasList,
    selectedPersona,
    onPersonaItemClick
  };

  return (
    <> 
      <ProfileCard {...componentProps} />
    </>
  );
};