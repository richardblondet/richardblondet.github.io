import { useState } from "react";
import { ProfileCard,  } from "@richardblondet.com/ui";

const PersonasExampleList = [{
    slug: 'software-developer',
    name: 'Software Developer',
    avatarImage: '/profile-picture.jpeg',
    description: 'I\'d love to change the world, but they won\'t give me the source code.',
    actions: ['coded', 'documented', 'reviewed', 'launched', 'been-recruited'],
    now: [ '🧳 open for work', '🛠 building personas', '👓 learning astro'],
    bannerImage: 'http://localhost:3000/banner-image.jpeg',
    theme: {}
  }, 
  {
    slug: 'blogger',
    name: 'Blogger',
    avatarImage: '/profile-picture.jpeg',
    description: 'I\'m summarizing and recording the progress of my life journey in the context of this project related to this project ',
    actions: ['#hashtag', '#hashtag', '#hashtag', '#hashtag', '#hashtag'],
    now: ['🛠 building personas'],
    bannerImage: 'http://localhost:3000/banner-image.jpeg',
    theme: {}
  }, {
    slug: 'mtb-hobbyist',
    name: 'MTB Hobbyist',
    avatarImage: '/profile-picture.jpeg',
    description: 'I like to bike occasionally over mirador sur',
    actions: ['#hashtag', '#hashtag'],
    now: ['🛠 building personas'],
    bannerImage: 'http://localhost:3000/banner-image.jpeg',
    theme: {}
}];

export interface ProfileCardProps {
  personas?: any[]
}

export default ({ personas }: ProfileCardProps) => {

  const defaultSelectedPersona = 'software-developer';
  const personasList = personas ? personas : PersonasExampleList;

  const [selectedPersona, setSelectedPersona] = useState(defaultSelectedPersona);

  const onPersonaItemClick = (p?: string) => {
    setSelectedPersona(p || defaultSelectedPersona);
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
}